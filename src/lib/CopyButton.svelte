<script lang="ts">
	import Fa from 'svelte-fa'
	import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
	let {
		text,
		copyValue
	}: {
		text: string
		copyValue: string
	} = $props();
	let copied: boolean = $state(false);
	function click(): void {
		copied = true;
		navigator.clipboard.writeText(copyValue);
		console.log(`Copied ${copyValue} to clipboard`);
	}
</script>

<button onclick={click}>
	{#if copied}
		<Fa style="margin:0 8px; color: var(--orange);" icon={faClipboardCheck}/>
	{:else}
		<Fa style="margin:0 8px;" icon={faClipboard}/>
	{/if}
	{text}
</button>

<style>
button {
	width: 100%;
	margin: 0;
	padding: 0 8px;
	line-height: 2;
	font-size: 12pt;

	text-align: left;
	color: var(--paragraph);
	background-color: var(--black);
	border: none;
	border-radius: 0;
	border-bottom: 1px solid var(--paragraph);
}
button:hover {
	background-color: var(--grey);
	color: var(--orange);
	cursor: pointer;
}

@media screen and (min-device-width: 601px) and (max-device-width: 1200px) {
	button {
		border: none;
	}
}
@media screen and (max-device-width: 600px) {
	button {
		border: none;
		text-align: center;
	}
}
</style>

