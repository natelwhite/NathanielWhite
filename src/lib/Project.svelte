<script lang="ts">
	import { marked } from "marked"
	let { 
		title,
		md,
		showcase,
		link
	}: {
		title: string,
		md: string,
		showcase: string[]
		link: HyperLink
	} = $props();
	interface HyperLink {
		href: string;
		html: string;
	};
	let activeImage: number = $state(0);
	function selectImage(index: number) {
		activeImage = index;
	}
</script>

<div id={title}>
</div>
<article>
	{@html marked("# " + title)}
	<h2>showcase</h2>
	<div class="activeImage">
		<img alt='Portfolio' src='./images/{ showcase.at(activeImage) }'/>
	</div>
	<div class="showcase-previews">
		{#each showcase as image, index}
			{#if index == activeImage}
				<img alt='Portfolio' class="activeImagePreview" src='./images/{ image }'/>
			{:else}
				<img alt='Portfolio' onclick={() => { selectImage(index) }} src='./images/{ image }'/>
			{/if}
		{/each}
	</div>
	<a href={link.href}>{link.html}</a>
	{@html marked(md)}
</article>

<style>
.activeImage {
	width: 60%;
	margin: 16px 20%;
}
img:not(.activeImage) {
	width: 90%;
	padding: 5%;
}
.showcase-previews {
	width: 80%;
	margin: 0 10%;
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 1fr;
	align-items: center;
	column-gap: 2px;
	background-color: var(--grey);
}
.showcase-previews img {
	object-fit: scale-down;
}
.showcase-previews img:hover {
	background-color: var(--light-grey);
	cursor: pointer;
}
.showcase-previews .activeImagePreview {
	outline: 1px dashed var(--orange);
	background-color: var(--grey);
}
a {
	display: block;
	width: 20%;
	margin: 12px 40%;
	text-align: center;
	line-height: 2;
	background-color: var(--grey);
	color: var(--orange);
	column-span: all;
}
a:hover {
	background-color: var(--light-grey);
	cursor: pointer;
}

@media screen and (max-width: 600px) {
	.activeImage {
		width: 100%;
		margin: 0;
		padding: 0;
	}
	a {
		width: 100%;
		margin: 12px 0;
	}
}
</style>
