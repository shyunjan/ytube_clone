<script lang="ts">
  import "../app.css";
  import { ModeWatcher, setMode } from "mode-watcher";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
  // import * as Sidebar from "$lib/components/ui/sidebar";
  import AppSidebar from "$lib/components/ui/app-sidebar.svelte";
  import { sidebarDesktop } from "../universal-state.svelte"; // 데스크탑용 sidebar는 특정 페이지에서만 on/off한다.
  import { Button } from "$lib/components/ui/button";

  const tabletWidth = 1280;
  let { children } = $props();
  let sidebarMobile = $state({ visible: false }); // 모바일용 sidebar는 layout에서 on/off한다. 그러므로 모든 페이지에 적용된다.

  function onWindowResized() {
    sidebarMobile.visible = false;
    sidebarDesktop.windowWidth = window.innerWidth;
  }

  function openSidebar() {
    if (window.innerWidth <= tabletWidth) sidebarMobile.visible = !sidebarMobile.visible;
    else sidebarDesktop.visible = !sidebarDesktop.visible;
  }

  setMode("dark"); // TODO: 나중에 cookie등 저장소에서 가져온 정보로 theme를 setting한다

  $effect(() => {
    onWindowResized();
  });
</script>

<svelte:window onresize={onWindowResized} />

<ModeWatcher track={false} defaultMode={"dark"} />
<ThemeSwitch />

<!-- Main -->
<main class="flex h-full w-full flex-col justify-start">
  <!-- Mobile Sidebar -->
  <div
    class="absolute top-0 left-0 h-full {sidebarMobile.visible ? '' : 'hidden'} bg-(--background)">
    <!-- <Sidebar.Provider bind:open={() => sidebarMobile, (newOpen) => (sidebarMobile = newOpen)}>
      <AppSidebar bind:sidebarMobile />
    </Sidebar.Provider> -->
    <AppSidebar bind:sidebarMobile />
  </div>
  <!--/Mobile Sidebar -->
  <!-- Header 영역 -->
  <header class="flex h-14 w-full items-center justify-between px-4">
    <!-- Menu Button -->
    <Button
      variant="ghost"
      class="flex-center size-10 rounded-full p-2 hover:cursor-pointer"
      onclick={openSidebar}>
      <!-- <i class="fa-solid fa-bars text-xl"></i> -->
      <!-- <Icon icon="iconamoon:menu-burger-horizontal-thin" class="size-6" stroke-width="1.17" /> -->
      <iconify-icon
        icon="iconamoon:menu-burger-horizontal-thin"
        width="24"
        height="24"
        style="stroke-width: 1.17px"></iconify-icon>
    </Button>
    <!-- /Menu Button -->
    <img src="/logos/Youtube-logo-with-flat-design-edited.png" alt="logo" class="mx-2 h-8 w-30" />
    <div class="flex-center">
      <Button variant="secondary" class="rounded-full pl-2 hover:cursor-pointer"
        ><iconify-icon icon="ph:plus-light" width="24" height="24"></iconify-icon>만들기</Button>
      <Button variant="ghost" class="rounded-full p-2 hover:cursor-pointer">
        <iconify-icon icon="ion:notifications-outline" width="24" height="24" background="none"
        ></iconify-icon>
      </Button>
      <div class="px-2">
        <button class="size-8 rounded-full bg-slate-600 text-white" aria-label="avata">ME</button>
      </div>
    </div>
  </header>
  <!-- /Header -->
  <!-- Contents -->
  <div class="flex flex-1">
    {#if (!sidebarDesktop.visible && !sidebarMobile.visible) || sidebarDesktop.windowWidth <= tabletWidth}
      <!-- Sidebar (for only icons) -->
      <div class="flex w-18 flex-col items-center p-1">
        <!-- Home Button -->
        <Button
          variant="ghost"
          class="flex-center h-18 w-16 flex-col gap-1.5 rounded-xl p-1 hover:cursor-pointer">
          <iconify-icon icon="entypo:home" width="24" height="24"></iconify-icon>
          <span class="text-tiny">홈</span>
        </Button>
        <!-- /Home Button -->
      </div>
      <!-- /Sidebar (for only icons) -->
    {/if}
    {@render children()}
  </div>
  <!-- /Contents -->
</main>
<!-- /Main -->
