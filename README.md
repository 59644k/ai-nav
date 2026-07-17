# 群星索引 · AI 工具导航

一个纯静态的 AI 工具导航单页站点，星图 / 坐标索引风格，收录 10 个分区、76 款工具，支持分区筛选、罗盘导航与关键词搜索。

## 目录结构

```
ai-nav/
├── index.html      页面结构
├── css/
│   └── style.css   全部样式
├── js/
│   └── main.js     工具数据 + 交互逻辑（筛选、搜索、罗盘）
└── .nojekyll        告知 GitHub Pages 跳过 Jekyll 处理
```

无需 npm install、无需构建工具，纯 HTML/CSS/JS，唯一的外部请求是 Google Fonts（Fraunces / Manrope / IBM Plex Mono），网络不可用时会自动回退到系统字体，不影响功能。

## 本地预览

直接双击 `index.html` 用浏览器打开即可，或在本目录起一个静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署到 GitHub Pages

1. 新建一个仓库，把本文件夹内的全部文件（`index.html`、`css/`、`js/`、`.nojekyll`）放到仓库根目录（或 `docs/` 目录）
2. 提交并推送到 GitHub
3. 仓库 Settings → Pages → Source 选择对应分支和目录（根目录或 `/docs`）
4. 保存后等待 1-2 分钟，Pages 会给出访问链接

## 修改工具数据

打开 `js/main.js`，编辑顶部的 `categories`（分区）和 `tools`（工具列表，含 `cat`/`name`/`org`/`desc` 字段）两个数组即可，页面会自动重新渲染，无需改动 HTML/CSS。
