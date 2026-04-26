export const articleCategories = [
  "经验分享",
  "校园社区",
  "课程学习",
  "竞赛总结",
  "产品实践",
  "社区产品",
  "技术交流",
];

export const articleTags = [
  "项目展示",
  "竞赛交流",
  "学习交流",
  "竞赛经验",
  "校园项目",
  "个人主页",
  "React",
  "Vite",
  "Tailwind CSS",
  "前端工程",
  "作品集",
  "答辩展示",
];

export const articles = [
  {
    id: "article-1",
    title: "如何把课程项目整理成一份能展示的校园作品集",
    excerpt:
      "从页面结构、内容组织到视觉表达，整理一套适合校园开发者展示课程成果、竞赛经历与项目能力的方法。",
    author: "小顾同学",
    role: "前端开发",
    readTime: "8 分钟",
    tag: "项目展示",
    tags: ["项目展示", "作品集", "React"],
    category: "经验分享",
    publishedAt: "2026-04-12",
    views: 4280,
    likes: 356,
    comments: 24,
    recommended: true,
    content: `# 如何把课程项目整理成一份能展示的校园作品集

很多同学做完课程项目后，代码放在仓库里，答辩结束就结束了。更可持续的做法，是把项目整理成一份可以长期展示的作品集。

## 整理思路

建议从三个层面来整理：

1. 先讲项目解决了什么问题
2. 再讲你负责了哪些设计和开发工作
3. 最后补充结果、数据和复盘

## 页面结构建议

\`\`\`jsx
<ProjectCaseStudy>
  <ProjectSummary />
  <FeatureHighlights />
  <TechnicalReview />
</ProjectCaseStudy>
\`\`\`

## 写作建议

如果页面里只有截图和一堆技术名词，读者很难快速理解你的价值。相反，一段清晰的背景说明、一个稳定的功能列表、再加上真实的项目取舍，会让整篇内容更可信。
`,
  },
  {
    id: "article-2",
    title: "竞赛组队前，校园社区需要先解决哪些信息问题",
    excerpt:
      "围绕竞赛方向、成员画像和项目能力，分析校园技术社区在组队场景中的真实需求。",
    author: "风起南信",
    role: "产品策划",
    readTime: "6 分钟",
    tag: "竞赛交流",
    tags: ["竞赛交流", "校园社区", "产品实践"],
    category: "校园社区",
    publishedAt: "2026-04-10",
    views: 3612,
    likes: 281,
    comments: 19,
    recommended: true,
    content: `# 竞赛组队前，校园社区需要先解决哪些信息问题

组队困难很多时候不是因为“没有人”，而是因为信息没有被组织好。

## 大家真正关心什么

- 对方擅长什么技术
- 是否有相似方向的项目经验
- 当前时间安排是否匹配
- 想做产品、算法还是工程实现

## 为什么需要结构化信息

如果这些信息都散落在聊天记录和群公告里，协作成本会很高。一个好的校园社区，应该把这些信息转成结构化的展示内容。
`,
  },
  {
    id: "article-3",
    title: "前端课程笔记怎么沉淀，后面做项目和面试才真正有用",
    excerpt:
      "分享把平时课堂笔记整理成长期知识库的过程，同时兼顾学习、面试和项目落地。",
    author: "南信云观测员",
    role: "数据可视化",
    readTime: "10 分钟",
    tag: "学习交流",
    tags: ["学习交流", "前端工程", "Vite"],
    category: "课程学习",
    publishedAt: "2026-04-08",
    views: 5190,
    likes: 402,
    comments: 31,
    recommended: false,
    content: `# 前端课程笔记怎么沉淀，后面做项目和面试才真正有用

笔记真正的价值不在“记下来”，而在“之后能不能再用上”。

## 沉淀方式

- 用自己的话重写关键概念
- 配一段最小可运行示例
- 记录这个知识点在真实项目里怎么用

## 一个简单示例

\`\`\`js
const notes = lessons.map((lesson) => ({
  title: lesson.title,
  takeaway: lesson.takeaway,
  example: lesson.example,
}));
\`\`\`
`,
  },
  {
    id: "article-4",
    title: "挑战杯答辩页面应该怎么排信息，老师和评委才看得更顺",
    excerpt:
      "总结竞赛答辩 PPT 和展示页面中的信息组织经验，重点解决内容堆叠和视觉混乱问题。",
    author: "姜栩",
    role: "视觉设计",
    readTime: "5 分钟",
    tag: "竞赛经验",
    tags: ["竞赛经验", "答辩展示", "Tailwind CSS"],
    category: "竞赛总结",
    publishedAt: "2026-04-06",
    views: 2974,
    likes: 214,
    comments: 12,
    recommended: false,
    content: `# 挑战杯答辩页面应该怎么排信息

答辩页面最怕的不是内容少，而是重点不清楚。

## 每一屏只承担一个问题

- 你解决什么问题
- 你怎么做
- 你做出了什么结果

页面排版服务的是表达效率，不是炫技。
`,
  },
  {
    id: "article-5",
    title: "校园服务类项目首页怎么写，才能让同学一眼看懂它是做什么的",
    excerpt:
      "从标题、摘要到按钮文案，拆解面向学生用户的项目首页应该如何清晰地表达价值。",
    author: "顾言",
    role: "网络工程",
    readTime: "7 分钟",
    tag: "校园项目",
    tags: ["校园项目", "产品实践", "项目展示"],
    category: "产品实践",
    publishedAt: "2026-04-04",
    views: 2230,
    likes: 176,
    comments: 15,
    recommended: false,
    content: `# 校园服务类项目首页怎么写

一个好的首页应该尽快回答三个问题：

1. 这是做什么的
2. 对谁有用
3. 现在能做什么

## 文案示例

\`\`\`text
面向校园团队的项目协作平台
更快找到队友，更清楚展示项目
\`\`\`
`,
  },
  {
    id: "article-6",
    title: "个人主页不只是头像简介，它应该成为你在校园社区里的长期名片",
    excerpt:
      "个人主页可以承载你的项目、文章、竞赛记录和成长轨迹，而不只是简单的个人资料页。",
    author: "小顾同学",
    role: "前端开发",
    readTime: "9 分钟",
    tag: "个人主页",
    tags: ["个人主页", "社区产品", "React"],
    category: "社区产品",
    publishedAt: "2026-04-02",
    views: 3348,
    likes: 245,
    comments: 21,
    recommended: true,
    content: `# 个人主页不只是头像简介

一个好的个人主页，不只是“我是谁”，还应该回答：

- 我做过什么
- 我擅长什么
- 我现在关注什么

    ## 适合展示的内容

- 项目经历
- 文章输出
- 竞赛记录
- 技能标签
`,
  },
  {
    id: "article-7",
    title: "技术交流帖应该怎么写，别人才更愿意认真回复",
    excerpt:
      "从问题描述、环境信息、复现步骤到期望结果，整理一套更适合校园技术社区的交流发帖方式。",
    author: "程远",
    role: "全栈开发",
    readTime: "6 分钟",
    tag: "技术交流",
    tags: ["技术交流", "前端工程", "React"],
    category: "技术交流",
    publishedAt: "2026-04-14",
    views: 1986,
    likes: 143,
    comments: 17,
    recommended: false,
    content: `# 技术交流帖应该怎么写

很多交流帖没人回复，不一定是问题太难，而是信息不够完整。

## 建议至少写清楚这些内容

- 你在做什么
- 你遇到了什么问题
- 你已经尝试过哪些方案
- 你期望的结果是什么

## 一个简化模板

\`\`\`md
### 场景
### 问题
### 已尝试方案
### 期望结果
\`\`\`

当问题描述足够具体时，社区里的同学和老师通常更愿意认真参与讨论。
`,
  },
];
