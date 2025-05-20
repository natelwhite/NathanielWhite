<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
	import CopyButton from '$lib/CopyButton.svelte'
	let { 
		dropperText,
		buttons
	}: {
		dropperText: string
		buttons: CopyButtonInterface[]
	} = $props();
	interface CopyButtonInterface {
		copyValue: string;
		text: string;
	};
	let dropped: boolean = $state(false);
</script>

<details ontoggle={() => {
	dropped = !dropped
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
	{#each buttons as button}
		<CopyButton text={button.text} copyValue={button.copyValue}/>
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
@media screen and (min-device-width: 601px) and (max-device-width: 1200px) {
	summary {
		border: none;
		line-height: 3;
	}
}
@media screen and (max-device-width: 600px) {
	summary {
		text-align: center;
		border: none;
		line-height: 3;
		background-color: var(--grey);
	}
	summary:hover {
		background-color: var(--light-grey);
	}
}
</style>
