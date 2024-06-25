<script type="js">
  // @ts-nocheck
  let count = 0;

  const increment = () => {
    //reactivity at play here
    count += 1;
  };

  let list = ["React", "Vue"];

  const itemsAdd = () => {
    // update like this
    list = [...list, "Svelte"];
  };
  const removeItemFromStart = () => {
    list = list.slice(-1);
  }
</script>

<p>Clicked {count} {count === 1 ? "time" : "times"}</p>
<button on:click={increment}>Click</button>

<p>{list}</p>
<button on:click={itemsAdd}>Add New Item</button>
<button on:click={removeItemFromStart}>Remove Item</button>

<style>
  * {
    font: 2em;
  }
</style>
