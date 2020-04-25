<script>
  import { colors } from "./pattern_info";

  import SingleColor from "./SingleColor.svelte";

  export let rainbow = false;
  export let selectedId = undefined;
  export let click = id => console.log(`${id} pressed.`);

  let colorList;
  $: colorList = rainbow
    ? [...colors].sort((a, b) => a.rainbow > b.rainbow)
    : colors;
</script>

{#each colorList as { id }}
  <SingleColor
    hoverable
    colorId={id}
    selected={id == selectedId}
    click={() => click(id)} />
{/each}
