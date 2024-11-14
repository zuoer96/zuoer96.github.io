





构建是真的话，还能实时渲染。

<!-- more-->

# 1 资源链接

- [雨临Lewis-Hugo系列](https://lewky.cn/posts/hugo-1.html/)
- [Hugo主题-LoveIt](https://hugoloveit.com/zh-cn/theme-documentation-basics/)



# 2 环境准备

> 非必要不安装,保持整洁,越多越乱

- [ ] 一台干净的笔记本(前几天笔记本重装了...)
- [ ] ~~letsvpn~~
- [ ] ~~jdk-8u202-windows-i586~~
- [ ] ~~IntelliJ IDEA 2021.3.1~~
- [x] Visual Studio Code
- [x] Typora
- [x] Google Chrome
- [ ] ~~7z~~
- [x] nvm
- [x] nodejs
- [x] [nodepad++](https://notepad-plus-plus.org/downloads/)
- [x] [Git](https://git-scm.com/download/win)
- [x] [hugo extended](https://github.com/gohugoio/hugo/releases/)

## 2.0 安装Go

- 下载:https://golang.google.cn/dl/

双击安装即可

验证:`go version`

## 2.1 安装Git

从官网上下载安装包,基本上next就行。

配置自己的github账号

```bash
git config --global user.name 'your_name'
git config --global user.email 'your_email'
```

配置ssh key连接到github

```bash
ssh-keygen -t rsa -C 'your_email'
```



## 2.2 安装Hugo

- 下载：https://github.com/gohugoio/hugo/releases/tag/v0.115.4

下载hugo extended,将hugo.exe解压到某个目录下,并配置到Path环境变量即可。`hugo version`可以检验是否安装成功。

eg: 解压目录：D:\tools\hugo

> 安装的方式有很多种,源码,二进制,git命令...选择一种方便的就行.



## 2.3 创建网站

通过`hugo new site 站点名称`创建网站。

eg: 创建博客站点: `hugo new site blog`

## 2.4 安装主题

看[LoveIt](https://github.com/dillonzq/LoveIt)挺不错的

```bash
git clone https://github.com/dillonzq/LoveIt.git themes/LoveIt
```

- next 主题： https://hugo-next.eu.org/

### 2.4.1 基础配置

hugo也支持yaml，加上toml的可读性感觉不是很好，所以我这里将默认的config.toml转为yaml格式。下面的内容有改动的话都是基于yaml。

```yaml
baseURL: "http://example.org/"
# [en, zh-cn, fr, ...] 设置默认的语言
defaultContentLanguage: "zh-cn"
# 网站语言, 仅在这里 CN 大写
languageCode: "zh-CN"
# 是否包括中日韩文字
hasCJKLanguage: true
# 网站标题
title: "我的全新 Hugo 网站"

# 更改使用 Hugo 构建网站时使用的默认主题
theme: "LoveIt"

params:
  # LoveIt 主题版本
  version: "0.2.X"

menu:
  main:
    -
      identifier: "posts"
      # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
      pre: ""
      # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
      post: ""
      name: "文章"
      url: "/posts/"
      # 当你将鼠标悬停在此菜单链接上时, 将显示的标题
      title: ""
      weight: 1
    -
      identifier: "tags"
      pre: ""
      post: ""
      name: "标签"
      url: "/tags/"
      title: ""
      weight: 2
    -
      identifier: "categories"
      pre: ""
      post: ""
      name: "分类"
      url: "/categories/"
      title: ""
      weight: 3

# Hugo 解析文档的配置
markup:
  # 语法高亮设置 (https://gohugo.io/content-management/syntax-highlighting)
  highlight:
    # false 是必要的设置 (https://github.com/dillonzq/LoveIt/issues/158)
    noClasses: false
```



### 2.4.2 创建第一篇文章

创建的文章默认为草稿`draft: true`,修改为`false`,或者启动的时候添加`-D/--buildDrafts`参数.

```bash
hugo new posts/'hello world'.md
```



### 2.4.3 本地启动网站

默认在`http://localhost:1313`启动一个站点.

```bash
hugo serve
```



> 默认运行是developement,"评论系统", "CDN" 和 "fingerprint" 不会启用.
>
> 可以使用`hugo serve -e production`开启这些功能



> loveIt使用了`.Scratch`实现一些特性,建议使用`hugo serve --disableFastRender`实时预览文章



### 2.4.4 构建网站

部署的时候用来生成`public`目录,然后放到web服务器就行了

```bash
hugo
```



## 2.5 配置主题

### 2.5.1 网站图标配置

在[图标库](https://icooon-mono.com/?lang=en)挑选自己的图标,用[realfavicongenerator](https://realfavicongenerator.net/)一站式图标生成,放到`/static`目录下.



### 2.5.2 多语言支持

在config.yaml配置支持中文和英文的网站,我这里不需要,就不改为yaml了.

```toml
# [en, zh-cn, fr, pl, ...] 设置默认的语言
defaultContentLanguage = "zh-cn"

[languages]
  [languages.en]
    weight = 1
    title = "My New Hugo Site"
    languageCode = "en"
    languageName = "English"
    [[languages.en.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "Posts"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.en.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "Tags"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.en.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "Categories"
      url = "/categories/"
      title = ""
      weight = 3

  [languages.zh-cn]
    weight = 2
    title = "我的全新 Hugo 网站"
    # 网站语言, 仅在这里 CN 大写
    languageCode = "zh-CN"
    languageName = "简体中文"
    # 是否包括中日韩文字
    hasCJKLanguage = true
    [[languages.zh-cn.menu.main]]
      identifier = "posts"
      pre = ""
      post = ""
      name = "文章"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.zh-cn.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "标签"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.zh-cn.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "分类"
      url = "/categories/"
      title = ""
      weight = 3
```

对于配置中英文的站点,文章要提供`文章.en.md`和`文章.zh-cn.md`



### 2.5.3 修改默认站点翻译

对于主题翻译的中文不满意?

要覆盖默认值,在项目下创建i18n目录.参考主题下的`i18n/<languageCode>.toml`创建一个新的配置文件.

### 2.5.4 搜索支持

配置生成index.json

```yaml
# 生成index.json,用于搜索
outputs:
  home: ["HTML", "RSS", "JSON"]
```

配置启动搜索功能

```yaml
params:
  # 搜索设置
  search:
    # 是否启动搜索功能
    enable: true
    # 搜索引擎的类型 ("lunr", "algolia")
    type: "lunr"
    # 文章内容最长索引长度
    contentLength: 4000
    # 搜索框的占位提示语
    placeholder: ""
    # LoveIt 新增 | 0.2.1 最大结果数目
    maxResultLength: 10
    # LoveIt 新增 | 0.2.3 结果内容片段长度
    snippetLength: 50
    # LoveIt 新增 | 0.2.1 搜索结果中高亮部分的 HTML 标签
    highlightTag: "em"
    # LoveIt 新增 | 0.2.4 是否在搜索索引中使用基于 baseURL 的绝对路径
    absoluteURL: false
    algolia:
      index: ""
      appID: ""
      searchKey: ""
```

> lunr: 简单,性能低,占用带宽大,不需要同步index.json,中文需要分词依赖库
>
> algolia: 高性能,占用带宽低,需要同步index.json,有contentLength限制



### 2.5.5 自定义样式

> 需要Hugo extended版本

对主题默认的配色、样式不满意?

**覆盖变量:** 在`assets/css/_override.scss`修改,可以覆盖`themes/LoveIt/assets/css/_variables.scss`中的变量.如:

```scss
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap&subset=latin-ext');
$code-font-family: Fira Mono, Source Code Pro, Menlo, Consolas, Monaco, monospace;
```

**定义样式:** 在`assets/css/_custom.scss`可以添加你心中想要设定的css样式

> 非不要不建议修改主题下的文件,Hugo在渲染页面时优先读取站点根目录下的同名字的目录和文件
>
> 敲黑板:raised_hand_with_fingers_splayed: 作笔记:book:
>
> **只需要把想修改的主题模板文件拷贝到根目录下同样的目录中并进行修改，这样就可以在不改动原本的主题文件的情况下实现主题美化。**



### 2.5.6 自定义脚本

原理同自定义样式

创建`\static\js\custom.js`,放在`theme.min.js`后和`</body>`前.避免被覆盖以及加载太久导致页面空白。

拷贝`\themes\LoveIt\layouts\partials\assets.html`到根目录下的`\layouts\partials\assets.html`,然后将自定义的`custom.js`加到`assets.html`倒数第二行

```javascript
{{- /* jquery库 */ -}}
{{- /*<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@2.1.3/dist/jquery.min.js"></script> */ -}}
{{- /* 自定义的js文件 */ -}}
<script type="text/javascript" src="/js/custom.js"></script>
```



> 这里预留了`_custom.css和custom.js`2个文件,给我们后面添加css和js用

### 2.5.7 自定义shortcode

还是那句话，一通百通，按主题的方式来。

#### 创建1024短代码

在`/layouts/shortcodes/1024.html`定义好短代码的内容.

```html
{{ if .IsNamedParams }}
    {{ $defaultImg :=  "https://cdn.jsdelivr.net/gh/lewky/lewky.github.io@master/images/avatar.jpg" }}
    <a target="_blank" href={{ .Get "url" }} title={{ .Get "name" }}---{{ .Get "word" }} class="friend url">
        <div class="friend block whole {{ .Get "primary-color" | default "default"}} {{ .Get "border-animation" | default "shadow"}}">
            <div class="friend block left">
            <img class="friend logo {{ .Get "img-animation" | default "rotate"}}" src={{ .Get "logo" }} onerror="this.src='{{ $defaultImg }}'" />
            </div>
            <div class="friend block right">
            <div class="friend name">{{ .Get "name" }}</div>
            <div class="friend info">"{{ .Get "word" }}"</div>
            </div>
        </div>
    </a>
{{ end }}
```

#### 美化并引入样式

给这个段代码美化一下,添加一点点css.放到`/assets/css/_partial/_single/_1024.scss`

```scss
.friend.url {
    text-decoration: none !important;
    color: black;
}

.friend.logo {
    width: 56px !important;
    height: 56px !important;
    border-radius: 50%;
    border: 1px solid #ddd;
    padding: 2px;
    margin-top: 14px !important;
    margin-left: 14px !important;
    background-color: #fff;
}

.friend.block.whole {
    height: 92px;
    margin-top: 8px;
    margin-left: 4px;
    width: 31%;
    display: inline-flex !important;
    border-radius: 5px;
    background: rgba(14, 220, 220, 0.15);

    &.shadow {
        margin-right: 4px;
        box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.2);
    }
    &.borderFlash {
        border-width: 3.5px;
        border-style: solid;
        animation: borderFlash 2s infinite alternate;
    }
    &.led {
        animation: led 3s infinite alternate;
    }
    &.bln {
        animation: bln 3s infinite alternate;
    }
}

.friend.block.whole {
    &:hover {
        color: white;
        & .friend.info {
            color: white;
        }
    }

    &.default {
        --primary-color: #215bb3bf;
        &:hover {
            background: rgba(33, 91, 179, 0.75);
        }
    }
    &.red {
        --primary-color: #e72638;
        &:hover {
            background: rgba(231, 38, 56, 0.75);
        }
    }
    &.green {
        --primary-color: #2ec58d;
        &:hover {
            background: rgba(21, 167, 33, 0.75);
        }
    }
    &.blue {
        --primary-color: #2575fc;
        &:hover {
            background: rgba(37, 117, 252, 0.75);
        }
    }
    &.linear-red {
        --primary-color: #e72638;
        &:hover {
            background: linear-gradient(to right, #f9cdcd 0, #e72638 35%);
        }
    }
    &.linear-green {
        --primary-color: #2ec58d;
        &:hover {
            background: linear-gradient(to right, #1d7544 0, #2ec58d 35%);
        }
    }
    &.linear-blue {
        --primary-color: #2575fc;
        &:hover {
            background: linear-gradient(to right, #6a11cb 0, #2575fc 35%);
        }
    }
}

.friend.block.whole .friend.block.left img {
    &.auto_rotate_left {
        animation: auto_rotate_left 3s linear infinite;
    }
    &.auto_rotate_right {
        animation: auto_rotate_right 3s linear infinite;
    }
}
.friend.block.whole:hover .friend.block.left img {
    &.rotate {
        transition: 0.9s !important;
        -webkit-transition: 0.9s !important;
        -moz-transition: 0.9s !important;
        -o-transition: 0.9s !important;
        -ms-transition: 0.9s !important;
        transform: rotate(360deg) !important;
        -webkit-transform: rotate(360deg) !important;
        -moz-transform: rotate(360deg) !important;
        -o-transform: rotate(360deg) !important;
        -ms-transform: rotate(360deg) !important;
    }
}

.friend.block.left {
    width: 92px;
    min-width: 92px;
    float: left;
}

.friend.block.left {
    margin-right: 2px;
}

.friend.block.right {
    margin-top: 18px;
    margin-right: 18px;
}

.friend.name {
    overflow: hidden;
    font-weight: bolder;
    word-wrap:break-word;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.friend.info {
    margin-top: 3px;
    overflow: hidden;
    word-wrap:break-word;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: normal;
    font-size: 0.8rem;
    color: #7a7a7a;
}

@media screen and (max-width: 900px) {
    .friend.info {
        display: none;
    }
    .friend.block.whole {
        width: 45%;
    }
    .friend.block.left {
        width: 84px;
        margin-left: 15px;
    }
    .friend.block.right {
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .friend.name {
        font-size: 14px;
    }
}

@keyframes bln {
	0% {
		box-shadow: 0 0 5px grey,inset 0 0 5px grey,0 1px 0 grey;
		box-shadow: 0 0 5px var(--primary-color,grey),inset 0 0 5px var(--primary-color,grey),0 1px 0 var(--primary-color,grey)
	}

	to {
		box-shadow: 0 0 16px grey,inset 0 0 8px grey,0 1px 0 grey;
		box-shadow: 0 0 16px var(--primary-color,grey),inset 0 0 8px var(--primary-color,grey),0 1px 0 var(--primary-color,grey)
	}
}

@keyframes led {
	0% {
		box-shadow: 0 0 4px #ca00ff
	}

	25% {
		box-shadow: 0 0 16px #00b5e5
	}

	50% {
		box-shadow: 0 0 4px #00f
	}

	75% {
		box-shadow: 0 0 16px #b1da21
	}

	to {
		box-shadow: 0 0 4px red
	}
}

@keyframes borderFlash {
	0% {
		border-color: white;
	}

	to {
		border-color: grey;
		border-color: var(--primary-color,grey)
	}
}

@keyframes auto_rotate_left {
	0% {
		transform: rotate(0)
	}

	to {
		transform: rotate(-1turn)
	}
}

@keyframes auto_rotate_right {
	0% {
		transform: rotate(0)
	}

	to {
		transform: rotate(1turn)
	}
}
```

将`\themes\LoveIt\assets\css\_page\_single.scss`拷贝到`\assets\css\_page\_single.scss`.并在第一行引入定义的样式文件

```scss
@import "../_partial/_single/1024";
```

#### 使用示例

随便哪里添加都可以渲染出对应的卡片链接。

```markdown
{{< 1024
name="雨临Lewis的博客"
url="lewky.cn"
logo="https://cdn.jsdelivr.net/gh/lewky/lewky.github.io@master/images/avatar.jpg"
word="不想当写手的码农不是好咸鱼_(xз」∠)_"
>}}
```

可选项：

```css
//边框及鼠标悬停的背景颜色，允许设置渐变色
//支持7种：default、red、green、blue、linear-red、linear-green、linear-blue
primary-color="default"

//头像动画：rotate(鼠标悬停时旋转，此为默认效果)、auto_rotate_left(左旋转)、auto_rotate_right(右旋转)
img-animation="rotate"

//边框动画：shadow(阴影，此为默认效果)、borderFlash(边框闪现)、led(跑马灯)、bln(主颜色呼吸灯)
border-animation="shadow"
```

如果友链的头像无法正常显示，会以一个默认的Gravatar头像显示。此外，在移动端会隐藏站点描述，只显示头像和站点名称，你可以通过将当前窗口缩小到宽度最小即可看到效果。



#### 优化无侵入样式

不是所有页面都需要这个友链样式，可以选择性的引入样式。

创建`/assets/css/1024.scss`和上面的[`_1024.scss`](#美化并引入样式)一样,然后新增`/layouts/shortcodes/1024-css.html`.

```html
{{ $options := (dict "targetPath" "/css/1024.css" "outputStyle" "compressed" "enableSourceMap" true) }}
{{ $style := resources.Get "css/1024.scss" | resources.ToCSS $options }}

<link rel="stylesheet" href="{{ $style.RelPermalink }}">
```

#### 无侵入使用示例

```markdown
{{< 1024-css >}}
{{< 1024
name="雨临Lewis的博客"
url="lewky.cn"
logo="https://cdn.jsdelivr.net/gh/lewky/lewky.github.io@master/images/avatar.jpg"
word="不想当写手的码农不是好咸鱼_(xз」∠)_"
>}}
```



## 2.6 网站内容

> 存放内容建议:
>
> 文章放到 `content/posts`；eg: `content/posts/'hello world'.md`
>
> 单页放到 `content`;eg: `content/about.md`
>
> 静态资源放在 `assets`或`static`

### 2.6.1 front matter 

> 如果你想让某个文章的参数和config.yaml中的`page`部分不一样，就可以单独设置front matter

```markdown
---
# 文章标题
title: "我的第一篇文章"
# 文章副标题
subtitle: ""
# 创建日期
date: 2020-03-04T15:58:26+08:00
# 修改日期
lastmod: 2020-03-04T15:58:26+08:00
# true为草稿,启动不设置参数不会渲染
draft: true
# 作者
author: ""
# 作者链接
authorLink: ""
# 文章描述
description: ""
# 文章许可证书
license: ""
# 页面图片,用于 Open Graph 和 Twitter Cards
images: []

# 文章标签
tags: []
# 文章分类
categories: []
# 文章特色图片
featuredImage: ""
# 主页预览文章特色图片
featuredImagePreview: ""

# 设置true,主页隐藏文章
hiddenFromHomePage: false
# 设置true,不被搜索
hiddenFromSearch: false
# 设置true,可以使用twemoji
twemoji: false
# 文章图片以画廊形式展示
lightgallery: true
# 上标注释语法支持
ruby: true
# 分数语法支持
fraction: true
# font awesome图标支持
fontawesome: true
# 设置true,内容页脚显示指向原始Markdown文件的链接
linkToMarkdown: true
# 设置true,RSS显示全文内容
rssFullText: false

# 以下同 params.page 配置
toc:
  enable: true
  auto: true
code:
  copy: true
  # ...
math:
  enable: true
  # ...
mapbox:
  accessToken: ""
  # ...
share:
  enable: true
  # ...
comment:
  enable: true
  # ...
library:
  css:
    # someCSS = "some.css"
    # 位于 "assets/"
    # 或者
    # someCSS = "https://cdn.example.com/some.css"
  js:
    # someJS = "some.js"
    # 位于 "assets/"
    # 或者
    # someJS = "https://cdn.example.com/some.js"
seo:
  images: []
  # ...
---
```



### 2.6.2 内容摘要

默认Hugo会将内容的前70个单词作为摘要。可以在config.yaml中设置`summaryLength`自定义长度.

还可以在文章中设置`<!--more-->`手动拆分。

还可以在front matter中设置`summary`单独定义摘要

还可以将`<!--more-->`前面的内容保留为空,loveIt会将front matter中的`description`设置为摘要

> 摘要中最好不要设置代码块,图片,表格等富文本块元素.会导致渲染错误.

### 2.6.3 markdown语法

更多使用可以看[这里](https://hugoloveit.com/zh-cn/basic-markdown-syntax/)

#### [支持Emoji](https://hugoloveit.com/zh-cn/emoji-support/)

可以在config.yaml设置`enableEmoji`全局启动emoji。2个`:`就可以使用了。

#### 支持数学公式

#### 支持注释

```markdown
[Hugo]^(一个开源的静态网站生成工具)
```

#### 支持分数

```markdown
[99]/[100]
```

#### [Font Awesome](https://fontawesome.com/v5.15/icons)

loveIt使用Font Awesome图标库,可以在文章中方便的使用。

~~不过要找一个好看的图标还是需要花点功夫，选择困难的慎入~~。

```markdown
真开心! :(far fa-grin-tears):
```



#### 转义字符

```markdown
{?X} -> X
```

有什么用?

比如，两个 `:` 会启用 emoji 语法。但是有时候你的代码就是`:joy:`不想要表情,就可以用转义`{?:}joy:`



### 2.6.4 Shortcodes

hugo内置了很多Shortcodes,以便让内容更简洁(不然作者可能要写一大堆代码以达到特殊效果的目的,注意,写HTML和markdown设计理念相悖了).

#### figure

图片下方带注释标题

```markdown
{{< figure src="/images/lighthouse.jpg" title="Lighthouse (figure)" >}}
```

输出HTML：

```html
<figure>
    <img src="/images/lighthouse.jpg"/>
    <figcaption>
        <h4>Lighthouse (figure)</h4>
    </figcaption>
</figure>
```

#### gist

相当于引用github用户spf13下的7896402内容

```markdown
{{< gist spf13 7896402 >}}
```

#### highlight

```markdown
{{< highlight html >}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{< /highlight >}}
```

#### instagram

引用ins的文章,卡片效果.不错不错

```markdown
{{< instagram BWNjjyYFxVx hidecaption >}}
```

#### param

可以输出param的内容

```markdown
{{< param description >}}
```



#### ref、relref



#### tweet

引用tweet文章

```markdown
{{< tweet 877500564405444608 >}}
```

#### vimeo

引用vimeo视频

```markdown
{{< vimeo 146022717 >}}
```

#### youtube

引用youtube视频

```markdown
{{< youtube w7Ft2ymGmfc >}}
```



#### style

自定义样式，style + sass样式 + html标签(默认div)

```
{{< style "text-align:right; strong{color:#00b1ff;}" >}}
This is a **right-aligned** paragraph.
{{< /style >}}
```



#### link

可以代替markdown的链接，更强大

```markdown
{{< link "https://assemble.io" >}}
或者
{{< link href="https://assemble.io" >}}

{{< link "mailto:contact@revolunet.com" >}}
或者
{{< link href="mailto:contact@revolunet.com" >}}

{{< link "https://assemble.io" Assemble >}}
或者
{{< link href="https://assemble.io" content=Assemble >}}

带悬浮提示标题
{{< link "https://github.com/upstage/" Upstage "Visit Upstage!" >}}
或者
{{< link href="https://github.com/upstage/" content=Upstage title="Visit Upstage!" >}}
```



#### image

比figure更强大

```markdown
{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" src_s="/images/lighthouse-small.jpg" src_l="/images/lighthouse-large.jpg" >}}
```



#### admonition

提示横幅效果

支持`note`、`abstract`、`info`、`tip`、`success`、`question`、`warning`、`danger`、`bug`、`example`、`quote`、

```markdown
{{< admonition type=tip title="This is a tip" open=false >}}
一个 **技巧** 横幅
{{< /admonition >}}
或者
{{< admonition tip "This is a tip" false >}}
一个 **技巧** 横幅
{{< /admonition >}}
```

#### mermaid

流程图

```markdown
{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}
```

时序图

```markdown
{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}
```

甘特图

```markdown
{{< mermaid >}}
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid
    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d
    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
{{< /mermaid >}}
```

类图

```markdown
{{< mermaid >}}
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i?
    Class09 --* C3
    Class09 --|> Class07
    Class07 : equals()
    Class07 : Object[] elementData
    Class01 : size()
    Class01 : int chimp
    Class01 : int gorilla
    Class08 <--> C2: Cool label
{{< /mermaid >}}
```

状态图

```markdown
{{< mermaid >}}
stateDiagram
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
{{< /mermaid >}}
```

git图

```markdown
{{< mermaid >}}
gitGraph:
options
{
    "nodeSpacing": 100,
    "nodeRadius": 10
}
end
    commit
    branch newbranch
    checkout newbranch
    commit
    commit
    checkout master
    commit
    commit
    merge newbranch
{{< /mermaid >}}
```

饼图

```markdown
{{< mermaid >}}
pie
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
{{< /mermaid >}}
```



#### [echarts](https://echarts.apache.org/zh/index.html)

比如json格式的echarts折线图，也支持yaml/toml

```json
{{< echarts >}}
{
  "title": {
    "text": "折线统计图",
    "top": "2%",
    "left": "center"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data": ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
    "top": "10%"
  },
  "grid": {
    "left": "5%",
    "right": "5%",
    "bottom": "5%",
    "top": "20%",
    "containLabel": true
  },
  "toolbox": {
    "feature": {
      "saveAsImage": {
        "title": "保存为图片"
      }
    }
  },
  "xAxis": {
    "type": "category",
    "boundaryGap": false,
    "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "邮件营销",
      "type": "line",
      "stack": "总量",
      "data": [120, 132, 101, 134, 90, 230, 210]
    },
    {
      "name": "联盟广告",
      "type": "line",
      "stack": "总量",
      "data": [220, 182, 191, 234, 290, 330, 310]
    },
    {
      "name": "视频广告",
      "type": "line",
      "stack": "总量",
      "data": [150, 232, 201, 154, 190, 330, 410]
    },
    {
      "name": "直接访问",
      "type": "line",
      "stack": "总量",
      "data": [320, 332, 301, 334, 390, 330, 320]
    },
    {
      "name": "搜索引擎",
      "type": "line",
      "stack": "总量",
      "data": [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
{{< /echarts >}}
```



#### mapbox

可以通过[mapbox-gl-js](https://docs.mapbox.com/mapbox-gl-js/guides/)嵌入交互式地图

```markdown
{{< mapbox 121.485 31.233 12 >}}
或者
{{< mapbox lng=121.485 lat=31.233 zoom=12 >}}

彩色地图
{{< mapbox -122.252 37.453 10 false "mapbox://styles/mapbox/streets-zh-v1" >}}
或者
{{< mapbox lng=-122.252 lat=37.453 zoom=10 marked=false light-style="mapbox://styles/mapbox/streets-zh-v1" >}}
```



#### music

可以嵌入音乐播放器

```
自定义音乐 URL：
{{< music url="/music/Wavelength.mp3" name=Wavelength artist=oldmanyoung cover="/images/Wavelength.jpg" >}}

使用音乐平台URL,支持 netease, tencent 和 xiami 平台
{{< music auto="https://music.163.com/#/playlist?id=60198" >}}
或者
{{< music "https://music.163.com/#/playlist?id=60198" >}}

自定义音乐平台：
{{< music server="netease" type="song" id="1868553" >}}
或者
{{< music netease song 1868553 >}}
```



#### bilibili

可以嵌入bilibili视频播放器

```
单P视频：
{{< bilibili BV1Sx411T7QQ >}}
或者
{{< bilibili id=BV1Sx411T7QQ >}}

多p视频:
{{< bilibili BV1TJ411C7An 3 >}}
或者
{{< bilibili id=BV1TJ411C7An p=3 >}}
```



#### typeit

基于 [TypeIt](https://typeitjs.com/) 提供了打字动画.

```markdown
{{< typeit >}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*...
{{< /typeit >}}

带有h4标题：
{{< typeit tag=h4 >}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*...
{{< /typeit >}}

代码打字效果：
{{< typeit code=java >}}
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
{{< /typeit >}}


分段落打字：
{{< typeit group=paragraph >}}
**首先**, 这个段落开始
{{< /typeit >}}
{{< typeit group=paragraph >}}
**然后**, 这个段落开始
{{< /typeit >}}
```



#### script

可以插入javascript,内嵌脚本,自由使用第三方库,OY！

如：控制台可以看到Hello LoveIt!

```markdown
{{< script >}}
console.log('Hello LoveIt!');
{{< /script >}}
```



## 2.7 部署博客到Github

创建一个`<username>.github.io`仓库（默认会部署到github pages）。

`settings`->`pages`->`https://<username>.github.io/`

然后通过`hugo`命令生成的`public`目录传到该仓库

```bash
git init
git add .
git commit -m "第一次提交"
git branch -M master
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin master

# 如果使用的git 2.34 可以设置默认的分支为main。上面的命令就直接推就好了
```

如果你想同时**推送到多个远程仓库**,可以在`.git/config`设置

```bash
[remote "origin"]
	url = https://github.com/<username>/<username>.github.io.git
	# 多加一个需推送的地址
	url = git@e.coding.net:<username>/hugo-deploy/hugo-deploy.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```





# 3 定制我的网站

> 该部分偏向实战，有的点可能上面重复提及过。

## 3.1 顶部导航栏增加菜单

```
menu:
  main:  
    -
      identifier: "about"
      # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
      pre: '<i class="far fa-address-card"></i>'
      # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
      post: ""
      name: "关于我"
      url: "/about/"
      # 当你将鼠标悬停在此菜单链接上时, 将显示的标题
      title: "关于我的一些信息"
      weight: 4
```

**解读:** 比如添加一个关于我的菜单,pre是name的前缀.post是后缀.weight越小越靠左，排序用的。



## 3.2 添加全局cdn变量

> 不止cdn，其他变量也可以类似这样用

对于一些静态资源，比如图片、音乐文件、第三方库等，如果有自己的cdn或者图床等，可以在站点配置文件自定义一个cdn变量，如下：

```toml
[params]
  # cdn变量，末尾不需要加/
  cdnPrefix = "http://xxxx"
```

接下来就可以在你需要的地方使用该变量，大概有如下3种用法。

### 3.2.1 在md文件中使用

在md文件中可以用内置的**shortcodes**来使用该变量：

**解读：**Hugo这种写法可以拿到param下定义的变量.然后用的时候拼接自己需要的图片地址.

```markdown
{{< param cdnPrefix >}} 

![avatar.jpg]({{< param cdnPrefix >}}/images/avatar.jpg)
```

### 3.2.2 在html文件中使用

在`layouts`目录下有很多html文件，这些是用来渲染站点的模板文件，可以用Hugo的语法来引入该变量：

```javascript
{{ .Site.Params.cdnPrefix }}
```

如果在一个模板文件里有多个地方使用到该变量，可以定义一个局部变量来使用：

```javascript
{{- $cdn := .Site.Params.cdnPrefix -}} 
/* 使用局部变量 */ 
{{ $cdn }}
```

### 3.2.3 在js文件中使用

由于JavaScript文件中不能使用上述的shortcodes或Hugo语法来引用变量，只能通过在`\layouts\partials\assets.html`中用JavaScript语法来引入该变量，如下：

```javascript
/* 这是可以应用于JavaScript文件的全局变量 */
<script>
	/* cdn for some static resources */
	var $cdnPrefix = {{ .Site.Params.cdnPrefix }};
</script>
```

这样就可以在其他被引入的JavaScript文件中使用这个`$cdnPrefix`变量：

```javascript
$(function () {
	$.backstretch([
		  $cdnPrefix + "/images/background/saber1.jpg"
	], { duration: 60000, fade: 1500 });
});
```

如果是想在html模板文件里引入某个自定义的JavaScript文件，如下：

```javascript
{{- /* 自定义的js文件 */ -}}
<script type="text/javascript" src="{{ .Site.Params.cdnPrefix }}/js/custom.js"></script>
```



## 3.3 自定义页面



### 3.3.1 404页面

默认的404页面就 `404 page not found` 一句话,太简单了。

可以在`\layouts\404.html`下定义自己的404页面,原理也是拷贝覆盖loveIt的404.html

> 我这里404用到了额外的图片,这是放到静态资源`/static/images/404.jpg`.在static目录下的引用时直接写`/images/404.jpg`就行了。

```html
{{- define "title" }}
    {{- T "pageNotFound" | printf "404 %v" }} - {{ .Site.Title -}}
{{- end -}}

{{- define "content" -}}
    
    <div class="page" id="content-404">
        
        <a href="#"><img src="/images/404.jpg" style="width: 40.4%; height: 40.4%; object-fit: contain;"></a>

        <h1 id="error-emoji"></h1>
        
        <p class="error-text">
            {{- T "pageNotFoundText" -}}&nbsp;
            <a href="javascript:void(0);" title="{{ T `back` }}" onclick="window.history.back();"><i class="far fa-hand-point-left fa-fw"></i></a>
        </p>
    </div>
    <script type="text/javascript">
        (function() {
            var emojiArray = ['\\(o_o)/', '(˚Δ˚)b', '(^-^*)', '(≥o≤)', '(^_^)b', '(·_·)','(=\'X\'=)', '(>_<)', '(;-;)'];
            document.getElementById('error-emoji').appendChild(document.createTextNode(emojiArray[Math.floor(Math.random() * emojiArray.length)]));
        })();
    </script>
{{- end -}}

```

### 3.3.2 关于我页面

单页面放到根目录的`cntent`下,新建`about/index.md`

```
---
title: "About"
date: 2022-01-01T23:15:24+08:00
draft: true
---
```

然后就可以blabla一些自己的介绍了....



### 3.3.3 友链页面

创建友链页面`hugo new 1024/index.md`，会生成`/content/1024/index.md`.

**配置菜单**

```yaml
menu:
  main:
    -
      identifier: "1024"
      pre: '<i class="fas fa-project-diagram"></i>'
      post: ""
      name: "友链"
      url: "/1024/"
      title: "花径不曾缘客扫，蓬门今始为君开"
      weight: 4
```

**添加[shortcode-1024](#2.5.7 自定义shortcode)**

```
{{< 1024-css >}}
{{< 1024
name="雨临Lewis的博客"
url="lewky.cn"
logo="https://cdn.jsdelivr.net/gh/lewky/lewky.github.io@master/images/avatar.jpg"
word="不想当写手的码农不是好咸鱼_(xз」∠)_"
>}}
```



## 3.4 背景图片轮播

在`\layouts\partials\assets.html`中你自定义的`custom.js`上面一行引入`jquery`和`backstrectch`

```javascript
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@2.1.3/dist/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.18/jquery.backstretch.min.js"></script>
{{- /* 自定义的js文件 */ -}}
<script type="text/javascript" src="/js/custom.js"></script>
```

在`/static/js/custom.js`中添加轮播[jquery-backstretch](https://github.com/jquery-backstretch/jquery-backstretch)代码即可.

```javascript
/* 轮播背景图片 */
$(function () {
	$.backstretch([
		  "/images/background/background-1.png",
		  "/images/background/background-2.jpg",
		  "/images/background/background-3.png"
	], { duration: 60000, fade: 1500 });
});
```



## 3.5 添加Waline评论系统

[Waline](https://waline.js.org/) + [LeanCloud](https://console.leancloud.app/apps) +[Vercel](https://vercel.com/dashboard)+[WalineUI](vercel部署应用/ui)作评论系统

> 这里waline是应用,Vercel是部署服务器,LeanCloud是评论存储数据库,WalineUI是waline部署应用的后台评论管理系统

按照Waline官网手册注册LeanCloud，github登录vercel创建一个空的仓库。

部署并绑定leancloud的key（settings设置环境变量：LEAN_ID,LEAN_KEY和LEAN_MASTER_KEY,分别对应leancloud的APP ID, APP KEY, Master Key,国内版需要额外绑定域名,设置LEAN_SERVER,对应LeanCloud的REST API服务器地址）

### 站点启用评论

```yaml
params:
  # LoveIt 主题版本
  version: "0.2.X"
    
  #  评论系统设置
  page:
    comment:
      enable: true
      # waline 评论系统设置
      waline:
        enable: true
        #js: "https://cdn.jsdelivr.net/npm/@waline/client@latest"
        js: "https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"
        meta: ['nick','mail','link']                           # 评论者相关属性
        requiredMeta: ['nick','mail']                        # 设置必填项，默认匿名
        login: "force"                                         # 评论必须先登录，用于防护恶意攻击
        placeholder: "为防恶意灌水攻击，评论前需注册并登录，望见谅~"     # 评论框占位提示符
        serverURL: ""                 # Waline的服务端地址（必填） 
        #imageHosting:                                         # 图床api，如果允许评论框上传图片
        uploadImage: false                                     # 评论上传图片功能
        avatar: "retro"                                        # Gravatar头像
        avatarCDN: "https://sdn.geekzu.org/avatar/"            # Gravatar头像CDN地址，不建议使用loli源
        pageSize: 20                                           # 评论列表分页，每页条数
        lang: "zh-CN"                                          # 多语言支持
        visitor: true                                          # 文章访问量统计
        highlight: true                                        # 代码高亮
```

### 修改模板

将`\themes\LoveIt\layouts\partials\comment.html`拷贝到`\layouts\partials\comment.html`,在valine后追加Waline模板支持。

```javascript
        {{- /* Waline Comment System */ -}}
        {{- $waline := $comment.waline | default dict -}}
        {{- if $waline.enable -}}
            <div id="waline"></div>
			<script src='{{ $waline.js }}'></script>

			<script>
		    	new Waline({
		    	  el: '#waline',
				  meta: {{ $waline.meta }},
		    	  requiredMeta: {{ $waline.requiredMeta }},
		    	  login: {{ $waline.login }},
				  placeholder: {{ $waline.placeholder }},
		    	  serverURL: {{ $waline.serverURL }},
		    	  avatarCDN: {{ $waline.avatarCDN }},
		    	  pageSize: {{ $waline.pageSize }},
		    	  avatar: {{ $waline.avatar }},
		    	  lang: {{ $waline.lang }},
				  visitor: {{ $waline.visitor }},
				  highlight: {{ $waline.highlight }},
				  uploadImage: {{ $waline.uploadImage }}				  
		    	});
		    </script>
        {{- end -}}
```

### 添加评论到文章模板

将`/themes/LoveIt/layouts/posts/single.html`拷贝到`/layouts/posts/single.html`

添加waline的支持

```javascript
<div class="post-meta-line">
    {{- with .Site.Params.dateformat | default "2006-01-02" | .PublishDate.Format -}}
        <i class="far fa-calendar-alt fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
    {{- end -}}
    <i class="fas fa-pencil-alt fa-fw"></i>&nbsp;{{ T "wordCount" .WordCount }}
    <i class="far fa-clock fa-fw"></i>&nbsp;{{ T "readingTime" .ReadingTime }}&nbsp;
    {{- $comment := .Scratch.Get "comment" | default dict -}}
    {{- if $comment.enable | and $comment.valine.enable | and $comment.valine.visitor -}}
        <span id="{{ .RelPermalink }}" class="leancloud_visitors" data-flag-title="{{ .Title }}">
            <i class="far fa-eye fa-fw"></i>&nbsp;<span class=leancloud-visitors-count></span>&nbsp;{{ T "views" }}
        </span>&nbsp;
    {{- end -}}
    {{- if $comment.enable | and $comment.waline.enable | and $comment.waline.visitor -}}
        <span id="{{ .RelPermalink }}" class="leancloud_visitors" data-flag-title="{{ .Title }}">
            <i class="far fa-eye fa-fw"></i>&nbsp;<span class=leancloud-visitors-count></span>&nbsp;{{ T "views" }}
        </span>&nbsp;
        <a href="#comments" id="post-meta-vcount" title="{{ T `viewComments` }}">
            <i class="fas fa-comment fa-fw"></i>&nbsp;<span id="{{ .RelPermalink }}" class="waline-comment-count"></span>&nbsp;条评论
        </a>
    {{- end -}}
</div>
```

### 添加样式

在`_custom.css`修改

```scss
/* 文章元数据meta */
.post-meta .post-meta-line:nth-child(2) i:nth-child(1) {
    margin-left: 0;
}
.post-meta .post-meta-line:nth-child(2) i {
    margin-left: 0.3rem;
}
.post-meta .post-meta-line:nth-child(2) span i {
    margin-left: 0.3rem !important;
}
.post-meta a#post-meta-vcount {
    color: #a9a9b3;
    &:hover {
        color: #2d96bd;
    }
}
```

### 后台管理ui

访问部署的vercel地址，`https://xxxxx.vercel.app/ui`，首个注册的就是管理员了

### 查看样式

本地默认看不了,使用命令`hugo serve -e production`查看效果



### 添加QQ留言通知

通过[Qmsg酱](https://qmsg.zendee.cn/me.html)推送留言给自己的QQ

在vercel部署应用settings中配置环境变量`QMSG_KEY`

配置完记得重新部署



## 3.6 添加百度统计

默认的统计只有`Google Analytics`和`Fathom Analytics`，自行配置百度统计

修改配置文件

```yaml
params:
  #  网站分析配置
  analytics:
    enable: false
    # 百度统计
    baidu:
      id: ""
```

修改模板文件

将`\themes\LoveIt\layouts\partials\plugin\analytics.html`到`\layouts\partials\plugin\analytics.html`

```html
    {{- /* Baidu Analytics */ -}}
    {{- with $analytics.baidu.id -}}
		<script>
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?{{ . }}";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
		</script>
	{{- end -}}
```



## 3.7 添加文章加密功能

只是简单的判断了下密码,没有什么太大的作用。另找他法吧



## 3.8 设置首页头像信息

```yaml
params:  
  home:
    profile:
      enable: true
      # 主页显示头像的 URL
      avatarURL: "/images/avatar.jpg"
      # 是否启用头像挂件
      avatarPluginURL: "/images/avatar-plug/png/bilibili_105.png"
      # 是否启用头像挂件自动刷新
      avatarPluginFlush: true
      # 点击频率，点击几次就换挂件
      avatarPluginFrequency: 1
      # 头像挂件总数
      avatarPluginCount: 23
      # 头像挂件格式：png, webp
      avatarPluginSuffix: "webp"
```

## 3.9 添加站点运行时间

将`\themes\LoveIt\layouts\partials\footer.html`拷贝到`\layouts\partials\footer.html`，打开拷贝后的文件，在`<div class="footer-container">`的下方添加如下代码：

```
<div class="footer-line">
	<span id="run-time"></span>
</div>
```

在`custom.js`中写js

```javascript
/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */ 
    let startTime = new Date('31/12/2021 22:41:32');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();
```



## 3.10 统计文章热度

添加`/content/hot/index.md`热度排行榜页面,`hugo new hot/index.md`

```html
---
title: "热度排行榜"
---
<style>
ul#hot {
    list-style: none;
}
ul#hot li {
    position: relative;
    padding-left: 30px;
    height: 36px;
    line-height: 36px;
}
ul#hot li:after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #FFF;
    background: #999999;
    text-align: center;
    position: absolute;
    left: 0;
    top: 8px;
}
ul#hot li:first-child:after {content: "1";background: #FD8C84;}
ul#hot li:nth-child(2):after {content: "2";background: #FFCC99;}
ul#hot li:nth-child(3):after {content: "3";background: #7FD75A;}
ul#hot li:nth-child(4):after {content: "4";background: #CCCCFF;}
ul#hot li:nth-child(5):after {content: "5";background: #60C4FD;}
ul#hot li:nth-child(6):after {content: "6";}
ul#hot li:nth-child(7):after {content: "7";}
ul#hot li:nth-child(8):after {content: "8";}
ul#hot li:nth-child(9):after {content: "9";}
ul#hot li:nth-child(10):after {content: "10";}
ul#hot li:nth-child(11):after {content: "11";}
ul#hot li:nth-child(12):after {content: "12";}
ul#hot li:nth-child(13):after {content: "13";}
ul#hot li:nth-child(14):after {content: "14";}
ul#hot li:nth-child(15):after {content: "15";}

li font {color: grey;}
li#hot1 font, li#hot2 font, li#hot3 font {color: red;}
li#hot4 font, li#hot5 font {color: #bd5d67;}

ul#hot li {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

<div><ul id="hot"></ul></div>
<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
<script>AV.initialize("PVfvjW2qD5mOlo2Jy3O1CmNY-MdYXbMMI", "15Mbt6UaYitrliRmCshbMrLw");</script>
<script type="text/javascript">
  var time=0
  var title=""
  var url=""
  var query = new AV.Query('Counter');
  query.notEqualTo('id',0);
  query.descending('time');
  query.limit(15);
  query.find().then(function (todo) {
    for (var i=0;i<1000;i++){
      var result=todo[i].attributes;
      time=result.time;
      title=result.title;
      url=result.url;
      if (i<5) {
        var content="<li id='hot"+(i+1)+"'>"+"<a href='"+url+"'>"+title+"<font>"+"&nbsp;&nbsp;<i class='fas fa-fire fa-fw'></i> "+time+" ℃"+"</font>"+"</a>"+"</li>";
	  } else {
		var content="<li id='hot"+(i+1)+"'>"+"<a href='"+url+"'>"+title+"<font>"+"&nbsp;&nbsp;<i class='fas fa-eye fa-fw'></i> "+time+" ℃"+"</font>"+"</a>"+"</li>";
      }
      document.getElementById("hot").innerHTML+=content
    }
  }, function (error) {
    console.log("error");
  });
</script>
```

将`<script>AV.initialize("appId", "appKey");</script>`中的appId,appKey替换为自己的LeanCloud对应的值。



## 3.11 添加菜单栏子菜单

将主题的`/themes/LoveIt/layouts/partials/header.html`拷贝一份到`layouts/partials/header.html`，找到如下代码，一共有两个地方，分别对应网页端和手机端：

```markdown
{{- range .Site.Menus.main -}}
    {{- $url := .URL | relLangURL -}}
    {{- with .Page -}}
        {{- $url = .RelPermalink -}}
    {{- end -}}
    <a class="menu-item{{ if $.IsMenuCurrent `main` . | or ($.HasMenuCurrent `main` .) | or (eq $.RelPermalink $url) }} active{{ end }}" href="{{ $url }}"{{ with .Title }} title="{{ . }}"{{ end }}{{ if (urls.Parse $url).Host }} rel="noopener noreffer" target="_blank"{{ end }}>
        {{- .Pre | safeHTML }} {{ .Name }} {{ .Post | safeHTML -}}
    </a>
{{- end -}}
```

2个地方都改为：

```javascript
{{- range .Site.Menus.main -}}
	{{ if .HasChildren }}
		<div class="dropdown">
			<a {{ if .URL }}href="{{ .URL }}"{{ else }}href="javascript:void(0);"{{ end }} class="menu-item menu-more dropbtn" title="{{ .Title }}" {{ if eq .Post "_blank" }}target="_blank" rel="noopener"{{ end }}>
				{{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}
			</a>
			<div class="menu-more-content dropdown-content">
				{{- range .Children -}}
					{{- $url := .URL | relLangURL -}}
					{{- with .Page -}}
						{{- $url = .RelPermalink -}}
					{{- end -}}
						<a href="{{ $url }}" title="{{ .Title }}" {{ if eq .Post "_blank" }}target="_blank" rel="noopener"{{ end }}>{{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}</a>
				{{- end -}}
			</div>
		</div>
	{{ else }}
		{{- $url := .URL | relLangURL -}}
		{{- with .Page -}}
			{{- $url = .RelPermalink -}}
		{{- end -}}
		<a class="menu-item{{ if $.IsMenuCurrent `main` . | or ($.HasMenuCurrent `main` .) | or (eq $.RelPermalink $url) }} active{{ end }}" href="{{ $url }}"{{ with .Title }} title="{{ . }}"{{ end }}{{ if (urls.Parse $url).Host }} rel="noopener noreffer" target="_blank"{{ end }}>
			{{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}
		</a>
	{{- end -}}
{{- end -}}
```

添加样式(`_custom.scss`)：

```scss
/* 子菜单栏 */
.dropdown {
  display: inline-block;
}

/* 子菜单的内容 (默认隐藏) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  line-height: 1.3rem;
}

/* 子菜单的链接 */
.dropdown-content a {
  padding: 10px 18px 10px 14px;
  text-decoration: none;
  display: block;
  & i {
    margin-right: 3px;
  }
}

/* 鼠标移上去后修改子菜单链接颜色 */
.dropdown-content a:hover {
  background-color: #f1f1f1;
  border-radius: 4px;
}

/* 在鼠标移上去后显示子菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 680px) {
    .dropdown {
      display: inline;
    }
  .dropdown:hover .dropdown-content {
    display: inline;
    z-index: 1;
    margin-top: -2em;
    margin-left: 3em;
  }
  .dropdown-content a:hover {
    background-color: transparent;
  }
}
```

**使用：**

子菜单多设置一个parent属性指向父级菜单就行了。

```yaml
menu:
  main:
	# 统计数据分析父子菜单
    -
      identifier: "data"
      pre: '<i class="fas fa-chart-line" style="color:red;"></i>'
      post: ""
      name: "统计"
      url: ""
      title: ""
      weight: 4
    - 
      parent: "data"
      identifier: "hot"
      pre: '<i class="fab fa-hotjar" style="color:red;"></i>'
      post: ""
      name: "热度"
      url: "/hot/"
      title: ""
      weight: 1
```

**增强:** post如果设置为"_blank",则在新窗口打开。设置其他值则作为后缀功能

**技巧:** 父级菜单可以设置`url=""`作为不跳转的超链接



## 3.12 添加文章过期提醒

在`config.yaml`中全局开启

```yaml
params:
  # LoveIt 主题版本
  version: "0.2.X"
  
  # 在文章末尾显示提示信息，提醒读者文章内容可能过时。
  outdatedInfoWarning:
    enable: true
    hint: 90     # 如果文章最后更新于这天数之前，显示提醒
    warn: 180    # 如果文章最后更新于这天数之前，显示警告
```

在front matter中单独设置

```markdown
outdatedInfoWarning: false
```

将`\themes\LoveIt\i18n\zh-CN.toml`拷贝到`\i18n\zh-CN.toml`，在国际化文件中添加变量

```
[outdatedInfoWarningBefore]
  other = "本文最后更新于 "

[outdatedInfoWarningAfter]
  other = "，文中内容可能已过时，请谨慎使用。"
```

创建`/layouts/partials/single/outdated-info-warning.html`模板

```javascript
{{- if or .Params.outdatedInfoWarning (and .Site.Params.outdatedInfoWarning.enable (ne .Params.outdatedInfoWarning false)) }}
  {{- $daysAgo := div (sub now.Unix .Lastmod.Unix) 86400 }}
  {{- $hintThreshold := .Site.Params.outdatedInfoWarning.hint | default 30 }}
  {{- $warnThreshold := .Site.Params.outdatedInfoWarning.warn | default 180 }}

  {{- $updateTime := .Lastmod }}
  {{- if .GitInfo }}
    {{- if lt .GitInfo.AuthorDate.Unix .Lastmod.Unix }}
      {{- $updateTime := .GitInfo.AuthorDate }}
    {{- end }}
  {{- end -}}

  {{- if gt $daysAgo $hintThreshold }}
	{{- $iconDetails := "fas fa-angle-right fa-fw" -}}
    {{- if gt $daysAgo $warnThreshold }}
		{{- $type := "warning" -}}
		{{- $icon := "fas fa-exclamation-triangle fa-fw" -}}
		<div class="details admonition {{ $type }} open">
			<div class="details-summary admonition-title">
				<i class="icon {{ $icon }}{{ $type }}"></i>{{ T $type }}<i class="details-icon {{ $iconDetails }}"></i>
	{{- else }}
		{{- $type := "note" -}}
		{{- $icon := "fas fa-pencil-alt fa-fw" -}}
		<div class="details admonition {{ $type }} open">
			<div class="details-summary admonition-title">
				<i class="icon {{ $icon }}{{ $type }}"></i>{{ T $type }}<i class="details-icon {{ $iconDetails }}"></i>
    {{- end }}
		    </div>
			<div class="details-content">
				<div class="admonition-content">
					{{ T "outdatedInfoWarningBefore" -}}
					<span class="timeago" datetime="{{ dateFormat "2006-01-02T15:04:05" $updateTime }}" title="{{ dateFormat "January 2, 2006" $updateTime }}">
					{{- dateFormat "January 2, 2006" $updateTime -}}
					</span>{{ T "outdatedInfoWarningAfter" -}}
				</div>
			</div>
		 </div>
  {{- end -}}
{{- end -}}
```

将`/themes/LoveIt/layouts/posts/single.html`拷贝到`/layouts/posts/single.html`

修改`{{- /* Content */ -}}`部分

```javascript
{{- /* Content */ -}}
<div class="content" id="content">
    {{- dict "Content" .Content "Ruby" $params.ruby "Fraction" $params.fraction "Fontawesome" $params.fontawesome | partial "function/content.html" | safeHTML -}}
    
    {{- /* 输出警告信息 */ -}}
    {{- partial "single/outdated-info-warning.html" . -}}
</div>
```



## 3.13 添加分类文章数量

### list.html添加sup标签

拷贝`\themes\LoveIt\layouts\taxonomy\list.html`到`\layouts\taxonomy\list.html`

给图标什么的添加`<sup>{{ len .Pages }}</sup>`

- 改动点一：

原始:

```
{{- if eq $taxonomy "category" -}}
    <i class="far fa-folder-open fa-fw"></i>&nbsp;{{ .Title }}
{{- else if eq $taxonomy "tag" -}}
    <i class="fas fa-tag fa-fw"></i>&nbsp;{{ .Title }}
{{- else -}}
```

改为

```javascript
{{- if eq $taxonomy "category" -}}
    <i class="far fa-folder-open fa-fw"></i>&nbsp;{{ .Title }}<sup>{{ len .Pages }}</sup>
{{- else if eq $taxonomy "tag" -}}
    <i class="fas fa-tag fa-fw"></i>&nbsp;{{ .Title }}<sup>{{ len .Pages }}</sup>
{{- else -}}
```

- 改动点二：

原始:

```
{{- range $pages.PageGroups -}}
                <h3 class="group-title">{{ .Key }}</h3>
```

改为:

```
{{- range $pages.PageGroups -}}
    <h3 class="group-title">{{ .Key }} <sup>{{ len .Pages }}</sup></h3>
```

- 改动点三: 主题文章按年份分组,如果想调整为按月份分组

原始:

```
{{- /* Paginate */ -}}
{{- if .Pages -}}
    {{- $pages := .Pages.GroupByDate "2006" -}}
```

改为:

```
{{- /* Paginate */ -}}
{{- if .Pages -}}
    {{- $pages := .Pages.GroupByDate "2006-01" -}}
```



### terms.html添加sup标签

拷贝`\themes\LoveIt\layouts\taxonomy\terms.html`到`\layouts\taxonomy\terms.html`,添加`sup`标签

- 改动点一:

原始:

```
	<div class="page archive">
    {{- /* Title */ -}}
    <h2 class="single-title animated pulse faster">
        {{- .Params.Title | default (T $taxonomies) | default $taxonomies | dict "Some" | T "allSome" -}}
    </h2>
```

改为:

```
    <div class="page archive">
    {{- /* Title */ -}}
    <h2 class="single-title animated pulse faster">
        {{- .Params.Title | default (T $taxonomies) | default $taxonomies | dict "Some" | T "allSome" -}}<sup>{{ len .Pages }}</sup>
    </h2>
```

- 改动点二：

原始:

```
<h3 class="card-item-title">
    <a href="{{ .RelPermalink }}">
        <i class="far fa-folder fa-fw"></i>&nbsp;{{ .Page.Title }}
    </a>
</h3>
```

改为:

```
<h3 class="card-item-title">
    <a href="{{ .RelPermalink }}">
        <i class="far fa-folder fa-fw"></i>&nbsp;{{ .Page.Title }} <sup>{{ len .Pages }}</sup>
    </a>
</h3>
```

### section.html添加sup标签

拷贝`\themes\LoveIt\layouts\_default\section.html`到`\layouts\_default\section.html`

- 改动点一：

原始:

```
<div class="page archive">
    {{- /* Title */ -}}
    <h2 class="single-title animated pulse faster">
        {{- .Params.Title | default (T .Section) | default .Section | dict "Some" | T "allSome" -}}
	</h2>
```

改为:

```
<div class="page archive">
    {{- /* Title */ -}}
    <h2 class="single-title animated pulse faster">
        {{- .Params.Title | default (T .Section) | default .Section | dict "Some" | T "allSome" -}}<sup>{{ len .Pages }}</sup>
    </h2>
```

- 改动点二：

原始:

```
{{- range $pages.PageGroups -}}
            <h3 class="group-title">{{ .Key }}</h3>
```

改为:

```
{{- range $pages.PageGroups -}}
    <h3 class="group-title">{{ .Key }} <sup>{{ len .Pages }}</sup></h3>
```

- 改动点三: 同上按年份分组,如果想调整为按月份分组

原始:

```
{{- /* Paginate */ -}}
{{- if .Pages -}}
    {{- $pages := .Pages.GroupByDate "2006" -}}
```

改为:

```
{{- /* Paginate */ -}}
{{- if .Pages -}}
    {{- $pages := .Pages.GroupByDate "2006-01" -}}
```



## 3.14 添加最近更新的文章

`config.yaml`自定义变量

```yaml
[params.section]
    # 显示最近更新文章的数量
    lastUpdatedSize = 10
```

将`/themes/LoveIt/layouts/_default/section.html`拷贝到`/layouts/_default/section.html`

在`{{- /* Paginate */ -}}`上方添加模板

```javascript
{{- /* Last Modified */ -}}
{{- $lastUpdatedSize := .Site.Params.section.lastUpdatedSize -}}
{{- if $lastUpdatedSize -}}
	{{- if .Pages -}}
		{{- $pages := .Pages.ByLastmod.Reverse -}}
		<h3 class="group-title">最近更新 <sup>{{- $lastUpdatedSize -}}</sup></h3>
		{{- range first $lastUpdatedSize $pages -}}
			<article class="archive-item">
				<a href="{{ .RelPermalink }}" class="archive-item-link">
					{{- .Title -}}
				</a>
				<span class="archive-item-date2">
					{{- "2006-01-02" | .Lastmod.Format -}}
				</span>
			</article>
		{{- end -}}
	{{- end -}}
{{- end -}}
```

在`/assets/css/_custom.scss`添加自定义样式

```
.archive-item-date2 {
    color: #a9a9b3;
}
```

将`/themes/LoveIt/layouts/posts/single.html`拷贝到`/layouts/posts/single.html`,在每篇文章的模板增加更新时间

原始:

```
{{- with .Site.Params.dateformat | default "2006-01-02" | .PublishDate.Format -}}
    <i class="far fa-calendar-alt fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
{{- end -}}
```

改为:

```
{{- with .Site.Params.dateformat | default "2006-01-02" | .PublishDate.Format -}}
    <i class="far fa-calendar fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
{{- end -}}
{{- with .Site.Params.dateformat | default "2006-01-02" | .Lastmod.Format -}}
    <i class="far fa-calendar-plus fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
{{- end -}}
```





一些细节还是需要自己琢磨,整理这些应该也够一个正常的博客运转了。如果有大的点再陆续补充吧。

- [x] 覆盖样式文件的方式感觉有点乱,过阵子稳定后合并到主题目录里面。直接修改主题文件。(主题也不怎么维护了)

## 3.15 插入视频代码

比如youtube视频

`{{< youtube w7Ft2ymGmfc>}}`

loveit

https://themes.gohugo.io/themes/loveit/

https://github.com/dillonzq/LoveIt





# 4 从语法层面学习

## 目录

```
│ config.yaml 	网站的配置文件.
├─archetypes 	
│   ├─default.md
├─content		文章存放的地方.
    ├── _index.md          // [home]            <- https://example.com/ **
    ├── about.md           // [page]            <- https://example.com/about/
    ├── posts               
    |   ├── _index.md      // [section]         <- https://example.com/posts/ **         
    |   ├── firstpost.md   // [page]            <- https://example.com/posts/firstpost/
    |   ├── happy           
    |   |   ├── _index.md  // [section]         <- https://example.com/posts/happy/ **
    |   |   └── ness.md    // [page]            <- https://example.com/posts/happy/ness/
    |   └── secondpost.md  // [page]            <- https://example.com/posts/secondpost/
    └── quote   
        ├── _index.md      // [section]         <- https://example.com/quote/ **           
        ├── first.md       // [page]            <- https://example.com/quote/first/
        └── second.md      // [page]            <- https://example.com/quote/second/
├─data
├─static		静态资源存放的地方, 如 图片, 样式文件, 脚本文件等, 		
├─layouts
└─themes		网站主题存放的地方
    └── mytheme
        └── layouts
            ├── 404.html             // 404页面模板
            ├── _default
            │   ├── baseof.html      // 默认的基础模板页, 使用的方式是'拼接', 而不是'继承'.
            │   ├── list.html        // 列表模板  
            │   └── single.html      // 单页模板
            ├── index.html           // 首页模板
            └── partials             // 局部模板, 通过partial引入
                ├── footer.html
                ├── header.html
                └── head.html 
```

## 原理

文章(content/markdown.md)

页面(hugo最终生成的静态网站的HTML页面, 页面=文章+模板)

模板

```
根目录的layouts优先级高于theme/layouts。所以，可以通过创建相同的结构文件覆盖设置。
根目录的yaml配置文件设置theme="mytheme",指定自己使用的主题模板
```

## 分类和标签

```
hugo默认生成的页面, 没有对应的markdown文章
分类列表页面             // [taxonomyTerm]   <- https://example.com/categories/  **
某个分类下的所有文章的列表 // [taxonomy]      <- https://example.com/categories/one-category  **
标签列表页面            // [taxonomyTerm] <- https://example.com/tags/  **
某个标签下的所有文章的列表// [taxonomy]    <- https://example.com/tags/one-tag  **
```



# 5 其他主题

## toha

> 很好看的一款主题，用于自己的简历个站，逼格满满。而且左侧的文章管理也挺方便。

- hugo中文网：https://www.gohugo.org/
- hugo主题网：https://themes.gohugo.io/

- toha文档:https://toha-guides.netlify.app/posts/features/
- toha示例:https://toha-guides.netlify.app/
- toha仓库:https://github.com/hugo-toha/toha
- toha站点源码库：https://github.com/hugo-toha/hugo-toha.github.io/blob/source/data/en/site.yaml
- https://github.com/hugo-toha/hugo-toha.github.io
- https://github.com/hugo-toha
- https://github.com/hugo-toha/guides

## 准备工作

```
创建github pages： <your user name>.github.io
git clone git@github.com:nbchen/nbchen.github.io.git blog
```

## 安装主题

```
hugo new site ./ -f=yaml --force # 配置文件为yaml
git submodule add https://github.com/hugo-toha/toha.git themes/toha
hugo server -t toha -w # 监听模式启动
```

启动主题

```yaml
baseURL: https://hugo-toha.github.io

languageCode: en-us
title: "John's Blog"
theme: "toha"

# Manage languages
# For any more details, you can check the official documentation: https://gohugo.io/content-management/multilingual/
languages:
  en:
    languageName: English
    weight: 1

# Control TOC depth
markup:
  tableOfContents:
    startLevel: 2
    endLevel: 6
    ordered: false

# At least HTML and JSON are required for the main HTML content and
# client-side JavaScript search
outputs:
  home:
  - HTML
  - RSS
  - JSON

# Enable global emoji support
enableEmoji: true

# Site parameters
params:
  # GitHub repo URL and branch of your site
  gitRepo: https://github.com/hugo-toha/hugo-toha.github.io
  gitBranch: main

  # specify whether you want to write some blog posts or not
  enableBlogPost: true

  # specify whether you want to show Table of Contents in reading page
  enableTOC: true

  # specify whether you want the language flags to be displayed. 
  showFlags: true

  # Provide newsletter configuration. 
  # This feature has been implemented for Mailchimp only for now.
  # You can also hide it from the footer.
  newsletter:
    # specify whether you want to display the newsletter form 
    enable: true
    # specify which newsletter provider you want to use
    provider: mailchimp
    # specify the target URL for the subscription form
    mailchimpURL: https://github.us1.list-manage.com/subscribe/post?u=19de52a4603135aae97163fd8&amp;id=094a24c76e
```

本地运行

```
hugo server --theme toha --watch
```



# 主题开发

## 起步

> 万事开头难，不怕不会，就怕半途而废，甚至未行先怯

### 生成主题手脚架

```
hugo new theme zero
```

生成目录

```
D:\coder\test\hugo_theme_dev
D:.                           
├─resources                   
│  └─_gen                     
│      ├─assets               
│      └─images               
└─themes                      
    └─zero                    
        │  hugo.toml          
        │  LICENSE          hugo主题的许可证信息  
        │  theme.toml       hugo主题的元数据信息  
        │                     
        ├─archetypes        hugo主题文章模板  
        │      default.md     
        │                     
        ├─layouts           hugo主题布局文件  
        │  │  404.html      网站的404错误页面  
        │  │  index.html    网站的主页
        │  │                  
        │  ├─partials   部分页面布局文件夹      
        │  │      footer.html 网页的页脚信息
        │  │      head.html   网页头部
        │  │      header.html 网页的主导航栏
        │  │                  
        │  └─_default  默认页面布局文件夹       
        │          baseof.html *最关键的入口文件，可定义网站基本组成部分，header、main，footer等
        │          list.html   列表页面的模板文件
        │          single.html 单页面的模板文件
        │                     
        └─static              hugo主题的静态文件
            ├─css             
            └─js              
                              
```

### vscode插件

格式化代码

```
npm install --save-dev prettier prettier-plugin-go-template
```

在settings.json设置：

```json
{
  "security.workspace.trust.untrustedFiles": "open",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "json.schemas": [],
  "editor.formatOnSave": true
}
```

在`.prettierrc`设置：

```json
{
  "plugins": ["prettier-plugin-go-template"],
  "overrides": [
    {
      "files": ["*.html"],
      "options": {
        "parser": "go-template"
      }
    }
  ],
  "goTemplateBracketSpacing": true
}
```





### hugo语法简单介绍

```
{{- partial "head.html" . -}}
```

两个大括号是 Hugo 的模板语言标记，在里面可以定义变量，调用函数等，这里的 `partial` 函数会引用 `head.html` 的内容，并将当前上下文 `.` 传入，也许你也留意到了内侧括号旁的横线`-`，那个是用来清除模板周围的空格符号，比如左边的`-`意味着将左侧模板左侧的空白符号统统清除，详情看[这里](https://gohugo.io/templates/introduction/#whitespace)。

```
<title>{{ block "title" . }}{{ .Site.Title }}{{ end }}</title>
```

这个 `block` 函数可以申明一个“块”，然后在其他模板文件中通过定义这个“块”的不同内容达成不同页面有不同标题，如果不定义则使用默认的站点名称 `{{ .Site.Title }}`。看到这里问题都不大，只是千万要注意 **`block`** 只在 `baseof.html` 才有效，这也是为什么我没有放在 `head.html`，详情看[这里](https://discourse.gohugo.io/t/block-in-a-partial-and-defining-in-a-page/4999)。

### 文档阅读

对于主题开发，需要关注主档中的3大块：

- [Templates](https://gohugo.io/templates/)
- [Functions](https://gohugo.io/functions/)
- [Variables](https://gohugo.io/variables/)

### 模板读取顺序

对于`layouts`下的各种模板文件，hugo有个预设的读取顺序，详细看[这里](https://gohugo.io/templates/lookup-order/)

简单来说，对于`主页`，`文章页`，`归档页`，`分类列表页`，`分类页`这些不同种类的页面，都有相应的地方读取模板，如果某个页面有多个地方的模板文件相匹配，则只有优先级高的模板会被使用。

参考：

| 页面                  | 模板地址                      | 说明                             |
| --------------------- | ----------------------------- | -------------------------------- |
| 主页                  | layouts/index.html            |                                  |
| 文章页 (posts 目录下) | layouts/posts/single.html     | 在 posts 目录下的普通文章        |
| 其他文章页            | layouts/_default/single.html  | 比如 /about 页，由 about.md 生成 |
| 归档页                | layouts/_default/section.html | 如 /posts/                       |
| 分类列表页            | layouts/_default/terms.html   | 如 /tags/                        |
| 分类页                | layouts/_default/term.html    | 如 /tags/日语/                   |



### 内置模板

除了自己写模板呢，Hugo 实际上已经[内置](https://github.com/gohugoio/hugo/tree/master/tpl/tplimpl/embedded/templates/_default)了不少通用的模板，称为 [Internal Templates](https://gohugo.io/templates/internal)，比如 disqus，google analytics，可以通过 `template` 函数引入，比如在合适的地方 `{{ template "_internal/disqus.html" . }}`，这样在配置文件中定义了 `disqusShortname` 之后，就可以显示评论了。

对于这些内置模板的内容，感兴趣的朋友可以前往 [Hugo 的源代码](https://github.com/gohugoio/hugo/tree/master/tpl/tplimpl/embedded/templates)阅读。[_defualt 目录下](https://github.com/gohugoio/hugo/tree/master/tpl/tplimpl/embedded/templates/_default)还有 `robots.txt`，`sitemap.xml`，`rss.xml` 的默认模板。

### 静态文件

[静态文件](https://gohugo.io/content-management/static-files/)就很简单了，位于 `static` 目录下，**Hugo 会在生成页面时直接将他们拷贝至根目录（public下）**。

```bash
static
├── css
│   └── style.css
├── img
│   └── 404.jpeg
├── js
│   └── iconfont.js
└── sitemap.xsl
```

### i18n

这部分也不复杂，只需在 `i18n` 目录下定义好对应关系，对于单词单复数的问题可以通过 `one` 和 `other` 字段解决，比如

```yaml
readingTime:
  one: One minute to read
  other: "{{.Count}} minutes to read"
```

在模板中引用的时候 `{{ i18n "readingTime" .ReadingTime }}` 即可。

此外，还有一个有用的函数 [dict](https://gohugo.io/functions/dict/) 可以用来构造一个对象，赋予它相应字段，以便可以让 i18n 里的模板可以渲染。

参考：

- [Translation of Strings](https://gohugo.io/content-management/multilingual/#translation-of-strings)
- [i18n](https://gohugo.io/functions/i18n/)

### Markdown Render Hooks

这个 [Markdown Render Hooks](https://gohugo.io/getting-started/configuration-markup/#markdown-render-hooks) 就比较有意思了，尤其适合我这种使用 Bootstrap 框架的，因为我们要给某个组件赋予样式，就必须给这个组件赋予相应的 `class`，这个 Hooks 就是（部分）解决这个问题的。

比如说我们想给 Markdown 渲染出的 `img` HTML 标签加上某个（些）`class` 怎么办呢？

可以创建 `layouts/_default/_markup/render-image.html` 这么一个文件，里面写上

```html
<p>
  <img
    class="img-fluid"
    src="{{ .Destination | safeURL }}"
    alt="{{ .Text }}"
    {{ with .Title }}title="{{ . }}"{{ end }}
  />
</p>
```

这样一来，Markdown 在渲染的时候，遇到图片就会采用这里的逻辑。同理给链接加上没有下划线的样式，又或者如果是外部链接在新标签页打开等等的功能就可以实现了。不过，目前只支持以下三种。

- image
- link
- heading

## 常见问题

### 如何 Debug

Print 大法，简而言之就是在模板中插入如下语句，`$.` 代表全局上下文。

```html
{{ printf "%#v" $.Site }}
```

详见：[Template Debugging | Hugo](https://gohugo.io/templates/template-debugging/)

### 搜索功能

上一个主题并没有自带搜索功能，另外静态博客的搜索似乎也是一个痛，需要不少努力而实际上似乎效果有限，我就直接偷懒用 Google 的搜索得了。不过在写搜索表单的时候还是学到了一个小技巧值得分享一下。

其实我想实现的功能很简单，一个搜索框，一个搜索按钮，按下按钮然后在新窗口打开 Google，并且自动搜索 `keywords site:blog.gimo.me`，这个功能如果只是一个链接倒是会简单不少，不过换成表单就要稍微麻烦一点，不过效果还是挺不错的。示例代码如下，关键是这个隐藏的 `<input type="hidden" name="q" value="site:blog.gimo.me" />`。

```html
<form action="https://google.com/search" target="_blank" class="row">
  <div class="col-auto">
    <input class="form-control me-2" type="search" placeholder="{{ i18n "search" }}" name="q" />
    <input type="hidden" name="q" value="site:blog.gimo.me" />
  </div>
  <button class="col-auto btn btn-outline-success" type="submit">
    {{ partial "icons/search.html" . }}
  </button>
</form>
```

### 固定导航栏

固定导航栏本身倒不是什么难事，在 Bootstrap 里就是一个 `.fixed-top` 不过它带来了两个衍生问题，

1. 页面头部的一部分会被这个“漂浮”的固定导航栏挡住
2. 目录跳转到相应的大标题同样被挡住

对于第一个问题倒是简单，直接对于整个 `body` 设定一个合适的 `padding-top` 即可。

```css
body {
  padding-top: 56px;
}
```

第二个问题就相对麻烦一点，而且遭遇这个问题的人不在少数，比如 [html - Fixed page header overlaps in-page anchors - Stack Overflow](https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors)，里面列举了多种解决这个问题的手段，懒惰如我当然选了一个最简单的方法（[scroll-padding](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)），当然坏处是支持的浏览器会少一些。由于这个 padding 的值和问题 1 一致，故定义一个全局变量：

```css
:root {
  --body-padding-top: 56px;
}
html {
  scroll-padding: var(--body-padding-top) 0 0 0;
}
body {
  padding-top: var(--body-padding-top);
}
```

### 重定向

严格来说这个和主题并没有直接联系，不过借着换主题的机会整理了一下已有文章的链接。做了几个调整：

1. 统一使用 `slug` 来定义 URL，之前在 [Front Matter](https://gohugo.io/content-management/front-matter) 里混用了 `url` 和 `slug` 两个字段
2. 把目录 `post` 改成 `posts`，这样就导致原来博客的所有文章页的地址从 `/post/xxx` 变成了 `/posts/xxx` 了，这么做的主要原因是为了和分类页的 `/tags` `/tags/xxx` 结构保持一致。

1 没有啥好办法，写了句 `sed` 批量处理一下，2 的话有两种方法，我都用上了，首先使用 Hugo 内置的 [Alias 功能](https://gohugo.io/content-management/urls/#aliases)，给所有文章的 Front Matter 里加上 `alias`（写了段 py 脚本简单处理下）。这可以理解为一种软重定向，实现的原理可以看 Hugo 的文档，这种方法的好处是不依赖部署的平台都能实现跳转，坏处是对搜索引擎不太友好似乎。另一种是用我的部署平台 Cloudflare 提供的跳转功能，只需定义一个新旧链接的 Map，放在静态文件目录的 [_redirects](https://github.com/masakichi/nikki/blob/master/static/_redirects) 文件里。文件内容如下（部分）

```txt
/post/ /posts/ 301
/post /posts/ 301
/post/vehicle/ /posts/vehicle/ 301
/post/using-namecheap-email-hosting-service/ /posts/using-namecheap-email-hosting-service/ 301
/post/using-hugo-to-generate-readme-md/ /posts/using-hugo-to-generate-readme-md/ 301
/post/cloudcone-easter-egg-hunt-2021/ /posts/cloudcone-easter-egg-hunt-2021/ 301
```

由于文章链接发生了变化，导致 Disqus 上的评论也需要做一下迁移，同样需要准备一个新旧链接的 csv 文件，在 https://disqus.com/admin/discussions/migrate/ 选择上传即可。内容格式为旧链接在前，新链接在后逗号隔开。



### 文章修改时间

本来解决了重定向的问题以为万事大吉了，没想到老革命又遇到新问题，就是文章的修改时间问题，由于上面为了解决重定向的问题修改了所有文章的 Front Matter，这导致了所有文章都变成今天有更新了，囧。为了让那些老文章可以 RIP，我再吃点儿苦吧。查看 [Hugo 文档](https://gohugo.io/getting-started/configuration/#configure-front-matter)关于修改时间 `.Lastmod` 的定义，发现还是有救的。首先对于某篇文章的修改时间，Hugo 的默认定义是这样的

```toml
lastmod = [':git', 'lastmod', 'date', 'publishDate']
```

`:git` 代表从 git repo 里读取 Author Date，然后依次是 Front Matter 里的 `lastmod`，`date`，`pubDate`。我这里的主要问题是现存文章都在 git 里读取更新记录，解决它分为两步：

1. 用 git 把 HEAD 切到更改所有文章前，用 Hugo 的模板导出一份所有文章的文件名路径和修改时间，再把 git 切到最新的分支上，写个小脚本在所有文章的 Front Matter 里再加上刚刚导出的各自的 `lastmod`。
2. 调整 Hugo 定义 `.Lastmod` 的优先级，在 `config.toml` 里定义如下

```toml
[frontmatter]
  lastmod = ['lastmod', ':git', 'date', 'publishDate']
```

这样一来，Hugo 会先从页面的 `lastmod` 读修改时间，之后再读取 git 里的信息。这就保证老的文章不会都统统显示今天更新了。

# 参考附录

- git安装：
  - [Windows系统Git安装教程（详解Git安装过程）](https://www.cnblogs.com/xueweisuoyong/p/11914045.html)
  - [Windows 10 环境下安装配置Git并连接到GitHub](https://www.dusaiphoto.com/article/13/)

- Hugo论坛：https://discourse.gohugo.io/

- Hugo主题: https://themes.gohugo.io/

- Hugo仓库: https://github.com/gohugoio/hugo/releases

- Mike Dane youtube 系列教程：https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3



