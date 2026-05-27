runQiamuProviderAutosubmit({
  id: "chatgpt",
  composerSelectors: [
    "#prompt-textarea",
    "[contenteditable='true'][data-virtualkeyboard='true']",
    "textarea"
  ],
  sendSelectors: [
    "[data-testid='composer-submit-button']",
    "[data-testid='send-button']",
    "button[data-testid*='submit']",
    "button[aria-label*='Submit']",
    "button[aria-label*='Send']",
    "button[aria-label*='发送']"
  ],
  submitDelay: 120
});
