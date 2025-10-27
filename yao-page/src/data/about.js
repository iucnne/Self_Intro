export const CAREER_STAGES = [
  { key: 'intern', label: '前端實習生（Now）', status: 'current' },
  { key: 'frontend', label: '前端工程師' },
  { key: 'jrFullstack', label: '初階全端工程師' },
  { key: 'fullstack', label: '全端工程師' },
  { key: 'seniorFullstack', label: '資深全端工程師' },
]

export const STAGE_DETAILS = {
  intern: {
    title: '前端實習生（Now）',
    bullets: [
      '熟悉 React、Vite、CSS Modules，能快速重現設計稿並維持元件化思維。',
      '擅長整合 REST API、製作骨架屏與 Loading，保持資料載入體驗順暢。',
      '邊做邊寫筆記，將常用的動畫與 hooks 抽成模組。',
    ],
  },
  frontend: {
    title: '前端工程師',
    bullets: [
      '獨立負責專案切版、狀態管理與 API 串接，掌握測試與效能監控。',
      '開始規劃元件庫，與設計與後端協作，讓畫面與程式保持一致。',
    ],
  },
  jrFullstack: {
    title: '初階全端工程師',
    bullets: [
      '能搭建 Next.js/Node API、操作資料庫與部署監控，理解資料流。',
      '整合 CI/CD，讓互動與資料回饋更緊密。',
    ],
  },
  fullstack: {
    title: '全端工程師',
    bullets: [
      '協調系統架構、資料設計與前端體驗，負責產品交付品質。',
      '依需求挑選技術堆疊，帶領團隊推進開發。',
    ],
  },
  seniorFullstack: {
    title: '資深全端工程師',
    bullets: [
      '規劃架構演進、技術策略與人員培育，維持團隊產能與品質。',
      '把經驗轉化成文件與教學，讓新進開發者可快速上手。',
    ],
  },
}

export const LIFE_TILES = [
  {
    key: 'lifestyle',
    title: '生活',
    subtitle: '瑣碎的日常堆積成完整的生活',
    body: '家人、伴侶、朋友、自己，我的生活由這四大主角群共同主演！',
  },
  {
    key: 'sport',
    title: '運動',
    subtitle: '鍛鍊鑄成扛著困難前行的我',
    body: '喜歡排球，享受在球場揮灑汗水與心無旁騖的自己。',
  },
  {
    key: 'music',
    title: '音樂',
    subtitle: '音樂，是人生的必需品',
    body: 'Lo-fi當作寫程式的節奏與每日結束的心靈療癒，HipHop 帶給我源源不絕的動力。',
  },
  {
    key: 'travel',
    title: '旅遊',
    subtitle: '品嚐每座城市不同的味道',
    body: '旅行時，放下快節奏生活，沈浸在當地的人事物。',
  },
]
