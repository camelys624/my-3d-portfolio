import {
  mobile,
  backend,
  creator,
  web,
  beyondsoft,
  kuiniu,
  zhongzai,
  carrent,
  jobit,
  tripguide
} from '../assets'

export const selfEvaluation = [
  ['大家好，我是', '小杨'],
  '我是一个前端开发者',
  '我擅长开发管理系统，用户界面和网络应用程序'
]

export const navLinks = [
  {
    id: 'about',
    title: '关于'
  },
  {
    id: 'work',
    title: '工作经历'
  },
  {
    id: 'contact',
    title: '联系我'
  }
]

const services = [
  {
    title: '前端开发',
    icon: web
  },
  {
    title: '性能优化',
    icon: mobile
  },
  {
    title: '算法',
    icon: backend
  },
  {
    title: 'UI 实现',
    icon: creator
  }
]

const experiences = [
  {
    title: '前端开发工程师',
    company_name: '重庆夔牛',
    icon: kuiniu,
    iconBg: '#383E56',
    date: '2018/7 - 2019/2',
    points: [
      '使用 Jquery、HTML、CSS 和 JavaScript 开发内部项目',
      '与项目经理、 UI 设计师、后端开发工程师和前端开发前端开发工程师等团队成员合作开发高质量的项目',
      '使用 git 管理项目代码'
    ]
  },
  {
    title: '前端开发工程师',
    company_name: '中再云图',
    icon: zhongzai,
    iconBg: '#E6DEDD',
    date: '2019/3 - 2019/10',
    points: [
      '使用 VUE 与其它工具开发内部项目',
      '与项目经理、 UI 设计师、后端开发工程师和前端开发前端开发工程师等团队成员合作开发高质量的项目',
      '编写自定义 VUE 组件',
      '使用 git 管理项目代码'
    ]
  },
  {
    title: '前端开发工程师',
    company_name: '博彦科技',
    icon: beyondsoft,
    iconBg: '#383E56',
    date: '2019/11 - 至今',
    points: [
      '使用 VUE 与其它工具开发内部项目',
      '与项目经理、 UI 设计师、后端开发工程师和前端开发前端开发工程师等团队成员合作开发高质量的项目',
      '构建前端项目架构，编写自定义 VUE 组件以及编写测试用例',
      '代码审查，与前端同事合作解决棘手问题',
      '使用 git 管理项目代码'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      "他好犀利啊",
    name: '蘸糖',
    designation: '跑堂',
    company: '同福客栈',
    image: 'https://i04piccdn.sogoucdn.com/aa1c48bb7d215144'
  },
  {
    testimonial:
      "这位是前端啊？",
    name: '香芋',
    designation: '老板',
    company: '同福客栈',
    image: 'https://img.keaitupian.cn/newupload/09/1663744112466191.jpg'
  },
  {
    testimonial:
      "记上，他写 bug 了",
    name: '老邢',
    designation: '捕头',
    company: '衙门',
    image: 'https://i04piccdn.sogoucdn.com/285ca91d16646e58'
  },
  {
    testimonial:
      "加油，奥里给！！！",
    name: '冬泳鸽怪',
    designation: '',
    company: '',
    image: 'https://i03piccdn.sogoucdn.com/ec37142f863f00eb'
  },
]

const projects = [
  {
    name: 'TODO',
    description:
      'todo...',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient'
      },
      {
        name: 'Element-UI',
        color: 'green-text-gradient'
      },
      {
        name: 'Nodejs',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'TODO',
    description:
      'todo...',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient'
      },
      {
        name: 'Element-UI',
        color: 'green-text-gradient'
      },
      {
        name: 'CKEditor',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'TODO',
    description:
      'todo...',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient'
      },
      {
        name: 'Element-UI',
        color: 'green-text-gradient'
      },
      {
        name: 'D3Admin',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
]

export { services, experiences, testimonials, projects }
