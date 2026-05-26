runQiamuProviderAutosubmit({
  id: "doubao",
  composerSelectors: [
    "textarea",
    "[contenteditable='true']",
    "[role='textbox']"
  ],
  sendSelectors: [
    "#flow-end-msg-send",
    "button[data-testid*='send']",
    "button[class*='send']",
    "button[aria-label*='发送']",
    "button[aria-label*='Send']"
  ]
});
