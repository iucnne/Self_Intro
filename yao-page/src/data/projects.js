export const PROJECTS = [
  {
    title: '個人介紹網站（當前專案）',
    role: 'Frontend Engineer',
    tools: 'React · Vite · SCSS · Intersection Observer',
    description:
      '打造自我介紹網站，整合 sticky navbar、背景音樂控制、引言輪播與自傳 modal，透過 IntersectionObserver 追蹤區塊讓導覽隨滾動同步。',
    tags: ['Sticky Navbar', '互動式自傳', 'IntersectionObserver'],
    previewClass: 'portfolio',
    tone: 'linear-gradient(135deg, #111827, #312e81)',
  },
  {
    title: 'Todo App',
    role: 'Frontend Side Project',
    tools: 'React · Vite · JavaScript · LocalStorage',
    description:
      '開發具新增、刪除、完成打勾與優先排序的待辦管理 App，使用 React Hooks 管理狀態與 LocalStorage，同時設計快捷鍵與動態樣式優化 UX。',
    tags: ['React Hooks', 'LocalStorage 同步', '快捷鍵 UX'],
    previewClass: 'todo',
    tone: 'linear-gradient(135deg, #1f2937, #4338ca)',
  },
  {
    title: 'FaceNet Security Lab',
    role: 'Research Developer',
    tools: 'JavaScript · HTML · CSS · Python · Flask API · FaceNet',
    description:
      '自學前端與深度學習技術，完成 FaceNet embedding 臉部辨識系統並實作白箱攻擊實驗，證明基因演算法在模型繞過的可行性，最後交付 Demo 與技術報告。',
    tags: ['自學全棧能力', 'FaceNet embedding', '白箱攻擊 / 基因演算法'],
    previewClass: 'facenet',
    tone: 'linear-gradient(135deg, #312e81, #0f172a)',
  },
  {
    title: '台股即時與歷史資訊查詢',
    role: 'Backend & Frontend Developer',
    tools: 'Python · Django · twstock · SQLite · Bootstrap · jQuery · Highcharts',
    description:
      '自研後端 API 串接 twstock 與 SQLite，啟動背景執行緒抓多檔個股資料，前端以 Bootstrap + jQuery AJAX + Highcharts 呈現即時/KD 指標並完成團隊 Demo。',
    tags: ['背景資料抓取', 'DRF 查詢 / 篩選', 'Highcharts RWD Dashboard'],
    previewClass: 'stocks',
    tone: 'linear-gradient(135deg, #0f172a, #134e4a)',
  },
  {
    title: '智慧圖書館系統',
    role: 'Fullstack Team Lead',
    tools: 'React · Node.js · Express · MongoDB · Tailwind CSS',
    description:
      '帶領 3 人團隊打造館藏/借閱/預約管理平台，設計 RESTful API 與 JWT 權限，前端提供進階搜尋、到期提醒與儀表板，採 Scrum 流程交付 Demo。',
    tags: ['RESTful API', '借閱預約流程', 'Scrum 協作'],
    previewClass: 'library',
    tone: 'linear-gradient(135deg, #0f172a, #4c1d95)',
  },
]
