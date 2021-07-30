# hexo-theme-ringo

## Introduction 介绍

一个朴素的 Hexo 主题，移植自 [memset0](https://github.com/memset0) 开发的 Typecho 主题 [typecho-theme-ringo](https://github.com/memset0/typecho-theme-ringo)。

## Preview 预览

![](https://cdn.jsdelivr.net/gh/HeliumOI/imghost@latest/ringo-demo.png)

## Download 下载

```bash
git clone https://github.com/HeliumOI/hexo-theme-ringo.git themes/ringo
```

## Feature 特性 🕊️

- [x] 归档、标签、分类页面
- [x] i18n支持
- [x] 访问次数统计
- [x] 回到顶部按钮
- [x] 数学公式（MathJax）
- [x] 代码高亮（highlight.js）
- [x] 图片（FancyBox）
- [x] 评论系统（Gitalk / Disqus / Valine）
- [x] 页脚备案信息
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