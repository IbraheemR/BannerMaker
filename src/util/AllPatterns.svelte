<script>
  import { patterns } from "./pattern_info";

  import SinglePattern from "./SinglePattern.svelte";

  export let selectedId = undefined;
  export let colorId;
  export let click;
</script>

{#each [...patterns] as [id, info]}
  {#if !info.background}
    <SinglePattern
      patternId={id}
      hoverable
      selected={id == selectedId}
      {colorId}
      click={() => click(id)} />
  {/if}
{/each}
