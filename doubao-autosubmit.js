runQiamuProviderAutosubmit({
  id: "doubao",
  composerSelectors: [
    "textarea",
    "[contenteditable='true']",
    "[role='textbox']"
  ],
  sendSelectors: [
    "#flow-end-msg-send",
    "button[type='submit']",
    "button[data-testid*='send']",
    "button[data-testid*='submit']",
    "button[class*='send']",
    "button[class*='submit']",
    "button[aria-label*='发送']",
    "button[aria-label*='Send']"
  ]
});
