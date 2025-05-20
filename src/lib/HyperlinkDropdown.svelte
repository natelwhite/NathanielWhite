<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
	let { 
		dropperText,
		contents
	}: {
		dropperText: string
		contents: HyperLink[]
	} = $props();
	interface HyperLink {
		href: string;
		html: string;
	};
	let dropped: boolean = $state(false);
</script>

<details ontoggle={() => {
	dropped = !dropped;
	resizeMain();
}}>
	<summary>
		{#if dropped}
			<Fa icon={faFolderOpen} />
		{:else}
			<Fa icon={faFolder} />
		{/if}
		{dropperText}
	</summary>
	<p>
		{#each contents as content}
			<a href={content.href}>{content.html}</a>
		{/each}
	</p>
</details>

<style>
details {
	background-color: var(--black);
}
details > summary::marker {
	content: "";
}
summary {
	width: 100%;
	margin: 0;
	padding: 0 8px;
	line-height: 3;
	font-size: 12pt;

	text-align: left;
	color: var(--paragraph);
	background-color: var(--black);
	border: none;
	border-radius: 0;
	border-bottom: 1px solid var(--orange);
}
details:open summary {
	color: var(--orange);
}

summary:hover {
	background-color: var(--grey);
	color: var(--header);
	cursor: pointer;
}

p {
	display: grid;
	margin: 0 0 0 var(--indent);
	padding: 0;

	list-style-type: none;
	background-color: var(--black);
}

a {
	border-bottom: 1px solid var(--paragraph);
	padding: 0 8px;
	display: block;
	font-size: 12pt;
	line-height: 2;

	color: var(--paragraph);
}
a::before {
	content: "\f15b";
	font-family: FontAwesome;
	padding: 0 8px;
}
a:hover {
	background-color: var(--grey);
	color: var(--orange);
	cursor: pointer;
}

@media screen and (min-device-width: 601px) and (max-device-width: 1200px) {
	summary {
		border: none;
	}
	a {
		border: none;
	}
}

@media screen and (max-device-width: 600px) {
	summary {
		border: none;
		text-align: center;
		background-color: var(--grey);
	}
	summary:hover {
		background-color: var(--light-grey);
	}
	a {
		border: none;
		text-align: center;
	}
}
</style>
