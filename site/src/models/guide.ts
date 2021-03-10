import consistencyIcon from 'images/consistency.png'
import feedbackIcon from 'images/feedback.png'
import efficiencyIcon from 'images/efficiency.png'
import controllabilityIcon from 'images/controllability.png'

type Guide = {
	key: string
	name: string
	icon: string
	description: Array<GuideDescription>
}
type GuideDescription = {
	name: string
	content: string
}

export const guideModel: Array<Guide> = [
	{
		key: 'Consistency',
		icon: consistencyIcon,
		name: '一致',
		description: [
			{
				name: '与现实生活一致',
				content: '与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
			},
			{
				name: '在界面中一致',
				content:
					'所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
			},
		],
	},
	{
		key: 'Feedback',
		icon: feedbackIcon,
		name: '反馈',
		description: [
			{
				name: '控制反馈',
				content: '通过界面样式和交互动效让用户可以清晰的感知自己的操作；',
			},
			{
				name: '页面反馈',
				content: '操作后，通过页面元素的变化清晰地展现当前状态。',
			},
		],
	},
	{
		key: 'Efficiency',
		icon: efficiencyIcon,
		name: '效率',
		description: [
			{
				name: '简化流程',
				content: '设计简洁直观的操作流程；',
			},
			{
				name: '清晰明确',
				content: '语言表达清晰且表意明确，让用户快速理解进而作出决策；',
			},
			{
				name: '帮助用户识别',
				content: '界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。',
			},
		],
	},
	{
		key: 'Controllability',
		icon: controllabilityIcon,
		name: '可控',
		description: [
			{
				name: '用户决策',
				content:
					'根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；',
			},
			{
				name: '结果可控',
				content: '用户可以自由的进行操作，包括撤销、回退和终止当前操作等。',
			},
		],
	},
]
