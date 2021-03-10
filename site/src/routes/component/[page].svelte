<script context="module">
	export async function preload({ params: { page } }) {
		const res = await this.fetch(`component/${page}.json`)

		if (res.status === 200) {
			const data = await res.json()
			return { page: data }
		} else {
			this.error(404, 'Not Found')
		}
	}
</script>

<script>
	export let page
</script>

<svelte:head>
	<title>{page.headTitle}</title>
</svelte:head>

<section class="md">
	<h1 class="title">
		{page.title}
	</h1>

	<div class="md-content">
		{@html page.html}
	</div>
</section>
