<script lang="ts">
  import "iconify-icon";
  // import Icon from '@iconify/svelte';
  import { Button } from "$lib/components/ui/button";
</script>

<!-- Main Layout -->
<div id="main" class="flex h-full w-full flex-wrap">
  <!-- 상단 Header 영역 -->
  <header class="flex h-14 w-full items-center justify-between px-3">
    <Button variant="ghost" class="flex-center size-10 rounded-full p-2 hover:cursor-pointer">
      <!-- <i class="fa-solid fa-bars text-xl"></i> -->
      <!-- <Icon icon="iconamoon:menu-burger-horizontal-thin" class="size-6" stroke-width="1.17" /> -->
      <iconify-icon
        icon="iconamoon:menu-burger-horizontal-thin"
        width="24"
        height="24"
        style="stroke-width: 1.17px"></iconify-icon>
    </Button>
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
</div>
