# mobile-3d-racer

一个可直接部署到 **GitHub Pages / Netlify** 的手机优先 3D 赛车小游戏（Three.js + 原生 HTML/CSS/JS）。

## 本地运行
直接双击 `index.html` 或使用任意静态服务器打开即可。

## 手机访问建议
- 推荐 iPhone Safari，横屏体验最佳。
- 支持触控长按：左转、右转、加速、刹车/倒车。
- 顶部按钮：暂停/继续、重新开始。
- 撞障碍会游戏结束，点击 `↺` 可快速重开。

## 部署到 GitHub Pages
1. 推送仓库到 GitHub。
2. 进入 **Settings → Pages**。
3. Source 选择 `Deploy from a branch`。
4. 选择 `main`（或你的分支）和根目录 `/`。
5. 保存后等待发布完成，使用生成的 Pages URL 访问。

## 部署到 Netlify
1. 登录 Netlify 并导入该仓库。
2. 构建设置保持为空（无需 build command）。
3. Publish directory 设置为仓库根目录（留空或 `.`）。
4. 部署后使用分配的域名访问。

## 常见问题
- **黑屏或加载失败**：检查网络是否能访问 `unpkg`（Three.js CDN）。
- **iPhone 触控无响应**：确保未开启桌面模式，尝试刷新页面。
- **卡顿**：代码已限制 DPR（像素比）以减轻 GPU 压力；低电量模式下可能仍降帧。
- **底部按钮被遮挡**：已使用 `safe-area`，若仍遮挡可上滑隐藏 Safari 底栏。
