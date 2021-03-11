import guideIcon from 'images/guide.png'
import componentIcon from 'images/component.png'
import themeIcon from 'images/theme.svg'
import resourceIcon from 'images/resource.png'
import { isUndef } from '../utils/tools'

type Nav = {
	key: string
	name: string
	icon?: string
	url: string
	description?: string
	children?: Array<Nav>
}

export type ComponentNav = {
	key: string
	name: string
	url?: string
	target?: string
	children?: Array<ComponentNav>
}

export const headerNavModel: Array<Nav> = [
	{
		key: 'guide',
		name: '指南',
		icon: guideIcon,
		url: 'guide/design',
		description:
			'了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。',
	},
	{
		key: 'component',
		name: '组件',
		icon: componentIcon,
		url: 'component/installation',
		description:
			'使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。',
	},
	{
		key: 'theme',
		name: '主题',
		icon: themeIcon,
		url: 'theme',
		description: '在线主题编辑器，可视化定制和管理站点主题、组件样式。',
	},
	{
		key: 'resource',
		name: '资源',
		icon: resourceIcon,
		url: 'resource',
		description:
			'下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。',
	},
	{
		key: 'demo',
		name: '例子',
		url: 'demo',
	},
]

export const componentNavModel: Array<ComponentNav> = [
	{
		key: 'vue3',
		name: 'Element Plus',
		url: 'https://element-plus.gitee.io/#/zh-CN',
		target: '_blank',
	},
	{
		key: 'react',
		name: 'Element React',
		url: 'https://elemefe.github.io/element-react',
		target: '_blank',
	},
	{
		key: 'angular',
		name: 'Element Angular',
		url: 'https://element-angular.faas.ele.me/guide/install',
		target: '_blank',
	},
	{
		key: 'guide',
		name: '开发指南',
		children: [
			{
				key: 'installation',
				name: '安装',
				url: 'component/installation',
			},
			{
				key: 'quickstart',
				name: '快速上手',
				url: 'component/quickstart',
			},
			{
				key: 'i18n',
				name: '国际化',
				url: 'component/i18n',
			},
			{
				key: 'custom-theme',
				name: '自定义主题',
				url: 'component/custom-theme',
			},
			{
				key: 'transition',
				name: '内置过渡动画',
				url: 'component/transition',
			},
		],
	},
	{
		key: 'component',
		name: '组件',
		children: [
			{
				key: 'basic',
				name: '基础',
				children: [
					{
						key: 'layout',
						name: 'Layout 布局',
						url: 'component/layout',
					},
					{
						key: 'container',
						name: 'Container 布局容器',
						url: 'component/container',
					},
					{
						key: 'color',
						name: 'Color 色彩',
						url: 'component/color',
					},
					{
						key: 'typography',
						name: 'Typography 字体',
						url: 'component/typography',
					},
					{
						key: 'border',
						name: 'Border 边框',
						url: 'component/border',
					},
					{
						key: 'icon',
						name: 'Icon 图标',
						url: 'component/icon',
					},
					{
						key: 'button',
						name: 'Button 按钮',
						url: 'component/button',
					},
					{
						key: 'link',
						name: 'Link 文字链接',
						url: 'component/link',
					},
				],
			},
		],
	},
]

// 数组降维
const flattenDeep = (data: Array<ComponentNav>) => {
	let list = []

	for (const item of data) {
		if (isUndef(item?.children)) {
			list.push(item)
		} else {
			list = list.concat(flattenDeep(item.children))
		}
	}

	return list
}

// 获取相邻页面
export const getBrotherPage = (key: string): Array<ComponentNav> => {
	const list = flattenDeep(componentNavModel)
	const i = list.findIndex((item) => item.key === key)
	let prev = list[i - 1]
	const next = list[i + 1]
	// 若为外链，则不需要展示
	prev = isUndef(prev?.target) ? prev : undefined
	return [prev, next]
}
