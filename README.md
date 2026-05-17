# mobile-3d-racer

阶段一（架构重构 + PWA 基础）已完成：

## 项目结构
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `styles/game.css`
- `src/main.js`
- `src/game.js`
- `src/car.js`
- `src/track.js`
- `src/physics.js`
- `src/controls.js`
- `src/audio.js`（阶段一占位）
- `src/ui.js`
- `src/storage.js`
- `src/constants.js`

## 本地运行
可直接使用任意静态服务器，例如：

```bash
python3 -m http.server 8080
```

访问 `http://localhost:8080`。

## PWA / 离线说明
1. 首次联网打开页面。
2. 等待 service worker 安装完成（刷新一次）。
3. 断网后再次打开，核心文件可离线加载。

## iPhone Safari 添加到主屏幕
1. 用 Safari 打开部署地址。
2. 点击“分享”按钮。
3. 选择“添加到主屏幕”。
4. 从主屏幕启动将以独立应用样式打开。

## 触控测试
- 左侧转向区域：左右拖动。
- 右侧按钮：长按加速/刹车/手刹。
- 右上角：帮助、暂停、重置。

## 声音测试（阶段一说明）
- 当前 `src/audio.js` 为占位模块，第二阶段后续阶段会接入 Web Audio API。

## 部署
- 可直接部署至 **GitHub Pages** 或 **Netlify**（纯静态站点）。
