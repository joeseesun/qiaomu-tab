function runQiamuProviderAutosubmit(config) {
  const params = new URLSearchParams(window.location.search);
  const prompt = params.get("qiaomutab");

  if (!prompt) {
    return;
  }

  const submitKey = `qiamu-tab-${config.id}:${prompt}`;
  if (sessionStorage.getItem(submitKey)) {
    return;
  }

  params.delete("qiaomutab");
  const cleanedSearch = params.toString();
  const cleanedUrl = `${window.location.pathname}${cleanedSearch ? `?${cleanedSearch}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", cleanedUrl);

  function findElement(selectors) {
    for (const selector of selectors) {
      const element = [...document.querySelectorAll(selector)].find(isUsableElement);
      if (element) {
        return element;
      }
    }
    return null;
  }

  function isUsableElement(element) {
    if (!element) {
      return false;
    }
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
  }

  function dispatchTextEvents(element, text) {
    element.dispatchEvent(new InputEvent("beforeinput", { bubbles: true, cancelable: true, inputType: "insertText", data: text }));
    element.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: text }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function setComposerText(composer, text) {
    composer.focus();

    if (composer.tagName === "TEXTAREA" || composer.tagName === "INPUT") {
      const setter = Object.getOwnPropertyDescriptor(composer.constructor.prototype, "value")?.set;
      setter?.call(composer, text);
      if (!setter) {
        composer.value = text;
      }
      dispatchTextEvents(composer, text);
      return;
    }

    composer.focus();
    document.execCommand("selectAll", false);
    document.execCommand("insertText", false, text);
    if (!getComposerText(composer).includes(text)) {
      composer.textContent = "";
      const selection = window.getSelection();
      const range = document.createRange();
      composer.append(document.createTextNode(text));
      range.selectNodeContents(composer);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    dispatchTextEvents(composer, text);
  }

  function getComposerText(composer) {
    if (composer.tagName === "TEXTAREA" || composer.tagName === "INPUT") {
      return composer.value || "";
    }
    return composer.textContent || "";
  }

  function isSendButtonEnabled(button) {
    return (
      button
      && isUsableElement(button)
      && !button.disabled
      && button.getAttribute("aria-disabled") !== "true"
      && button.dataset.disabled !== "true"
      && button.dataset.loading !== "true"
    );
  }

  function clickSend() {
    const sendButton = findElement(config.sendSelectors);
    if (isSendButtonEnabled(sendButton)) {
      sendButton.click();
      sessionStorage.setItem(submitKey, "1");
      return true;
    }
    return false;
  }

  function pressEnter(composer) {
    ["keydown", "keypress", "keyup"].forEach((type) => {
      composer.dispatchEvent(new KeyboardEvent(type, {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        code: "Enter"
      }));
    });
  }

  let fallbackSubmitQueued = false;

  function submitPrompt() {
    const composer = findElement(config.composerSelectors);
    if (!composer) {
      return false;
    }

    if (!getComposerText(composer).includes(prompt)) {
      setComposerText(composer, prompt);
    }

    if (clickSend()) {
      return true;
    }

    if (fallbackSubmitQueued) {
      return false;
    }
    fallbackSubmitQueued = true;
    window.setTimeout(() => {
      if (clickSend()) {
        return;
      }

      pressEnter(composer);
      sessionStorage.setItem(submitKey, "1");
      fallbackSubmitQueued = false;
    }, config.submitDelay || 160);

    return false;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (submitPrompt() || attempts >= (config.maxAttempts || 80)) {
      window.clearInterval(timer);
    }
  }, config.interval || 250);
}
