<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';
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
	let classState: string = $derived(dropped ? "dropped" : "");
</script>


<div class={classState}>
	<button onclick={() => {dropped = !dropped}}>
		{#if dropped}
			<Fa icon={faFolderOpen} />
		{:else}
			<Fa icon={faFolder} />
		{/if}
		{ dropperText }
	</button>
	<ul>
		{#each contents as content}
			<li><a href={content.href}><Fa style="margin:0 8px" icon={faFile}/>{content.html}</a></li>
		{/each}
	</ul>
</div>

<style>
div {
	background-color: var(--black);
}
button {
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
.dropped button {
	color: var(--orange);
}

button:hover {
	background-color: var(--grey);
	color: var(--header);
	cursor: pointer;
}

ul {
	display: none;
	margin: 0 0 0 var(--indent);
	padding: 0;

	list-style-type: none;
	background-color: var(--black);
}
.dropped ul {
	display: grid;
}

li a {
	border-bottom: 1px solid var(--paragraph);
	padding: 0 8px;
	display: block;
	font-size: 12pt;
	line-height: 3;

	color: var(--paragraph);
}
a:hover {
	background-color: var(--grey);
	color: var(--header);
	cursor: pointer;
}

@media screen and (max-width: 1200px) {
	button {
		border: none;
	}
	li a {
		border: none;
	}
}
</style>
