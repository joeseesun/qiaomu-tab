# Privacy Policy for Qiaomu Tab

Last updated: 2026-05-27

Qiaomu Tab is a local-first Chrome new tab extension. It replaces the default new tab page with a personal dashboard for search, custom links, recent browsing, bookmarks, todos, notes, weather, quotes, and a lightweight music widget.

## Data The Extension Handles

Qiaomu Tab may handle the following data only to provide its user-facing features:

- Browsing history: used to show recent visits, group them by category, and include them in local search results on the new tab page.
- Bookmarks: used to show the browser bookmarks panel and include bookmarks in local search results.
- User-created content: custom links, todos, notes, weather city selections, preferences, and cached UI data.
- Search text: used when the user actively submits a query to the selected search provider or AI entry point.

## Local Storage

Custom links, todos, notes, settings, weather city selections, quote cache, and icon cache are stored in Chrome extension storage on the user's device. Qiaomu Tab does not upload browsing history, bookmarks, todos, notes, custom links, or settings to a Qiaomu Tab server.

## Third-Party Requests

Some optional or user-triggered features contact third-party services:

- Weather requests are sent to the Amap weather API.
- Daily quote requests are sent to Hitokoto.
- Favicon fallback requests are sent to Google's favicon service.
- Music widget requests are sent to the public Qiaomu Music API.
- When the user actively selects Google, ChatGPT, Doubao, Kimi, Baidu, Bing, or DuckDuckGo as the search target, the query is sent to the selected service.
- WeChat article metadata requests may be sent to `mp.weixin.qq.com` to improve titles shown in recent browsing.

These requests are made over HTTPS. Third-party services may process requests according to their own privacy policies.

## Data Sharing and Sale

Qiaomu Tab does not sell user data. Qiaomu Tab does not use browsing history, bookmarks, todos, notes, or custom links for advertising. Qiaomu Tab does not transfer user data to third parties except for the feature-specific requests listed above.

The use of information received from Chrome APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.

## Permissions

Qiaomu Tab requests Chrome permissions only for its stated new tab dashboard purpose:

- `history`: to display and search recent browsing locally.
- `bookmarks`: to display and search bookmarks locally.
- `storage`: to save user settings and local dashboard content.
- Host permissions for ChatGPT, Doubao, Kimi, Google, WeChat articles, Qiaomu Music, Hitokoto, and Amap: to support the corresponding user-facing integrations.

## Data Deletion

Users can delete custom links, todos, notes, weather cities, and settings inside the extension UI where available. Users can also remove all extension data by uninstalling Qiaomu Tab from Chrome, which removes the extension's local storage.

## Contact

For privacy questions, contact the project maintainer through the Qiaomu Tab repository or the support contact listed on the Chrome Web Store item.
