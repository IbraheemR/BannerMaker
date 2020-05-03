<script>
  import DesignElementEditor from "./DesignElementEditor.svelte";

  export let design = [];
  export let base;
</script>

<style>
  .banner-stack {
    max-width: 100%;

    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;

    /* overflow-x: auto; */
  }
</style>

<div class="banner-stack">
  <DesignElementEditor bind:designElement={base} />

  {#each design as designElement, i}
    <DesignElementEditor
      bind:designElement
      remove={() => {
        if (!designElement.lock) {
          design.splice(i, 1);
          design = design;
        }
      }}
      left={i === 0 ? null : () => {
            let temp = design[i];
            design[i] = design[i - 1];
            design[i - 1] = temp;
          }}
      right={i === design.length - 1 ? null : () => {
            let temp = design[i];
            design[i] = design[i + 1];
            design[i + 1] = temp;
          }} />
  {/each}

</div>
