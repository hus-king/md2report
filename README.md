# 项目使用说明

## 一、后端服务启动

1. 进入 `backend` 目录：
   ```bash
   cd backend
   ```

2. 使用 Docker Compose 启动服务（后台运行）：
   ```bash
   docker compose up -d
   ```

3. 服务启动成功后，可通过以下地址访问后端 API：
   ```
   http://localhost:8004
   ```

> ✅ 提示：首次运行时，Docker 会自动拉取镜像并构建容器，请确保本地已安装 `docker` 与 `docker compose`。

---

## 二、前端服务启动

1. 进入 `frontend` 目录：
   ```bash
   cd frontend
   ```

2. 安装依赖并启动开发服务器：
   ```bash
   npm install
   npm start
   ```

3. 前端应用将在以下地址运行（自动打开浏览器）：
   ```
   http://localhost:3000
   ```

> ⚠️ 注意：确保后端服务已启动并正常响应，否则前端调用 API 可能失败。

---

## 三、功能使用流程

1. 打开前端页面（`http://localhost:3000`）；
2. 点击 **上传 Markdown 文件** 按钮，选择本地 `.md` 文件；
3. 点击 **生成报告** 按钮；