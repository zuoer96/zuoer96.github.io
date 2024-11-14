

## 简介

[VitePress](https://vitepress.dev/) 使用 Markdown 编写的源内容，生成可以轻松部署在任何地方的静态 HTML 页面

VitePress 作为 [VuePress](https://v2.vuepress.vuejs.org/zh/) 的孪生兄弟，借助 [Vue 3](https://cn.vuejs.org/) 和 [vite](https://vitejs.cn/)，VitePress 提供了明显更好的 DX、更好的生产性能、更精致的默认主题以及更灵活的定制 API

## 官方

它是搭建文档的 静态站点生成器(SSG) 最佳利器之一

- VitePress官网：https://vitepress.dev/
- vite官网：https://vitejs.cn/

## 参考网站

- [VitePress 中文网](https://vitepress.qzxdp.cn/)
- [GitHub仓库](https://github.com/vuejs/vitepress)
- https://vitepress.yiov.top/page.html



## 安装

```
pnpm add -D vitepress search-insights @algolia/client-search
pnpm dlx vitepress init
# 我们将文件都放在 ./docs ，参照下面，其他默认回车

# 添加到忽略文件
echo node_modules >> .gitignore
echo cache >> .gitignore
```

## 依赖报错

```
[ERROR] "vitepress" resolved to an ESM file. ESM file cannot be loaded by `require`. See http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only for more details. [plugin externalize-deps]

解决：
package.json
{
"type": "module",
}
pnpm i
```

## 运行

```
pnpm run docs:dev
```

## 目录

方式一

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.ts           <-- 配置文件
│  ├─ api-examples.md        <-- 文章1
│  ├─ markdown-examples.md   <-- 文章2
│  └─ index.md               <-- 首页
└─ package.json

index.md 是我们的首页，最后也渲染成 index.html
你也可以命名成README.md
```

方式二

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.ts           <-- 配置文件
│  ├─ api-examples           
│  │  └─ index.md            <-- 文章1
│  ├─ markdown-examples      
│  │  └─ index.md            <-- 文章2
│  └─ index.md               <-- 首页
└─ package.json
```

