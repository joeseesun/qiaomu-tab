runQiamuProviderAutosubmit({
  id: "chatgpt",
  composerSelectors: [
    "#prompt-textarea",
    "[contenteditable='true'][data-virtualkeyboard='true']",
    "textarea"
  ],
  sendSelectors: [
    "[data-testid='send-button']",
    "button[aria-label*='Send']",
    "button[aria-label*='发送']"
  ],
  submitDelay: 120
});
