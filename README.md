# Yao Portfolio

## Project Overview

沉浸式單頁作品集網站，記錄我在前端領域的經歷、生活樣貌與代表專案。整體由 React + Vite 驅動，透過模組化 SCSS 與 GSAP / Intersection Observer 讓 Hero、About 卡片與 Projects sticky stack 都維持流暢的互動感。網站同時具備背景音樂、自傳 Modal、語錄輪播等元素，適合作為履歷補充或 Demo 頁面。

## Tech Stack

- **Frontend**：React 19、Vite、React DOM
- **Language**：JavaScript（搭配 PropTypes）
- **Styles & Motion**：SCSS（base/components）、GSAP、Intersection Observer（封裝成 `useSectionObserver`）
- **Tooling**：ESLint（React Hooks + Refresh 插件）、Vite Dev Server、NPM Scripts

## Key Features

- **Sticky Capsule Navbar**：導覽列會依捲動即時高亮目前區段，點擊可平滑捲動至指定區塊。
- **Hero Section**：頭像、狀態徽章與「Building Playful Web」文字動畫，包含背景音樂控制鈕。
- **Quote Rotator**：首頁自動輪播激勵語錄，透過資料檔可隨時新增。
- **About Lifestyle Cards**：生活 / 運動 / 音樂 / 旅遊四張卡片，點擊可開啟 Life Modal 檢視細節。
- **Projects Sticky Cards**：採 sticky stack 排版，展示每個專案的角色、技術與連結；小螢幕會改為單欄但保留 hover 動畫。
- **自傳 FAB + Modal**：右下角文件圖示可呼叫自傳面板，搭配 keyframe 與 hook 做進出場動態。

## Getting Started

```bash
# 1. 取得專案
git clone https://github.com/iucnne/Self_Intro.git
cd Self_Intro/yao-page

# 2. 安裝依賴
npm install

# 3. 開發 / 預覽
npm run dev      # http://localhost:5173
npm run build
npm run preview

# 4. 稽核程式碼風格
npm run lint
```

> 建議使用 Node 18+，可搭配 `nvm` 或 `fnm` 管理版本。

## Project Structure

```
src/
├── components/            # Navbar、QuoteRotator、BackgroundAudioControl、SelfIntroModal…
├── data/                  # home/about/projects/quotes 等內容資料
├── hooks/                 # useSectionObserver、useHoverLift、useModal、useBackgroundAudio…
├── pages/                 # HomePage / AboutPage / ProjectPage
├── styles/
│   ├── base/_base.scss    # 全站背景與 layout
│   └── components/        # navbar、hero、sections、modal 等細部樣式
└── App.jsx                # 組裝頁面區塊，註冊滾動觀察
```

## Development Notes / RWD & Animation

- **RWD**：採 mobile-first + clamp padding；`.page-stack` / `.app-shell` 控制全站最大寬度與左右留白，About / Project / Hero 皆在 `_sections.scss` 中定義不同 breakpoints。
- **Hero**：使用 CSS grid / flex 組合，搭配 GSAP/Intersection Observer 控制 badges 與標題的進場位置。
- **Projects sticky cards**：桌機維持 sticky + hover 動畫，小螢幕僅調整尺寸與 gap，動畫屬性保留。
- **Modals**：`useModalTransition` 負責 modal mount/unmount，SCSS 透過 backdrop + panel 動畫營造層次。

## Future Plans / TODO

- [ ] 新增更多 section（Timeline、Skills、Contact 表單等）
- [ ] Dark mode / Theme 切換
- [ ] 多語系支援（中文 / English）
- [ ] Projects 區塊加入篩選 / Tag 互動

---

喜歡這份作品集或有合作需求，歡迎擴充內容、調整配色並建立自己的版本，也可以在 Issues 分享建議 🙌
