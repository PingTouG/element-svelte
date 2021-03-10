---
headTitle: 安装 | ElementSvelte
title: 安装
---

## npm 安装

推荐使用`npm`安装，它能更好地和打包工具配合使用。

```bash
npm i element-svelte -S
```

## CDN

目前可以通过[unpkg.com/element-svelte](unpkg.com/element-svelte) 获取到最新版本
的资源，在页面上引入`js`和`css`文件即可开始使用。

```html
<!-- 引入样式 -->
<link
	rel="stylesheet"
	href="https://unpkg.com/element-svelte/lib/theme-chalk/index.css"
/>
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-svelte/lib/index.js"></script>
```

> 我们建议使用`CDN`引入`ElementSvelte`的用户在链接地址上锁定版本，以免将
> 来`ElementSvelte`升级时受到非兼容性更新的影响。锁定版本的方法请查
> 看[unpkg.com](unpkg.com)。

如果是通过`npm`安装，并希望配合打包工具使用，请阅读下一节
：[快速上手](/component/quickstart)。
