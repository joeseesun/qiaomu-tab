runQiamuProviderAutosubmit({
  id: "kimi",
  composerSelectors: [
    "textarea",
    "[contenteditable='true']",
    "[role='textbox']"
  ],
  sendSelectors: [
    "button[type='submit']",
    "button[data-testid*='send']",
    "button[data-testid*='submit']",
    "button[class*='send']",
    "button[class*='submit']",
    "button[aria-label*='发送']",
    "button[aria-label*='Send']"
  ]
});
