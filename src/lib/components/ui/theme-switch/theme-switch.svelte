<script lang="ts">
  import { setMode } from 'mode-watcher';
  import { Switch } from '$lib/components/ui/switch';
  // import SunIcon from '@lucide/svelte/icons/sun';
  // import MoonIcon from '@lucide/svelte/icons/moon';

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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="fixed top-1/2 right-0 inline-flex rotate-90 items-center justify-center space-x-2">
  <Switch
    id="theme-controller"
    class="mr-0 h-9 w-16 [&>span]:size-7 [&>span]:data-[state=checked]:translate-x-[calc(100%+4px)] [&>span]:data-[state=unchecked]:translate-x-1"
    bind:checked={() => themeLight, setTheme} />
  <i
    class="fa-solid fa-moon flex-center absolute left-3 scale-100 rotate-90 text-yellow-400 opacity-100 !transition-[rotate] dark:scale-0 dark:rotate-0"
    onclick={setTheme}
    onkeypress={setTheme}></i>
  <i
    class="fa-solid fa-sun flex-center absolute right-2 scale-0 text-amber-500 opacity-100 !transition-[rotate] dark:scale-100 dark:-rotate-90"
    onclick={setTheme}
    onkeypress={setTheme}></i>
</div>

<!-- daisyUI를 사용해서 작성한 경우 -->
<!-- <button
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
</button> -->
