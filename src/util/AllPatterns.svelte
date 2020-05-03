<script>
  import { patterns } from "./pattern_info";
  import Pattern from "./pattern";

  import SinglePattern from "./SinglePattern.svelte";

  export let selectedId = undefined;
  export let colorId;
  export let click;
</script>

{#each Object.entries(patterns) as [id, info]}
  {#if !info.background}
    <SinglePattern
      pattern={new Pattern(id, colorId)}
      hoverable
      selected={id == selectedId}
      click={() => click(id)} />
  {/if}
{/each}
