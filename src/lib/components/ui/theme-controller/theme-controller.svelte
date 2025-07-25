<script lang="ts">
  import { setMode } from 'mode-watcher';
  import { Switch } from '$lib/components/ui/switch';
  import { Label } from '$lib/components/ui/label';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';

  let themeLight = $state(false);

  // $effect(() => {
  //   tick().then(() => {
  //     console.debug(`changing theme...`);
  //     if (themeLight) setMode('light');
  //     else setMode('dark');
  //   });
  // });

  function setTheme() {
    themeLight = !themeLight;
    if (themeLight) setMode('light');
    else setMode('dark');
  }
</script>

<!-- <Button onclick={toggleMode} variant="outline" size="icon">
  <SunIcon
    class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90" />
  <MoonIcon
    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0" />
  <span class="sr-only">Toggle theme</span>
</Button> -->
<div class="flex items-center space-x-2">
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
</div>
