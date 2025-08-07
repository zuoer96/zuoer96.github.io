+++
date = '2025-08-06T17:28:49+08:00'
title = 'Hello World'
+++



# 博客搭建

## 前置环境

### Git安装

1.去[官网](https://git-scm.com/)下载`Download for Windows`，双击安装

2.验证：`git --version`

3.配置git提交信息

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱" # 邮箱要和github账户的一致
```

4.配置github ssh key

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

打开 GitHub 网站 → 右上角头像 → **Settings** → **SSH and GPG keys** → **New SSH key** → 输入说明，粘贴用户目录下公钥 → 点击 **Add SSH key**

### hugo安装

1.去[hugo官网下载hugo_extended_*_Windows-64bit.zip](https://github.com/gohugoio/hugo/tags)。

2.解压，将目录配置到环境变量Path

3.验证：`hugo version`

## 创建站点

```cmd
hugo new site zuoer
cd zuoer
git init
git config --global core.autocrlf true # 【可选】
git submodule add https://github.com/hugo-next/hugo-theme-next.git themes/hugo-theme-next
copy themes\hugo-theme-next\exampleSite\hugo.yaml .
move hugo.toml hugo.toml.backup
# 拷贝一下 data 、layouts和static三个文件夹内容，放到你站点的根目录下
hugo server
```

> 后续主题版本更新：`git submodule update --remote`

## 部署站点

## 双仓GitHub Actions自动部署站点

### 仓库结构概览

| 仓库类型   | 用途                        | 可见性                                                |
| ---------- | --------------------------- | ----------------------------------------------------- |
| 私有仓库 A | 存储 Hugo 源码、NexT 主题等 | 私密，仅你可见                                        |
| 公开仓库 B | 用于部署静态页面            | 通过 GitHub Pages 自动发布网站（`zuoer96.github.io`） |

### 准备两个仓库

1. 在 GitHub 上创建 **私有仓库 A**（例如 `myblog-source`）。
2. 创建 **公开仓库 B**，命名为 `zuoer96.github.io`，用于 GitHub Pages 托管。

### 生成 SSH Deploy Key

在本地终端运行：

```bash
ssh-keygen -t ed25519 -C "1745233303@qq.com" -f deploy_key -N ""
```

你会在执行目录下获得私钥 `deploy_key` 和公钥 `deploy_key.pub`

- 将 **私钥内容** (`deploy_key`) 添加到 **私有源码仓库 A** 的 Settings → [Secrets](https://github.com/zuoer96/blog/settings/secrets/actions/new) 中，命名为 `ACTIONS_DEPLOY_KEY` 
- 将 **公钥内容** (`deploy_key.pub`) 添加到 **公开仓库 B** 的 Settings → [Deploy keys](https://github.com/zuoer96/zuoer96.github.io/settings/keys) 中，选中 **Allow write access** 以允许写入发布内容 

### 编写 GitHub Actions Workflow

在私有源码仓库 A 中创建 `.github/workflows/deploy.yml` 并填写以下内容（可以记作笔记模板）

```yaml
name: Hugo Build & Deploy - Private -> Public

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build Site
        run: hugo --minify

      - name: Deploy to Pages Repo
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          ssh-key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          repository-name: zuoer96/zuoer96.github.io
          branch: main
          folder: public
          single-commit: true
          commit-message: "Deploy from source"
```

- `actions/checkout` 支持拉取子模块，方便 NexT 主题加载。
- `peaceiris/actions-hugo` 用于安装 Hugo Extended 并构建网站。
- `github-pages-deploy-action` 使用 deploy key 推送 `public/` 内容到公开仓库 B

### 本地 `.gitignore` 配置（保持清洁）

在私有源码仓库 A 添加 `.gitignore`，避免误提交生成静态文件：

```
public/
resources/
```

> 这样工作区只保留源码，不包含 `public/` 输出内容



### 推送源代码，触发构建部署流程

1. 在本地提交 Hugo 源码与 workflow 文件：

```
echo "# blog" >> README.md
git init
git add .
git commit -m "Init Hugo source + deploy workflow"
git branch -M main
git remote add origin git@github.com:zuoer96/blog.git
git push origin main
```

2.GitHub Actions 将自动执行 workflow：构建 Hugo 站点，然后把 `public/` 内容推送到 **公开 Pages 仓库 B**。

3.GitHub Pages 使用仓库 B 的 `main` 分支根目录发布，几分钟完成部署，访问 `https://yourusername.github.io` 即可查看你的网站。



## 常用命令

2.本地项目设置baseURL

```toml
baseURL = "https://yourusername.github.io/"
```



### 创建新文章

```
hugo new posts/blog-test.md
```

### 本地预览

```
hugo server
```

### 生成静态文件

```
hugo
```

