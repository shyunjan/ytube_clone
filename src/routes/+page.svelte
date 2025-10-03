<script lang="ts">
  import "iconify-icon";
  // import Icon from "@iconify/svelte";
  // import * as Sidebar from "$lib/components/ui/sidebar";
  import AppSidebar from "$lib/components/ui/app-sidebar.svelte";
  // import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";

  const tabletWidth = 1280;
  let sidebarMobile = $state(false);

  function onWindowResized() {
    if (window.innerWidth > tabletWidth && sidebarMobile) sidebarMobile = false;
  }

  function openSidebarMobile() {
    if (sidebarMobile) sidebarMobile = false;
    else if (window.innerWidth <= tabletWidth) {
      console.debug(`OPEN!`);
      sidebarMobile = true;
    }
  }
</script>

<svelte:window onresize={onWindowResized} />

<!-- Sidebar (for Mobile) -->
<div class="absolute top-0 left-0 h-full {sidebarMobile ? '' : 'hidden'} bg-(--background)">
  <!-- <Sidebar.Provider bind:open={() => sidebarMobile, (newOpen) => (sidebarMobile = newOpen)}>
    <AppSidebar bind:sidebarMobile />
  </Sidebar.Provider> -->
  <AppSidebar bind:sidebarMobile />
</div>
<!--/Sidebar (for Mobile) -->
<!-- Header 영역 -->
<header class="flex h-14 w-full items-center justify-between px-4">
  <!-- Menu Button -->
  <Button
    variant="ghost"
    class="flex-center size-10 rounded-full p-2 hover:cursor-pointer"
    onclick={openSidebarMobile}>
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
<!-- Contents 영역 -->
<div class="flex flex-1 justify-start">
  <!-- Sidebar (for only icons) -->
  <div class="flex w-18 flex-col items-center justify-start p-1">
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
  <!-- Video List -->
  <div class="flex flex-1 bg-green-800"></div>
  <!-- /Video List -->
</div>
<!-- /Contents -->
