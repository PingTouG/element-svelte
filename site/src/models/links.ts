type Link = {
	name: string
	url: string
}

export const githubBaseUrl = 'https://github.com/PingTouG/element-svelte'

export const linksModel: Array<Link> = [
	{
		name: '代码仓库',
		url: githubBaseUrl,
	},
	{
		name: '更新日志',
		url: `${githubBaseUrl}/releases`,
	},
	{
		name: 'Element-Vue',
		url: 'https://github.com/ElemeFE/elementt',
	},
	{
		name: 'Element-Plus(Vue3.x)',
		url: 'https://github.com/element-plus/element-plus',
	},
	{
		name: 'Element-React',
		url: 'https://github.com/elemefe/element-react',
	},
	{
		name: 'Element-Angular',
		url: 'https://github.com/ElemeFE/element-angular',
	},
]

export const communityModel: Array<Link> = [
	{
		name: '反馈建议',
		url: `${githubBaseUrl}/issues`,
	},
	{
		name: 'SegmentFault',
		url: 'https://segmentfault.com/t/element-ui',
	},
]
