# 格物科技微信小程序名片

这个目录是用于微信聊天卡片的名片版本。

目标效果：

- 在微信聊天里发送的是小程序卡片，不是 URL 链接。
- 对方点击卡片后进入吴瑜的电子名片页面。
- 不经过 `github.io` 外链，也不会出现 GitHub Pages 链接气泡。

发布前需要：

1. 注册微信小程序并获得 AppID。
2. 用微信开发者工具打开 `wechat-miniprogram` 目录。
3. `project.config.json` 已配置 AppID：`wx437c009e733fdf91`。
4. 在微信开发者工具里预览、上传，并在微信公众平台提交审核发布。

分享卡片配置在 `pages/card/card.js` 的 `onShareAppMessage`。
