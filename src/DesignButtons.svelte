<script>
  import DesignElement from "./util/DesignElement";
  import { colors, patterns } from "./util/design_info";

  import Erase from "carbon-icons-svelte/lib/Erase32";
  import Shuffle from "carbon-icons-svelte/lib/Shuffle32";
  import ColorPalette from "carbon-icons-svelte/lib/ColorPalette32";

  import TextButton from "./util/TextButton.svelte";

  export let design;
  export let base;

  let lock = false;
  $: lock = design.filter(p => p.lock).length || base.lock;

  let clearAll = () => {
    base.colorId = 0;
    design = [];
  };

  let randomPattern = () => {
    base.colorId = choice(colors).id;
    let newdesign = [];
    while (newdesign.length < 6) {
      newdesign.push(
        new DesignElement(
          choice(Object.keys(patterns).filter(k => !k.isbackground)),
          choice(colors).id
        )
      );
    }
    design = newdesign;
  };

  let randomizeColors = () => {
    // Generate mapping
    let colorIds = colors.map(c => c.id);
    let shuffedColors = shuffle([...colorIds]);
    let mapping = new Map(colorIds.map((cId, i) => [cId, shuffedColors[i]]));

    design.forEach(p => {
      p.colorId = p.lock ? p.colorId : mapping.get(p.colorId);
    });
    if (!base.lock) base.colorId = mapping.get(base.colorId);

    design = design;
  };

  let shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let choice = array => array[(Math.random() * array.length) << 0];
</script>

<TextButton on:click={clearAll} {lock}>
  <Erase />
  Clear All
</TextButton>
<TextButton on:click={randomPattern} {lock}>
  <Shuffle />
  Random Pattern
</TextButton>
<TextButton on:click={randomizeColors}>
  <ColorPalette />
  Randomize Colors
</TextButton>
