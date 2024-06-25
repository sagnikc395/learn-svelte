## learn-svelte 

- a web framework to build fast web applications and for building fast industrial web applications.
- Feels like using regular HTML,CSS and JS.
- Compiled and like a more tradiitonal framework -> ship less code , ship less JS.
- It is actually blazingly fast and the final binary is tiny tiny compared to React.
- Svelte is like a SPA like React and if you want routes and other things, we can use sveltekit , like Next.js 
and Nuxt.js.
- Creating, updating and deleting content.
- Svelte is like a superset of HTMl meaning its like actual HTML with JS but with superpowers.

- Svelte lets us write code in a declarative way meaning we dont have to query elements and dont worry about keeping 
the state of our applications in sync with the user interface.

- Svelte treats App.svelte in  a  single file component. The <script> tag is where we write JS.
- <style> tag is for CSS.
- Svelte compiler takes this special App.svelte file and processes each part seperately before compiling it into regular HTML,CSS and JS.

- Inside the Svelte template we can use JS expression and see the output directly.

### Reactivity:

- Superpower of svelte. 
- this is how we keep our DOM in sync with our application state.

- Svelte's reactivity is based on assignments. To change state and trigger a re-render 
we assign a value to a variable we declared and it's going to update.

- however this comes with a caveat as we need to assign a value for Svelte to pick it up
methods like push won't trigger an update until we reassign it. We can avoid doing the extra step
by using the JS spread operator ... to keep existing items and add the new item.

- Sometimes we may need to change a value based on other values. This is also 
referred to as a computed property.

- Svelte has reactive declarations using the $: syntax which is valid JS label syntax , 
that Svelte uses it for.
- Using $: syntax is saying that "re-run this code whenever any of the referenced values change".

- This is likve giving Svelte dependencies to watch and rerun the changes when the value changes 
because in $: albumLength = getAlbumLength(album) on the right album changes.


### Logic:

- HTML can't express logic such as conditionals and loops us would have to write JS for that.
- we can decalrateively use confitional using {#if <cond>}{/if} 
- for each loop like normal jas 
for(let todo of todos) etc. where todos is a object.
