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
  sessionStorage.setItem(submitKey, "1");

  params.delete("qiaomutab");
  const cleanedSearch = params.toString();
  const cleanedUrl = `${window.location.pathname}${cleanedSearch ? `?${cleanedSearch}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", cleanedUrl);

  function findElement(selectors) {
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        return element;
      }
    }
    return null;
  }

  function setComposerText(composer, text) {
    composer.focus();

    if (composer.tagName === "TEXTAREA" || composer.tagName === "INPUT") {
      composer.value = text;
      composer.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: text }));
      composer.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    composer.textContent = "";
    const selection = window.getSelection();
    const range = document.createRange();
    composer.append(document.createTextNode(text));
    range.selectNodeContents(composer);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    composer.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: text }));
    composer.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function clickSend() {
    const sendButton = findElement(config.sendSelectors);
    if (
      sendButton
      && !sendButton.disabled
      && sendButton.getAttribute("aria-disabled") !== "true"
      && sendButton.dataset.disabled !== "true"
      && sendButton.dataset.loading !== "true"
    ) {
      sendButton.click();
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

  function submitPrompt() {
    const composer = findElement(config.composerSelectors);
    if (!composer) {
      return false;
    }

    setComposerText(composer, prompt);

    window.setTimeout(() => {
      if (clickSend()) {
        return;
      }

      pressEnter(composer);
    }, config.submitDelay || 160);

    return true;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (submitPrompt() || attempts >= (config.maxAttempts || 80)) {
      window.clearInterval(timer);
    }
  }, config.interval || 250);
}
