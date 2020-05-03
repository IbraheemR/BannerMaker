<script>
  import Pattern from "./util/pattern";

  import BannerViewer from "./banner_viewer/BannerViewer.svelte";
  import StackViewer from "./stack_viewer/StackViewer.svelte";
  import PatternButtons from "./PatternButtons.svelte";
  import AddPattern from "./AddPattern.svelte";

  let patterns = [
    new Pattern("flo", 2),
    new Pattern("hhb", 15),
    new Pattern("cs", 2),
    new Pattern("mc", 15),
    new Pattern("tts", 15),
    new Pattern("bts", 15)
  ];

  let base = new Pattern("background", 15);
</script>

<style>
  .grid {
    max-width: 1000px;
    height: 100%;

    display: grid;

    margin: auto;
    padding: 1rem;
    gap: 1rem;

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

  <div class="add">
    <AddPattern bind:patterns />
  </div>
  <div class="saved">saved</div>
  <div class="export">export</div>
</div>
