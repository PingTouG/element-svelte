import send from '@polka/send'
import { loadMarkdown, generateDoc } from '../../markdown'

export function get({ params: { page } }, res) {
	const markdown = loadMarkdown(`component/${page}`)
	const doc = generateDoc(markdown)
	send(res, 200, doc, { 'Content-Type': 'application/json' })
}
