<script lang="ts">
</script>

<!-- Main Layout -->
<div id="main" class="flex h-full w-full flex-wrap">
  <!-- 상단 Header 영역 -->
  <header class="flex h-14 w-full items-center justify-between px-3">
    <button
      class="flex-center hover:bg-input h-10 w-10 rounded-4xl p-2 hover:cursor-pointer"
      aria-label="menu-bars-button">
      <!-- <i class="fa-solid fa-bars text-xl"></i> -->
      <svg
        data-slot="icon"
        aria-hidden="true"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </button>
    <img src="/logos/Youtube-logo-with-flat-design-edited.png" alt="logo" class="mx-2 h-8 w-30" />
  </header>
</div>
