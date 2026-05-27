# Chrome Web Store Submission

## Package

- Upload file: `dist/qiaomu-tab-0.1.0.zip`
- Version: `0.1.0`
- Manifest: MV3
- Category: Productivity
- Language: Chinese Simplified, English

Build command:

```bash
npm run build:release
```

The release script rebuilds `assets/note-editor.bundle.js`, validates the manifest, creates the zip, and runs `unzip -t` on the package.

## Store Listing

Name:

乔木Tab / Qiaomu Tab

Short description:

一个安静、本地优先的新标签页工作台，整合搜索、常用网站、最近访问、收藏夹、待办、便签、天气和音乐。

Detailed description:

乔木Tab 把 Chrome 新标签页换成一个安静、漂亮、本地优先的个人工作台。

它适合每天频繁打开新标签页、在搜索、AI 工具、收藏夹、历史记录和轻量待办之间切换的人。核心数据保存在浏览器本地，不需要注册登录。

主要功能：

- 搜索网址、历史记录、收藏夹，并可切换 Google、ChatGPT、豆包、Kimi、百度、Bing、DuckDuckGo。
- 管理自定义常用网站，自动匹配常见品牌图标。
- 查看最近访问记录，并按 AI、开发、工作、阅读、社交、影音、购物等场景整理。
- 读取浏览器收藏夹，作为新标签页侧栏的快速导航。
- 添加今日待办、便签和番茄钟。
- 添加关注城市，查看天气和预报。
- 显示每日一句和轻量音乐模块。
- 支持中文、英文、浅色/深色主题和壁纸切换。

隐私边界：

乔木Tab 会读取浏览历史和收藏夹，用于新标签页内的最近访问、分类、本地搜索和收藏夹展示。自定义网站、待办、便签、设置和缓存默认保存在浏览器本地。插件不会把你的浏览历史、收藏夹、待办或便签上传到乔木Tab 自己的服务器。

部分功能会在你启用或使用时访问第三方服务：天气请求高德天气接口，每日一句请求一言接口，favicon 回退请求 Google favicon 服务，音乐模块请求乔木音乐公开接口。当你主动选择 Google、ChatGPT、豆包、Kimi 等搜索目标时，输入的关键词会发送到对应服务页面。

## Permission Justifications

`history`:

读取最近浏览记录，用于新标签页的最近访问列表、分类和本地搜索。这是核心功能之一，不会上传到乔木Tab 自己的服务器。

`bookmarks`:

读取浏览器收藏夹，用于侧栏收藏夹视图和本地搜索。这是核心导航功能之一，不会上传到乔木Tab 自己的服务器。

`storage`:

保存自定义网站、待办、便签、设置、天气城市、每日一句和图标缓存。

`https://chatgpt.com/*`, `https://www.doubao.com/*`, `https://www.kimi.com/*`:

仅用于在用户主动选择对应 AI 搜索入口后，把关键词带到目标页面并尝试自动填入/提交。

`https://www.google.com/*`:

用于 Google 搜索入口和 Google favicon 服务兜底。

`https://mp.weixin.qq.com/*`:

用于改善微信文章在历史记录中的标题和来源显示。

`https://music.qiaomu.ai/*`:

用于加载音乐模块的公开曲目、歌词和音频资源。

`https://v1.hitokoto.cn/*`:

用于加载首页每日一句。

`https://restapi.amap.com/*`:

用于加载天气实况和预报。

## Privacy Fields

Privacy policy:

Publish `docs/privacy-policy.md` to a public URL before submitting. If the GitHub repository is public, a suitable URL after pushing is:

`https://github.com/joeseesun/qiaomu-tab/blob/main/docs/privacy-policy.md`

Single purpose:

乔木Tab 是一个本地优先的新标签页工作台，用于集中管理搜索入口、常用网站、最近访问、收藏夹、待办、便签、天气和轻量音乐。

Data usage disclosure:

本扩展会读取浏览历史和收藏夹，仅用于在新标签页中展示最近访问、收藏夹、本地搜索和分类结果。用户创建的自定义网站、待办、便签和设置保存在浏览器本地。扩展不会出售用户数据，不会将浏览历史、收藏夹、待办或便签用于广告，也不会将这些数据上传到乔木Tab 自己的服务器。

Remote services disclosure:

天气功能会请求高德天气接口；每日一句会请求一言接口；favicon 回退会请求 Google favicon 服务；音乐模块会请求乔木音乐公开接口；当用户主动选择第三方搜索或 AI 入口时，搜索关键词会发送到对应服务页面。

## Test Instructions

1. 安装扩展后打开一个新标签页。
2. 在搜索框输入关键词，检查本地搜索、网页搜索和 AI 搜索入口。
3. 打开右侧侧栏，检查最近访问、收藏夹和设置。
4. 添加一个自定义网站，刷新新标签页后确认仍然存在。
5. 添加、完成、删除一个待办。
6. 点击便签按钮创建便签，输入内容后刷新确认本地保存。
7. 打开天气面板，搜索并添加一个城市，检查天气卡片。
8. 打开音乐模块，检查曲目加载和播放控件。

## Required Assets

- Extension icon: `assets/icon128.png`
- Screenshot: `docs/assets/webstore-screenshot-1280x800.png`
- Small promotional image: `docs/assets/webstore-promo-440x280.png`

## Submission Steps

1. Make sure `docs/privacy-policy.md` is available at a public URL.
2. Confirm the Chrome Web Store developer account has 2-Step Verification enabled.
3. Go to the Chrome Web Store Developer Dashboard.
4. Choose Add new item.
5. Upload `dist/qiaomu-tab-0.1.0.zip`.
6. Fill Store Listing using the text above.
7. Upload `assets/icon128.png`, `docs/assets/webstore-screenshot-1280x800.png`, and `docs/assets/webstore-promo-440x280.png`.
8. Fill Privacy using the single purpose, data disclosure, and permission justifications above.
9. Fill Test instructions using the checklist above.
10. Set distribution visibility and submit for review.
