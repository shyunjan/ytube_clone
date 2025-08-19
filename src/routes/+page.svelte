<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<!-- Main Layout -->
<div id="main" class="flex h-full w-full flex-wrap">
  <!-- 상단 Header 영역 -->
  <header class="flex h-14 w-full items-center justify-between px-3">
    <button
      class="flex-center hover:bg-input size-10 rounded-4xl p-2 hover:cursor-pointer"
      aria-label="menu-bars-button">
      <!-- <i class="fa-solid fa-bars text-xl"></i> -->
      <Icon icon="iconamoon:menu-burger-horizontal-thin" class="size-6" stroke-width="1.17" />
    </button>
    <img src="/logos/Youtube-logo-with-flat-design-edited.png" alt="logo" class="mx-2 h-8 w-30" />
  </header>
</div>
