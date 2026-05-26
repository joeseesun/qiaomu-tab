runQiamuProviderAutosubmit({
  id: "kimi",
  composerSelectors: [
    "textarea",
    "[contenteditable='true']",
    "[role='textbox']"
  ],
  sendSelectors: [
    "button[data-testid*='send']",
    "button[class*='send']",
    "button[aria-label*='发送']",
    "button[aria-label*='Send']"
  ]
});
