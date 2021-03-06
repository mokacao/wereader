<h2 align="center"><img src="res/README/icon128.png" height="128"><br>Wereader</h2>

<p align="center"><strong>一个 Chrome / Firefox 扩展：主要用于微信读书做笔记，对常使用 Markdown 做笔记的读者尤其有帮助。</strong></p>

## 安装
<!-- (?<=store-v|Edge%20Add--ons-v)(\d{1,2}\.\d{1,2}\.\d{1,2}) for match version -->
[![](https://img.shields.io/badge/Chrome%20Web%20Store-v2.14.3-brightgreen)](https://chrome.google.com/webstore/detail/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E5%8A%A9%E6%89%8B/cmlenojlebcodibpdhmklglnbaghpdcg?hl=zh-CN) [![](https://img.shields.io/badge/Edge%20Add--ons-v2.14.3-brightgreen)](https://microsoftedge.microsoft.com/addons/detail/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E5%8A%A9%E6%89%8B/iblnlnnpkbhnempmcbioeholmemingmo) [![Mozilla add\-on: v1\.7\.2](https://img.shields.io/badge/Mozilla%20Add--ons-v1.7.2-brightgreen)](https://addons.mozilla.org/zh-CN/firefox/addon/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E5%8A%A9%E6%89%8B/)

不能访问 Chrome 网上应用店时按如下操作在 Chrome 上手动安装（建议在 Chrome 网上应用店安装，因为手动安装的扩展不会自动更新）：

1. 首先，在上面给出的 GitHub 地址上依次点击 `Clone`——`Download ZIP` 下载压缩包。下载好后解压。

2. 接下来，进入 Chrome，在地址栏输入 `chrome://extensions/` 后回车，进入扩展管理页面。

3. 进入页面后，先打开 `开发者模式`，再点击 `加载已解压的扩展程序`，找到前面解压得到的文件夹 `wereader`，双击进入该文件夹，进入后**单击**里面的 `wereader-chrome` 文件夹，这时候文件夹被选中，点击 `选择文件夹` 即可。

## 功能

- 支持一键导出本章内 / 全书标注、热门标注、个人书评、个人想法、书本目录；
- 导出标注的格式可以自定义，你可以设置不同的标注导出效果（如加粗、下划线、斜体）；
- 书中被标注的图片、注释及代码块也可以被一键导出（仅限于导出本章标注）；
- 支持为读书页面添加图片、注释、代码块一键复制按钮；
- 可切换护眼色主题；
- 支持书架分类；
- 查看标注时自动滚动到当前章节；
- 支持借助正则匹配对标注进行处理；
- 支持选中文字后自动标注或自动复制；
- 支持读书页右键。
- 支持一键删除本章标注。

## 贡献

如果你有兴趣为此项目贡献代码，那么你可以：

- 完善帮助页（美化页面、使句子更通顺等）——帮助页的 HTML 文档位于 [`./wereader-chrome/options/help.html`](https://github.com/Higurashi-kagome/wereader/blob/master/wereader-chrome/options/help.html)，CSS 文件位于[ `./wereader-chrome/options/help.css`](https://github.com/Higurashi-kagome/wereader/blob/master/wereader-chrome/options/help.css)。
- 完善设置页——设置页的 HTML 文档位于 [`./wereader-chrome/options/options.html`](https://github.com/Higurashi-kagome/wereader/blob/master/wereader-chrome/options/options.html)，CSS 文件位于 [`./wereader-chrome/options/options.css`](https://github.com/Higurashi-kagome/wereader/blob/master/wereader-chrome/options/options.css)。
- 完善阅读页滚动条——相关 CSS 文件位于[ `./wereader-chrome/inject/showScroll.css`](https://github.com/Higurashi-kagome/wereader/blob/master/wereader-chrome/inject/showScroll.css)。
- 可通过更改扩展注入页面的主题 CSS 文件来完善主题，你能够从 [`./wereader-chrome/theme/`](https://github.com/Higurashi-kagome/wereader/tree/master/wereader-chrome/theme) 找到这些 CSS 文件。
- Firefox 扩展已经很久没有更新了，感兴趣的话可以尝试将其更新至与 Chrome 扩展相同的版本。
- 做任何你认为有助于完善此项目的事。

不用在意贡献的大小，任何有帮助的内容都可能被接受。

如果你尝试阅读源码，有不懂的地方也可以直接[联系](mailto:higurashi-kagome@qq.com)我。

## 致谢

| Item                                                        | Reason           |
| ------------------------------------------------------------ | ----------------- |
| [wereader](https://github.com/arry-lee/wereader)             | 此项目为该扩展的起源，我先是在 [pythontools/wereader](https://github.com/liuhao326/pythontools/tree/master/wereader) 中完善了该项目，然后才基于 pythontools/wereader 实现了该扩展。 |
| [examples-of-web-crawlers](https://github.com/shengqiangzhang/examples-of-web-crawlers) | 编写 pythontools/wereader 的过程中参考了该项目中的[一键导出微信读书的书籍和笔记](https://github.com/shengqiangzhang/examples-of-web-crawlers/tree/master/12.%E4%B8%80%E9%94%AE%E5%AF%BC%E5%87%BA%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E7%9A%84%E4%B9%A6%E7%B1%8D%E5%92%8C%E7%AC%94%E8%AE%B0)。 |
| [clipboard.js](https://github.com/zenorocha/clipboard.js)    | 扩展借助该项目实现复制文本。  |
| [sweetalert2](https://github.com/sweetalert2/sweetalert2)    | 扩展借助该项目实现弹窗。     |
| [HbnLg](https://www.iconfont.cn/user/detail?spm=a313x.7781069.1998910419.dcc7d6115&userViewType=collections&uid=4451423) | 图标来源于 [iconfont](https://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.3)，图库显示 Hbnlg 为图标作者。 |
| [SingleFile](https://github.com/gildas-lormeau/SingleFile) | 扩展设置页模仿自该扩展。 |

## 参考

| Item                                                         | Description         |
| ------------------------------------------------------------ | ------------------- |
| [chrome-plugin-demo](https://github.com/sxei/chrome-plugin-demo) | Chrome 扩展开发教程 |
| [Extensions - Chrome Developers](https://developer.chrome.com/docs/extensions/) | Chrome 扩展官方文档 |

