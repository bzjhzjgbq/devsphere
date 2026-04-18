export const projectCategories = [
  "全部",
  "Web 应用",
  "AI 工具",
  "效率工具",
  "开源组件",
  "移动应用",
];

export const projectStatuses = ["全部", "开发中", "已上线", "维护中", "暂停更新"];

export const projects = [
  {
    id: "nebula-note",
    name: "Nebula Note",
    category: "效率工具",
    status: "已上线",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    summary: "面向开发者团队的知识协作平台，支持版本化文档、片段收藏与 AI 搜索。",
    content:
      "Nebula Note 是一个强调知识沉淀和团队协作的效率工具，围绕文档组织、技术方案复盘与跨项目搜索体验进行了专门设计。当前版本支持文档分层管理、代码片段归档、AI 语义检索以及团队评论协作。",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    highlights: [
      "支持代码片段级别的知识收藏与引用",
      "提供 AI 驱动的全文语义检索",
      "支持团队空间、权限角色与协作评论",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    ],
    author: {
      name: "Lin Yue",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
      bio: "全栈开发者，专注协作工具与 AI 产品设计。",
    },
    publishedAt: "2026-03-12",
    likes: 582,
    favorites: 214,
    views: 8921,
    github: "https://github.com/example/nebula-note",
    demo: "https://demo.example.com/nebula-note",
    comments: [
      {
        id: 1,
        user: "CodeWalker",
        content: "搜索体验做得很顺手，希望后续支持私有知识库同步。",
        time: "2026-04-10 14:23",
      },
      {
        id: 2,
        user: "Mika",
        content: "项目结构清晰，文档展示也很舒服。",
        time: "2026-04-12 20:07",
      },
    ],
    featured: true,
  },
  {
    id: "signal-ui",
    name: "Signal UI",
    category: "开源组件",
    status: "维护中",
    cover:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    summary: "为技术社区产品打造的组件库，提供高一致性的面板、数据卡片与表单组件。",
    content:
      "Signal UI 聚焦技术社区、SaaS 平台和后台系统，提供大量高复用的组件，并内建设计令牌、动效规范和常见布局模板。",
    techStack: ["React", "Tailwind CSS", "Storybook"],
    highlights: [
      "面向数据密集型界面的视觉优化",
      "内置社区场景常见模块模板",
      "支持组件文档和设计令牌同步",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    ],
    author: {
      name: "Aster Chen",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      bio: "前端工程师，喜欢做组件系统和体验设计。",
    },
    publishedAt: "2026-02-28",
    likes: 416,
    favorites: 163,
    views: 6430,
    github: "https://github.com/example/signal-ui",
    demo: "https://demo.example.com/signal-ui",
    comments: [
      {
        id: 1,
        user: "Nova",
        content: "组件视觉统一度很高，挺适合社区产品。",
        time: "2026-04-08 09:10",
      },
    ],
    featured: true,
  },
  {
    id: "craft-flow",
    name: "Craft Flow",
    category: "Web 应用",
    status: "开发中",
    cover:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    summary: "面向独立开发团队的轻量项目协同看板，强调快速分工和迭代节奏可视化。",
    content:
      "Craft Flow 关注轻量项目协同，内置迭代看板、任务依赖、里程碑概览和日报自动生成，帮助小团队快速对齐执行状态。",
    techStack: ["React", "Supabase", "Tailwind CSS"],
    highlights: [
      "轻量任务看板与依赖关系视图",
      "支持节奏追踪和里程碑分析",
      "移动端可快速处理待办",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    ],
    author: {
      name: "Echo Xu",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
      bio: "产品工程师，关注团队协同与流程体验。",
    },
    publishedAt: "2026-04-01",
    likes: 201,
    favorites: 88,
    views: 3198,
    github: "https://github.com/example/craft-flow",
    demo: "https://demo.example.com/craft-flow",
    comments: [],
    featured: false,
  },
  {
    id: "vision-lab",
    name: "Vision Lab",
    category: "AI 工具",
    status: "已上线",
    cover:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    summary: "帮助开发者快速测试图像理解与生成工作流的 AI 实验平台。",
    content:
      "Vision Lab 用于快速搭建图像相关 AI 工作流，支持数据上传、Prompt 测试、结果对比和实验记录，适合做产品验证与内部演示。",
    techStack: ["React", "Python", "FastAPI", "Redis"],
    highlights: [
      "可视化 AI 实验流程配置",
      "支持多轮 Prompt 对比",
      "适合团队内部快速原型验证",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    author: {
      name: "Serein",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      bio: "AI 应用开发者，长期关注生成式交互产品。",
    },
    publishedAt: "2026-03-21",
    likes: 733,
    favorites: 341,
    views: 12310,
    github: "https://github.com/example/vision-lab",
    demo: "https://demo.example.com/vision-lab",
    comments: [
      {
        id: 1,
        user: "Aki",
        content: "很适合拿来做内部 demo 管理。",
        time: "2026-04-15 18:32",
      },
    ],
    featured: true,
  },
  {
    id: "pulse-mobile",
    name: "Pulse Mobile",
    category: "移动应用",
    status: "暂停更新",
    cover:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    summary: "一个面向技术社区用户的移动端项目追踪应用，方便随时浏览动态与收藏内容。",
    content:
      "Pulse Mobile 将社区项目、文章和作者动态整合到移动端体验中，支持订阅、收藏、消息提醒和轻量互动。",
    techStack: ["React Native", "Expo", "Firebase"],
    highlights: [
      "轻量订阅和通知系统",
      "适配移动端浏览和收藏操作",
      "支持项目状态跟踪",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    ],
    author: {
      name: "Nina Gu",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      bio: "移动端开发者，喜欢做社区产品和效率工具。",
    },
    publishedAt: "2026-01-14",
    likes: 154,
    favorites: 57,
    views: 2408,
    github: "https://github.com/example/pulse-mobile",
    demo: "https://demo.example.com/pulse-mobile",
    comments: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
