# Qiaomu Tab

> 把 Chrome 新标签页变成一个安静、中文友好、本地优先的入口面板。
> A calm, local-first Chrome new tab dashboard for links, history, todos, notes, weather, and quick AI search.

[![GitHub stars](https://img.shields.io/github/stars/joeseesun/qiaomu-tab?style=social)](https://github.com/joeseesun/qiaomu-tab/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/joeseesun/qiaomu-tab?style=social)](https://github.com/joeseesun/qiaomu-tab/network/members)
[![GitHub issues](https://img.shields.io/github/issues/joeseesun/qiaomu-tab)](https://github.com/joeseesun/qiaomu-tab/issues)
[![Last commit](https://img.shields.io/github/last-commit/joeseesun/qiaomu-tab)](https://github.com/joeseesun/qiaomu-tab/commits/main)

![Qiaomu Tab product screenshot](docs/assets/product-screenshot.png)

## 为什么值得用

Chrome 默认新标签页太吵，书签栏又太挤。Qiaomu Tab 把常用入口、最近访问、收藏夹、待办、便签、天气和 AI 搜索放进一个更克制的页面里。

所有核心数据优先保存在本地。它适合把浏览器首页整理成一个轻量工作台，而不是再加一个需要注册登录的云服务。

## 核心功能

- 替换 Chrome 新标签页，新窗口打开时也进入同一个面板。
- 点击扩展图标时打开完整标签页面板。
- 添加、编辑、删除和分组自定义网址，并用本地存储保存。
- 读取最近 Chrome 历史记录，并自动归入 AI、开发、工作、阅读、社交、影音、购物等类别。
- 搜索自定义网址、最近历史、浏览器收藏和站内记录。
- 支持今日待办、最近完成归档、番茄钟、便签和天气抽屉。
- 支持浅色、深色、壁纸和中英文界面。
- 本地打包常见 AI 与热门网站图标，并为其他网站提供 favicon 回退。

## 安装

### 前置条件

- [ ] 已安装 Chrome 或 Chromium。
- [ ] 已安装 Git。验证命令：`git --version`
- [ ] 如需重新构建便签编辑器，已安装 Node.js 18+。验证命令：`node --version`

### 从 GitHub 加载

1. 克隆仓库。

   ```bash
   git clone https://github.com/joeseesun/qiaomu-tab.git
   cd qiaomu-tab
   ```

2. 安装依赖并构建便签编辑器。

   ```bash
   npm install
   npm run build:notes
   ```

3. 在 Chrome 打开 `chrome://extensions`。
4. 开启 Developer mode。
5. 点击 Load unpacked。
6. 选择克隆后的 `qiaomu-tab` 文件夹。
7. 打开一个新标签页，确认出现 `乔木插件` 首页。

## 本地开发

```bash
npm install
npm run build:notes
```

插件主体是原生 Chrome MV3 项目，不需要 dev server。修改 `newtab.html`、`newtab.css`、`newtab.js` 后，在 `chrome://extensions` 点击 Reload，再打开新标签页检查效果。

## 权限说明

- `history`：读取最近浏览历史，用于新标签页里的分组最近访问。
- `bookmarks`：读取浏览器收藏夹，用于侧栏收藏视图。
- `storage`：在本地保存自定义网址、待办、设置、便签和缓存。
- `https://chatgpt.com/*`、`https://www.doubao.com/*`、`https://www.kimi.com/*`：用于把搜索词提交到对应 AI 服务。
- `https://mp.weixin.qq.com/*`：改善微信文章在历史记录里的标题显示。
- `https://www.google.com/*`：获取并缓存网站 favicon。
- `https://v1.hitokoto.cn/*`：获取首页好句。
- `https://restapi.amap.com/*`：获取天气数据。
- `<all_urls>`：为常见网址入口和 favicon 回退保留兼容能力。

## 常见问题

| 问题 | 解决方式 |
| --- | --- |
| Load unpacked 后没有变化 | 在 `chrome://extensions` 确认扩展已启用，然后重新打开一个新标签页。 |
| 便签编辑器不可用 | 运行 `npm install && npm run build:notes`，确认生成了 `assets/note-editor.bundle.js`。 |
| 最近访问或收藏夹为空 | 检查扩展详情页里 `history` 和 `bookmarks` 权限是否已授权。 |
| 天气无法加载 | 确认网络可访问高德天气接口，或在代码里替换自己的高德 Web 服务 Key。 |

## 风险与限制

Qiaomu Tab 会读取本机浏览历史和收藏夹，但不会把这些数据上传到第三方服务。天气和好句功能会访问对应公开接口；AI 搜索提交功能会把你输入的关键词发送给所选 AI 服务页面。

## English

Qiaomu Tab is a Chrome MV3 new tab extension that keeps your daily browser entry points quiet and local-first. It combines custom links, recent history grouping, bookmarks, todos, notes, weather, Pomodoro, wallpapers, and quick AI search in one dashboard.

To install it, clone this repository, run `npm install && npm run build:notes`, open `chrome://extensions`, enable Developer mode, choose Load unpacked, and select the repository folder.
