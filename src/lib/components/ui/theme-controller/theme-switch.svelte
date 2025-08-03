<script lang="ts">
  import { setMode } from 'mode-watcher';
  import { Switch } from '$lib/components/ui/switch';
  import { Label } from '$lib/components/ui/label';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import { slide } from 'svelte/transition';

  let themeLight = $state(false);

  // $effect(() => {
  //   tick().then(() => {
  //     console.debug(`changing theme...`);
  //     if (themeLight) setMode('light');
  //     e  lse setMode('dark');
  //   });
  // });

  function setTheme() {
    themeLight = !themeLight;
    console.debug(`themeLight = ${themeLight}`);
    if (themeLight) setMode('light');
    else setMode('dark');
  }
</script>

<!-- <div class="flex items-center space-x-2">
  <Switch
    id="theme-controller"
    class="!bg-input h-6 w-18"
    bind:checked={() => themeLight, setTheme} />
  <Label for="theme-controller">
    <SunIcon
      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90" />
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0" />
  </Label>
</div> -->
<!-- <label class="toggle toggle-lg toggle-vertical text-base-content w-20">
  <input type="checkbox" />
  <SunIcon />
  <MoonIcon />
  </label> -->
<!-- <div class="join join-vertical fixed top-1/2 right-2 h-8">
  <input class="join-item btn size-4 p-0" type="radio" name="theme" bind:value={() => !themeLight, setTheme} checked aria-label="D" />
  <input class="join-item btn size-4 p-0" type="radio" name="theme" bind:value={() => themeLight, setTheme} aria-label="L" />
  <span class="join-item btn absolute top-4 z-10 size-4 rounded-4xl p-0 dark:top-0" id="toggle-ball"
  ></span>
  </div> -->

<!-- daisyUI를 사용해서 작성한 경우 -->
<button
  class="fixed top-1/2 right-0.5 inline-flex h-9 rotate-90 items-center justify-center overflow-hidden rounded-2xl bg-gray-700"
  onclick={setTheme}
  aria-label="theme-switcher">
  <input
    type="checkbox"
    id="theme-switch"
    class="toggle toggle-xl h-8 w-16 transition-[grid-template-columns]! duration-100!"
    bind:checked={() => themeLight, setTheme} />
  <i class="fa-solid fa-moon flex-center absolute left-3 text-yellow-400 opacity-100"></i>
  <i class="fa-solid fa-sun flex-center absolute right-2 ml-1 text-amber-500 opacity-100"></i>
</button>
