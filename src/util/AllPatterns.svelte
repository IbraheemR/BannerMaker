<script>
  import DesignElement from "./DesignElement";
  import { patterns } from "./design_info";

  import SinglePattern from "./SinglePattern.svelte";

  export let selectedId = undefined;
  export let colorId;
  export let click;
</script>

{#each Object.entries(patterns) as [id, info]}
  {#if !info.isBackground}
    <SinglePattern
      patternId={id}
      {colorId}
      hoverable
      selected={id == selectedId}
      click={() => click(id)} />
  {/if}
{/each}
