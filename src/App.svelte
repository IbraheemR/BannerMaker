<script>
  import BannerViewer from "./banner_viewer/BannerViewer.svelte";
  import StackViewer from "./stack_viewer/StackViewer.svelte";

  let test_patterns = [
    { Pattern: "flo", Color: 2 },
    { Pattern: "hhb", Color: 15 },
    { Pattern: "cs", Color: 2 },
    { Pattern: "mc", Color: 15 },
    { Pattern: "tts", Color: 15 },
    { Pattern: "bts", Color: 15 }
  ];

  let baseColorId = 15;
</script>

<style>
  .grid {
    width: 100%;
    height: 100%;

    display: grid;

    padding: 0.5rem;
    gap: 0.5rem;

    grid-template-columns: auto auto 1fr auto;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "banner shield buttons buttons"
      "banner shield stack stack"
      "banner shield add add"
      "saved saved saved export";
  }

  .banner {
    grid-area: banner;
    align-self: center;
  }
  .shield {
    grid-area: shield;
    align-self: center;
  }
  .buttons {
    grid-area: buttons;
  }
  .stack {
    grid-area: stack;
  }
  .add {
    grid-area: add;
  }
  .saved {
    grid-area: saved;
  }
  .export {
    grid-area: export;
  }
</style>

<div class="grid">

  <div class="banner">
    <BannerViewer patterns={test_patterns} {baseColorId} />
  </div>

  <div class="shield">

    <BannerViewer patterns={test_patterns} {baseColorId} shield />
  </div>

  <div class="buttons">buttons</div>

  <div class="stack">
    <!-- This element will change pattern, so bind: its props -->
    <StackViewer bind:patterns={test_patterns} bind:baseColorId />
  </div>

  <div class="add">Add</div>
  <div class="saved">saved</div>
  <div class="export">export</div>
</div>
