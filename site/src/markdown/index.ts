import fs from 'fs'
import path from 'path'
import marked from 'marked'
import hljs from 'highlight.js'
import grayMatter from 'gray-matter'
import { MD_BASE_PATH } from '../config'

// 加载markdown文件
export const loadMarkdown = (filename: string): string =>
	fs.readFileSync(path.resolve(MD_BASE_PATH, `${filename}.md`), 'utf-8')
// 渲染markdown内容
export const generateDoc = (markdown: string): string => {
	// Parse front matter
	const { data, content } = grayMatter(markdown)
	// Render html from string
	const renderer = new marked.Renderer()
	const html = marked(content, {
		renderer,
		highlight: (code: string) => hljs.highlightAuto(code).value,
	})

	return JSON.stringify({ ...data, html })
}
