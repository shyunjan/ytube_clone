<script lang="ts">
  import '../app.css';
  import { ModeWatcher, setMode } from 'mode-watcher';
  import { ThemeSwitch } from '$lib/components/ui/theme-switch';

  let { children } = $props();

  setMode('dark');
</script>

<ModeWatcher track={false} defaultMode={'dark'} />
<ThemeSwitch />

{@render children()}
