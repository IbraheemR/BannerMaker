<script>
  import BannerViewer from "./banner_viewer/BannerViewer.svelte";
  import StackViewer from "./stack_viewer/StackViewer.svelte";
  import PatternButtons from "./PatternButtons.svelte";

  let patterns = [
    { patternId: "flo", colorId: 2 },
    { patternId: "hhb", colorId: 15 },
    { patternId: "cs", colorId: 2 },
    { patternId: "mc", colorId: 15 },
    { patternId: "tts", colorId: 15 },
    { patternId: "bts", colorId: 15 }
  ];

  let base = { patternId: "background", colorId: 15 };
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
    <BannerViewer {patterns} {base} />
  </div>

  <div class="shield">

    <BannerViewer {patterns} {base} shield />
  </div>

  <div class="buttons">
    <PatternButtons bind:patterns bind:base />
  </div>

  <div class="stack">
    <StackViewer bind:patterns bind:base />
  </div>

  <div class="add">Add</div>
  <div class="saved">saved</div>
  <div class="export">export</div>
</div>
