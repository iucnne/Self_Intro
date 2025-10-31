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
    detail: {
      intro: [
        '生活不是待辦清單，而是被許多日常儀式串起來的節奏：早餐的咖啡、陪家人散步、跟伴侶討論小旅行計畫。',
        '我盡量把專案的規劃能力帶進生活，把夢想拆成可執行的小節點，讓每一段關係都持續加溫。',
      ],
      highlights: [
        {
          title: '日常儀式',
          items: ['晨間例行：咖啡、閱讀、寫下三件期待的事。', '每週固定家族聚會，聊工作、聊生活。'],
        },
        {
          title: '關係經營',
          items: ['與伴侶共筆旅遊筆記，輪流規劃假日行程。', '朋友聚會固定安排「成果分享」環節，彼此打氣。'],
        },
      ],
    },
  },
  {
    key: 'sport',
    title: '運動',
    subtitle: '鍛鍊鑄成扛著困難前行的我',
    body: '喜歡排球，享受在球場揮灑汗水與心無旁騖的自己。',
    detail: {
      intro: [
        '排球訓練帶給我的不只是肌肉記憶，那種在場上喊「我來」的瞬間，也提醒我在工作上要勇於承擔責任。',
        '近年加入重量訓練與瑜伽，讓身體在爆發力與柔軟度之間找到平衡。這些訓練也轉化成面對壓力的耐受度。',
      ],
      highlights: [
        {
          title: '每週例行',
          items: ['週一、週四：晚間排球團練。', '週六：重量訓練＋伸展，調整核心穩定度。'],
        },
        {
          title: '運動心得',
          items: ['深蹲與硬舉讓我的膝蓋在球場上更有支撐力。', '團隊競技教會我溝通與信任的重要性。'],
        },
      ],
    },
  },
  {
    key: 'music',
    title: '音樂',
    subtitle: '音樂，是人生的必需品',
    body: 'Lo-fi當作寫程式的節奏與每日結束的心靈療癒，HipHop 帶給我源源不絕的動力。',
    detail: {
      intro: [
        '寫程式時一定會播放 Lo-fi 或 Jazzhop，讓大腦進入專注但放鬆的狀態；收工時則用 HipHop 或 City Pop 轉換節奏。',
        '我習慣依照心情建立歌單，也會在社群分享當週循環的歌曲，音樂讓每個時刻有了不同的顏色。',
      ],
      highlights: [
        {
          title: '常駐歌單',
          items: ['Focus Flow：Lo-fi × Jazzhop × Instrumental。', 'Night Drive：City Pop、Neo-Soul 調和旅程氛圍。'],
        },
        {
          title: '音樂筆記',
          items: ['每個月會整理一份「本月三首」寄給朋友互相交換。', '研究歌詞結構和節奏，靈感有時會延伸到 UI 動效。'],
        },
      ],
    },
  },
  {
    key: 'travel',
    title: '旅遊',
    subtitle: '品嚐每座城市不同的味道',
    body: '旅行時，放下快節奏生活，沈浸在當地的人事物。',
    detail: {
      intro: [
        '旅行對我來說是一種重置：把注意力放在陌生的街景與氣味，重新感受自己在世界裡的位置。',
        '我喜歡用 Google Map 記錄有趣的巷弄與咖啡館，也會寫小短文記下那些與陌生人的片刻對話。',
      ],
      highlights: [
        {
          title: '旅行步調',
          items: ['抵達第一天會先安排漫步城市，記錄想重訪的地點。', '把景點拆成主題，例如建築、書店、巷弄咖啡。'],
        },
        {
          title: '記錄方式',
          items: ['旅程結束前一天寫下當週的「top 3 moments」。', '用相機拍攝城市的光影變化，彷彿收藏時間。'],
        },
      ],
    },
  },
]
