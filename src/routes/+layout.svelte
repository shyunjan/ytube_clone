<script lang="ts">
  import '../app.css';
  import { ModeWatcher, setMode } from 'mode-watcher';
  import { ThemeSwitch } from '$lib/components/ui/theme-switch';

  let { children } = $props();

  setMode('dark'); // TODO: 나중에 cookie등 저장소에서 가져온 정보로 theme를 setting한다
</script>

<ModeWatcher track={false} defaultMode={'dark'} />
<ThemeSwitch />

{@render children()}
