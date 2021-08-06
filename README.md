<h1 align="center">Hexo Theme Ringo</h1>

<p align="center">
<img alt="Version" src="https://img.shields.io/github/v/release/HeliumOI/hexo-theme-ringo?color=%235755d9&include_prereleases&label=version&style=flat-square">
<a href="https://sophonci117.me" target="_blank"><img alt="Author" src="https://img.shields.io/badge/Author-HeliumOI-b68469.svg?style=flat-square"/></a>
<a href="https://hexo.io" target="_blank"><img alt="Hexo" src="https://img.shields.io/badge/hexo-4.0+-0e83cd.svg?style=flat-square"/></a>
<a href="https://nodejs.org/" target="_blank"><img alt="node.js" src="https://img.shields.io/badge/node.js-10%2B-43853d.svg?style=flat-square"/></a>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/HeliumOI/hexo-theme-ringo?style=flat-square">
</p>

## Introduction 介绍

一个朴素的 Hexo 主题，移植自 [memset0](https://github.com/memset0) 开发的 Typecho 主题 [typecho-theme-ringo](https://github.com/memset0/typecho-theme-ringo)。

## Preview 预览

- [Hexo-Theme-Ringo](https://ringo.sophonci117.me/)

![](https://cdn.jsdelivr.net/gh/HeliumOI/imghost@latest/ringo-demo.png)

## Download 下载

```bash
git clone https://github.com/HeliumOI/hexo-theme-ringo.git themes/ringo
```

## Feature 特性 🕊️

- [x] 归档、标签、分类页面
- [x] i18n 支持
- [x] 访问次数统计
- [x] 回到顶部按钮
- [x] 数学公式（MathJax）
- [x] 代码高亮（Highlight.js / Prettify）
- [x] 图片（Viewer.js）
- [x] 无 jQuery，纯原生 JavaScript
- [x] 评论系统（Gitalk / Disqus / Valine / Livere）
- [x] 页脚备案信息
- [x] Analytics（Google / Baidu / Tencent / CNZZ / Cloudflare / Microsoft Clarity）
- [x] 图片 Lazyload（vanilla-lazyload）
- [x] 站长验证（Site Verification）
- [x] 友情链接页面
- [ ] 文章目录
- [ ] 全局搜索

## License 许可证

[![license](https://img.shields.io/github/license/HeliumOI/hexo-theme-ringo.svg?style=flat-square)](https://github.com/HeliumOI/hexo-theme-ringo/blob/master/LICENSE)

Open sourced under the GPL v3.0 license.

根据 GPL V3.0 许可证开源。

## ⚠️注意事项

请在博客根目录的 `_config.yml` 文件中关闭 `highlight` 代码高亮以确保代码的正常渲染。

```yaml
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: true
```