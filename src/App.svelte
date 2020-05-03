<script>
  import DesignElement from "./util/DesignElement";

  import BannerViewer from "./banner_viewer/BannerViewer.svelte";
  import DesignEditor from "./design_editor/DesignEditor.svelte";
  import DesignButtons from "./DesignButtons.svelte";
  import AddDesignElement from "./AddDesignElement.svelte";

  let design = [
    new DesignElement("flo", 2),
    new DesignElement("hhb", 15),
    new DesignElement("cs", 2),
    new DesignElement("mc", 15),
    new DesignElement("tts", 15),
    new DesignElement("bts", 15)
  ];

  let base = new DesignElement("background", 15);
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
    <BannerViewer {design} {base} />
  </div>

  <div class="shield">

    <BannerViewer {design} {base} shield />
  </div>

  <div class="buttons">
    <DesignButtons bind:design bind:base />
  </div>

  <div class="stack">
    <DesignEditor bind:design bind:base />
  </div>

  <div class="add">
    <AddDesignElement bind:design />
  </div>
  <div class="saved">saved</div>
  <div class="export">export</div>
</div>
