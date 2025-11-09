export const PROJECTS = [
  {
    title: '個人介紹網站（當前專案）',
    role: 'Frontend Engineer',
    tools: 'React · Vite · SCSS · Intersection Observer',
    description:
      '這個專題是我將成長、學習與靈感整理成冊的地方，透過專案記錄每一次的突破，也會不定期更新生活的觀察與新的技術軌跡，陪自己檢視前進的步伐。',
    tags: ['Sticky Navbar', '互動式自傳', 'IntersectionObserver'],
    previewClass: 'portfolio',
    tone: 'linear-gradient(135deg, #111827, #312e81)',
    url: 'https://github.com/iucnne/Self_Intro',
  },
  {
    title: 'Life Kit',
    role: 'Frontend Side Project',
    tools: 'React · Vite · JavaScript · LocalStorage',
    description:
      '這個專題聚焦於打造一套結合待辦與行事曆的生活管理面板，讓日常節奏、行程安排與工作追蹤統一呈現在同一頁面，也作為前端工程的練習。',
    tags: ['React Hooks', 'LocalStorage 同步', '快捷鍵 UX'],
    previewClass: 'todo',
    tone: 'linear-gradient(135deg, #1f2937, #4338ca)',
    url: 'https://github.com/iucnne/Life_Kit',
  },
  {
    title: 'MAS (Makeup Attack System)',
    role: 'Research Developer',
    tools: 'JavaScript · HTML · CSS · Python · Flask API · FaceNet',
    description:
      'Makeup Attack System (MAS) 是我們以 Flask 與 PyTorch 打造的人臉辨識攻防平台，聚焦化妝偽裝繞過情境。',
    tags: ['Makeup Attack System', 'GA 對抗樣本', 'FaceNet / MediaPipe'],
    previewClass: 'facenet',
    tone: 'linear-gradient(135deg, #312e81, #0f172a)',
    detail: {
      intro: [
        '平台分成 Punch、Generate、Makeup、Settings 四個頁面，覆蓋從人臉註冊、辨識到攻擊情境的核心流程。我們依照實際演練需求拆分模組，讓評審或合作單位能快速理解系統邏輯並重現操作。',
        'Punch 頁面負責即時打卡與新使用者註冊；Generate 讓攻擊者與受害者以拖曳方式配對並啟動 GA 化妝攻擊；Makeup 監控多次抓拍後的攻擊成功率；Settings 則集中相機、參數與資料快照管理。整體操作導向「先註冊、再生成、最後驗證」的攻防流程。',
        '在架構上，我們以 Flask Template、Bootstrap、jQuery 組成前端互動介面，串接 MediaPipe Tasks、Chart.js 與 LeaderLine 呈現地標與趨勢。後端以 Flask Blueprint 分離頁面與 REST API，`backend/components` 裡的 Detector、FaceNet、Makeup 與 Who 模組負責偵測、特徵轉換、化妝攻擊與分類；`shared/values.py` 集中環境設定與 GA 參數，`data/` 則同步影像、嵌入與模型快照。',
      ],
      sections: [
        {
          type: 'text',
          title: '分享',
          paragraphs: [
            '這個專題讓我們學到如何在追求研究成果與落地體驗間取得平衡：一方面要確保攻擊流程嚴謹可靠，另一方面也要讓實測者能快速部署環境並理解結果。我們花了不少時間整理 README 與操作手冊，確保每位成員都能輪流演示與維護系統。',
            '團隊成員分工明確：有人專注於 PyTorch 與 GA 模組，有人負責 Flask 介面與可視化，也有人整理資料集與攻擊步驟。多次迭代下來，我們對 AI 安全攻防與跨領域協作都有更深的體會，也期待未來能延伸出更多防禦實驗。',
          ],
        },
        {
          type: 'list',
          title: 'README · 功能亮點',
          items: [
            '即時人臉打卡／辨識：瀏覽器串流攝影機，透過 `/api/predict` 完成打卡與註冊流程。',
            '可視化對抗生成：在「Generate」頁面拖曳攻擊者／受害者，伺服器以 GA 搜尋化妝參數並輸出對抗樣本。',
            '攻擊成功率追蹤：「Makeup」頁面可重複抓拍並繪製攻擊者／受害者機率趨勢。',
            '使用者與資料集管理：後台 API 支援帳號 CRUD、影像／嵌入清理、模型快照管理。',
            '高可調參數：GA、分類器訓練等超參數可透過設定頁面或 `/api/runtime` 動態調整。',
            'GPU/CPU 自適應：自動偵測 CUDA、支援 Cupy 加速；若無 GPU 仍可在 CPU 上運作多數流程。',
          ],
        },
        {
          type: 'dl',
          title: 'README · 系統架構',
          items: [
            {
              term: '前端 (UI)',
              description:
                'Flask Templates + Bootstrap + jQuery，搭配 MediaPipe Tasks、Chart.js、LeaderLine 完成互動式操作與可視化。',
            },
            {
              term: '後端 (API)',
              description: 'Flask Blueprint (`frontend/routes/api.py`) 提供 REST 介面，`run.py` 啟動整體服務並管理靜態資源。',
            },
            {
              term: '服務核心',
              description:
                '`backend/components`：Detector (MediaPipe FaceMesh) 與 FaceNet 產生嵌入；Who 管理資料集與分類；Makeup 結合 BiSeNet 與 GA 生成化妝對抗樣本。',
            },
            {
              term: '共用設定',
              description: '`shared/values.py` 定義環境變數、公開路徑白名單、化妝調色盤與 GA 參數。',
            },
            {
              term: '資料與模型層',
              description: '`data/` 儲存影像、嵌入、模型與例圖；`account/` 及 `recycle/` 協助管理使用者與回收站。',
            },
          ],
        },
        {
          type: 'code',
          title: 'README · 目錄導覽',
          language: 'text',
          content: `mas/
├── run.py
├── backend/
│   ├── main.py
│   ├── components/
│   ├── libs/yakhyo/
│   └── utils/
├── frontend/
│   ├── main.py
│   ├── routes/
│   ├── templates/
│   └── static/
├── shared/values.py
├── account/*.json
├── data/
│   ├── images/<user>/
│   ├── embeddings/<user>/
│   ├── models/<timestamp>/
│   └── examples/<user>/
├── scripts.py
└── environment.yml`,
        },
      ],
      awards: [
        {
          title: '2025 程式設計暨資訊及 AI 應用競賽｜創新實作專業組 佳作',
          organization: '國立宜蘭大學',
          description: '以 MAS 人臉攻防平台展示完整攻擊流程與實測成果，團隊獲得創新實作專業組佳作。',
          image: '/images/facenet/award-ai-application.png',
          imageAlt: '2025 程式設計暨資訊及 AI 應用競賽 佳作獎狀',
        },
        {
          title: '2025 台灣雲端與服務計算研討會｜最佳論文',
          organization: '台灣雲端與服務計算協會',
          description: '我們在研討會發表化妝對抗生成的攻防研究成果與安全建議，榮獲最佳論文獎。',
          image: '/images/facenet/award-cloud-computing.png',
          imageAlt: '2025 台灣雲端與服務計算研討會 最佳論文獎狀',
        },
      ],
      contact:
        '若想深入了解 MAS 或安排攻防測試示範，歡迎與我們聯絡，我們可以提供完整 README、部署腳本與操作教學。',
    },
  },
  {
    title: '台股即時與歷史資訊查詢',
    role: 'Backend & Frontend Developer',
    tools: 'Python · Django · twstock · SQLite · Bootstrap · jQuery · Highcharts',
    description:
      '這個專題聚焦於打造一套以 Python 驅動的股市分析流程，涵蓋行情資料蒐集、特徵整理與策略測試。',
    tags: ['背景資料抓取', 'DRF 查詢 / 篩選', 'Highcharts RWD Dashboard'],
    previewClass: 'stocks',
    tone: 'linear-gradient(135deg, #0f172a, #134e4a)',
    url: 'https://github.com/iucnne/TW_StockSearch',
  },
  {
    title: '智慧圖書館系統',
    role: 'Fullstack Team Work',
    tools: 'React · Node.js · Express · MongoDB · Tailwind CSS',
    description:
      '這個專題聚焦於構建一套圖書館管理系統，統整館藏維護、借還流程與使用者紀錄，透過逐步完善流程與介面設計，讓圖書服務的運作節奏在同一平台上清晰呈現。',
    tags: ['RESTful API', '借閱預約流程', 'Scrum 協作'],
    previewClass: 'library',
    tone: 'linear-gradient(135deg, #0f172a, #4c1d95)',
    url: 'https://github.com/iucnne/LibrarySystem',
  },
]
