# Yao Portfolio

沉浸式單頁網站，展示我的前端開發歷程、重點專案與互動式自傳。以 React + Vite 驅動，搭配客製 SCSS、GSAP 動畫與 Intersection Observer，提供滑順的滾動導覽與多層次視覺效果。

## ✨ 特色

- **Sticky Capsule Navbar**：跟隨滾動的導覽列，可即時對應 Home / About / Project 區塊。
- **Hero + Quote Rotator**：首頁結合個人介紹、狀態標籤與輪播語錄，建立品牌語氣。
- **背景音樂與自傳 Modal**：右下角的音樂唱片控制與文件圖示按鈕，可即時播放/停止 BGM，或開啟自傳內容。
- **Projects Banner Stack**：採用 sticky card 形式呈現五個代表作品，包含技術堆疊、角色與成果。
- **模組化資料**：專案、引言等內容集中在資料檔，可快速更新或新增。

## 🛠 技術堆疊

- **Application**：React 19、Vite、React DOM、PropTypes
- **Styling & Motion**：SCSS modules、GSAP、Intersection Observer
- **Tooling**：ESLint (React Hooks + React Refresh)、Vite dev server、NPM scripts

## 🚀 快速開始

```bash
# 1. 安裝依賴
npm install

# 2. 開發模式 (http://localhost:5173)
npm run dev

# 3. 建置產出 / 預覽
npm run build
npm run preview

# 4. 稽核程式碼風格
npm run lint
```

> 建議使用 Node 18+ 環境，可使用 `nvm` 或 `fnm` 管理版本。

## 📂 目錄導覽

```
yao-page/
├── public/
│   └── audio/remember-you.mp3
├── src/
│   ├── App.jsx                # 主結構、滾動監聽與區塊組裝
│   ├── components/            # Navbar、QuoteRotator、SelfIntroModal、BackgroundAudioControl
│   ├── hooks/                 # 自訂 hook（如 useHoverLift、useCareerTrain）
│   ├── pages/                 # Home / About / Project 三個主要頁面
│   ├── data/quotes.js         # 輪播語錄資料
│   └── styles/                # SCSS (base, components, variables)
└── package.json
```

- **內容調整**：`src/pages/ProjectPage.jsx`、`src/data/quotes.js`、`src/pages/HomePage.jsx` 為主要更新入口。
- **樣式**：所有元件樣式集中在 `src/styles/components/`。

## 🧱 自訂與擴充建議

1. **新增/調整專案**：於 `ProjectPage.jsx` 的 `projects` 陣列插入新物件即可，會自動套用 sticky banner 風格。
2. **更新自傳或按鈕圖示**：修改 `src/components/SelfIntroModal.jsx` 或替換 `src/IMG/document.png`。
3. **整合社群 / CTA**：Navbar CTA 目前顯示 Email，可依需求改成連結或表單觸發。

## 📦 部署

1. `npm run build` 產出靜態資源在 `dist/`
2. 將 `dist` 上傳至任一靜態服務（Netlify、Vercel、GitHub Pages 或自架 Nginx）
3. 需自訂 audio / 圖片等檔案時，記得同步更新 `public` 與 `src/IMG`

---

歡迎依照個人履歷或面試需求調整文案、配色與互動，若需要協助擴充新區塊或串接後端服務，再告訴我 🙌
