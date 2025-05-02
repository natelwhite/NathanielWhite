<script lang="ts">
	import { marked } from "marked";
	let { 
		title,
		md,
	}: {
		title: string,
		md: string,
	} = $props();
</script>

<div id={title}>
</div>
<article>
	{@html marked("# " + title)}
	{@html marked(md)}
</article>
