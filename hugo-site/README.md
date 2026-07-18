# 群星索引 · AI Tool Atlas（Hugo 完整版）

在原有单页 AI 工具导航站基础上改造而成的完整 Hugo 静态网站项目。

- 首页布局、配色、卡片样式、字体、罗盘交互、搜索/筛选逻辑 **100% 沿用原版**，仅将硬编码数据迁移到 Hugo 数据文件，把静态 HTML 拆分为可维护的模板。
- 新增博客模块：文章列表自动分页、标签系统、按年份归档。
- 全站统一设计语言（深色 + 黄铜色 + Fraunces / Manrope / IBM Plex Mono），导航新增「博客」入口。

---

## 一、目录结构

```
hugo-site/
├── hugo.toml                  # 站点配置（菜单、分页、分类法、参数等）
├── archetypes/
│   └── default.md             # `hugo new` 新建文章时使用的模板
├── content/
│   ├── _index.md              # 首页文案元信息（标题/描述，供 <head> 使用）
│   ├── posts/
│   │   ├── _index.md          # 博客栏目页文案
│   │   └── *.md                # 博客文章（已内置 5 篇示例）
│   └── archives/
│       └── _index.md          # 归档页文案
├── data/
│   ├── categories.yaml         # 工具分区数据（原 main.js 中 categories 数组）
│   └── tools.yaml              # 工具数据（原 main.js 中 tools 数组）
├── layouts/
│   ├── index.html              # 首页模板（1:1 还原原版 hero/罗盘/筛选/卡片网格）
│   ├── 404.html
│   ├── _default/
│   │   ├── baseof.html         # 非首页页面的公共骨架
│   │   ├── taxonomy.html       # 标签云页 /tags/
│   │   └── term.html           # 单个标签下的文章列表 /tags/xxx/
│   ├── posts/
│   │   ├── list.html           # 博客列表（自动分页）/posts/
│   │   └── single.html         # 博客文章详情页
│   ├── archives/
│   │   └── list.html           # 归档页 /archives/
│   └── partials/
│       ├── head.html           # 字体、样式表、SEO meta
│       ├── topbar.html         # 顶部导航（品牌 + 博客入口 + 统计数字）
│       ├── footer.html
│       ├── pager.html          # 分页组件
│       └── post-card.html      # 文章卡片（复用首页 .card 样式）
└── static/
    ├── css/
    │   ├── style.css           # 原版首页样式，完全未修改
    │   └── blog.css            # 博客模块新增样式（只增不改，不影响首页）
    ├── js/
    │   └── main.js             # 首页交互逻辑（渲染/筛选/罗盘），逻辑与原版一致
    └── .nojekyll                # 部署到 GitHub Pages 时避免 Jekyll 处理
```

## 二、设计还原说明

1. **首页**：`layouts/index.html` 的 DOM 结构、class 名称、内联文案与原 `index.html` 完全一致；`static/css/style.css` 是原文件的原样拷贝，未做任何改动。
2. **数据驱动**：原来写死在 `main.js` 里的 `categories` / `tools` 数组，现在放到 `data/categories.yaml`、`data/tools.yaml` 中，Hugo 构建时通过 `{{ .Site.Data.tools | jsonify }}` 注入到页面内联脚本，`main.js` 里的渲染、筛选、搜索、罗盘指针逻辑一行未改。以后新增/修改工具，只需编辑这两个 YAML 文件，不用碰 JS/HTML。
3. **博客模块的视觉语言全部复用首页设计系统**：文章卡片用的就是首页 `.card` 的样式（黄铜色悬浮态、序号、arrow 图标），标签用的是首页筛选栏 `.pill` 的样式，新增的分页器、归档时间线、文章排版都基于同一套 CSS 变量（`--ink`、`--brass`、`--panel` 等），保证观感统一。

## 三、博客功能一览

| 功能 | 路径 | 说明 |
|---|---|---|
| 文章列表 | `/posts/` | 卡片式列表，默认每页 8 篇，超出自动分页 |
| 文章详情 | `/posts/<slug>/` | 支持标签、阅读时长、上一篇/下一篇导航 |
| 标签云 | `/tags/` | 展示全部标签及各标签文章数 |
| 标签详情 | `/tags/<tag>/` | 该标签下的文章列表，同样自动分页 |
| 归档 | `/archives/` | 按年份分组，时间倒序排列全部文章 |

分页大小在 `hugo.toml` 的 `[pagination] pagerSize` 中调整，默认 `8`。

## 四、新增/编辑文章

```bash
hugo new posts/my-new-post.md
```

会根据 `archetypes/default.md` 生成带 front matter 的新文件，编辑 `content/posts/` 下对应 `.md` 文件即可，支持字段：

```yaml
---
title: "文章标题"
date: 2026-07-18
description: "用于列表摘要与 SEO description"
tags: ["标签1", "标签2"]
draft: false   # 为 true 时本地预览可见，正式构建默认不输出
---
```

## 五、本地开发

需要预先安装 [Hugo Extended](https://gohugo.io/installation/)（建议 0.128 及以上版本）。

```bash
# 安装 Hugo（以 macOS 为例，其他系统见官方文档）
brew install hugo

# 进入项目目录
cd hugo-site

# 启动本地开发服务器（含草稿）
hugo server -D

# 浏览器访问
http://localhost:1313
```

## 六、构建生产版本

```bash
hugo --minify
```

构建产物输出在 `public/` 目录，即可直接部署到任意静态托管平台。

## 七、部署说明

### 方式一：Netlify

1. 将本项目推送到 GitHub / GitLab 仓库。
2. Netlify 新建站点 → 选择该仓库。
3. 构建配置：
   - Build command: `hugo --minify`
   - Publish directory: `public`
4. 环境变量新增 `HUGO_VERSION`（例如 `0.134.0`），确保云端构建版本与本地一致。
5. 部署完成后，把 `hugo.toml` 中的 `baseURL` 改为 Netlify 分配的域名（或自定义域名）。

也可以在项目根目录新增 `netlify.toml`：

```toml
[build]
  command = "hugo --minify"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.134.0"
```

### 方式二：Vercel

1. 推送到 GitHub 仓库后，在 Vercel 中 Import Project。
2. Framework Preset 选择 `Hugo`（Vercel 会自动识别 `hugo.toml`）。
3. Build Command：`hugo --minify`；Output Directory：`public`。
4. 部署完成后同样记得把 `baseURL` 改为实际域名。

### 方式三：GitHub Pages

1. 仓库根目录新增 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: "0.134.0"
          extended: true
      - run: hugo --minify
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

2. 仓库 Settings → Pages → Source 选择 "GitHub Actions"。
3. 把 `hugo.toml` 里的 `baseURL` 改成 `https://<你的用户名>.github.io/<仓库名>/`。
4. `static/.nojekyll` 已内置，避免 GitHub Pages 用 Jekyll 处理站点导致样式丢失。

---

## 八、上线前检查清单

- [ ] `hugo.toml` 中 `baseURL` 改为真实域名
- [ ] `hugo server -D` 本地预览首页、博客列表、文章详情、标签、归档均正常
- [ ] 检查 `data/tools.yaml` 中的工具信息是否需要更新
- [ ] 视需要替换 `content/posts/` 下的示例文章为真实内容
- [ ] 如需自定义域名，在托管平台绑定域名并配置 DNS
