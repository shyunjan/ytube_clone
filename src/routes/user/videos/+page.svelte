<script lang="ts">
  import type { PageData } from "./$types.js";
  import { enhance } from "$app/forms";
  import * as Dialog from "$lib/components/ui/dialog";
  import { Separator } from "$/lib/components/ui/separator";
  import { buttonVariants } from "$lib/components/ui/button";

  const { data }: { data: PageData } = $props();
  let videoFile: File | null = $state(null);
  let previewUrl: string | null = $state(null);
  let videoFileForm: HTMLFormElement | null = $state(null);
  let videoInput: HTMLInputElement | null = $state(null);

  const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/webm", "video/quicktime"];
  const MAX_VIDEO_SIZE = 500 * 1024 * 1024; // 500MB // TODO: .env(환경설정) 파일로 처리

  $effect(() => {
    const labelsForFileInput: NodeListOf<Element> =
      document.querySelectorAll('label[for="video-file"]');

    labelsForFileInput.forEach((e) => {
      /* Start transition effect when a file is dragged over the drop zone */
      ["dragenter", "dragover"].forEach((eventName) => {
        e.addEventListener(eventName, startDragTransition, false);
      });

      /* End transition effect when a file is dragged over the drop zone */
      e.addEventListener("drop", handleDrop, false); // handleDrop and endTransition
      e.addEventListener("dragleave", endDragTransition, false);
    });

    return () => {
      labelsForFileInput.forEach((e) => {
        ["dragenter", "dragover"].forEach((eventName) => {
          e.removeEventListener(eventName, startDragTransition);
        });
        e.removeEventListener("drop", handleDrop);
        e.removeEventListener("dragleave", endDragTransition, false);
      });
    };
  });

  function preventDefaults(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  function startDragTransition(e: Event) {
    preventDefaults(e);
    document.querySelector('svg[name="iconify:mdi:upload"]')?.classList.remove("h-18");
    document.querySelector('svg[name="iconify:mdi:upload"]')?.classList.add("h-14");
  }

  function endDragTransition(e: Event) {
    preventDefaults(e);
    document.querySelector('svg[name="iconify:mdi:upload"]')?.classList.remove("h-14");
    document.querySelector('svg[name="iconify:mdi:upload"]')?.classList.add("h-18");
  }

  /* handleDrop is to transfer a video file into the video input element and call endTransition */
  function handleDrop(e: Event) {
    preventDefaults(e);
    if (!videoInput) return;

    const dt = (e as DragEvent).dataTransfer;
    const files = dt?.files ?? null;
    videoInput.files = files;
    if (files?.[0]) handleVideoFile(files?.[0]);

    endDragTransition(e);
  }

  function handleInputChange(e: Event) {
    const file = (e.target as HTMLInputElement)?.files?.[0];
    if (!file) return;
    handleVideoFile(file);
  }

  function handleVideoFile(file: File) {
    if (!ALLOWED_VIDEO_TYPES.includes(file.type)) {
      alert("MP4, WebM, MOV 형식의 비디오만 업로드 가능합니다.");
      return;
    }

    if (file.size > MAX_VIDEO_SIZE) {
      alert("비디오 파일은 500MB 이하여야 합니다.");
      return;
    }

    try {
      videoFileForm?.requestSubmit();
    } catch (err) {
      console.error(err);
      return false;
    }

    /*  비디오 미리보기 생성 */
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    previewUrl = URL.createObjectURL(file);
  }
</script>

<!-- Video List -->
<div class="flex flex-1 bg-teal-700">video1, video2, video3 ... videoN</div>
<!-- /Video List -->

<!-- Video Upload Dialog -->
<Dialog.Root open={data.cmd === "upload" ? true : false}>
  <Dialog.Content class="bg-popover h-11/12 max-h-[95%] w-5xl max-w-full! px-0">
    {#if !videoFile}
      <Dialog.Header>
        <Dialog.Title class="px-4">
          <span>동영상 업로드</span>
        </Dialog.Title>
        <Separator class="my-4" />
      </Dialog.Header>
      <form
        method="POST"
        action="?/upload"
        enctype="multipart/form-data"
        bind:this={videoFileForm}
        use:enhance={() => {
          return async ({ update, formData }) => {
            await update();
            videoFile = formData.get("video-file") as File;
            console.debug(
              `(formData.get("video-file") as File).name = ${(formData.get("video-file") as File).name}`
            );
          };
        }}>
        <div class="flex-center flex-col p-4">
          <label
            for="video-file"
            class="flex-center text-muted-foreground my-5 size-36 cursor-pointer rounded-full bg-stone-900/50 transition duration-200">
            <svg
              name="iconify:mdi:upload"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              class="h-18 w-18 transition-[height] duration-300"
              ><path fill="currentColor" d="M9 16v-6H5l7-7l7 7h-4v6zm-4 4v-2h14v2z" /></svg>
            <input
              type="file"
              id="video-file"
              name="video-file"
              accept="video/mp4,video/webm,video/quicktime"
              onchange={handleInputChange}
              bind:this={videoInput}
              disabled={null}
              hidden={true} />
          </label>
          <span class="my-0.5 text-[15px]">동영상 파일을 드래그 앤 드롭하여 업로드</span>
          <span class="text-muted-foreground my-0.5 text-[13px]"
            >동영상을 게시하기 전에는 비공개로 설정됩니다.</span>
          <label
            for="video-file"
            class={buttonVariants({
              variant: "default",
              class: "my-6 w-23 justify-center gap-1 rounded-full px-2",
            })}>파일 선택</label>
        </div>
      </form>
      <Dialog.Footer class="text-muted-foreground flex-col! items-center py-4 text-xs">
        <span
          >YTube에 동영상을 제출하면 YTube <a href="https://www.youtube.com/t/terms">서비스 약관</a>
          및 <a href="https://www.youtube.com/yt/about/policies/">커뮤니티 가이드</a>에 동의하게
          됩니다.</span>
        <span
          >불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수 있습니다. 타인의 저작권 또는
          개인 정보 보호 권리를 침해해서는 안 됩니다. <a href="https://www.youtube.com/yt/copyright"
            >자세히 알아보기</a>
        </span>
      </Dialog.Footer>
    {/if}
  </Dialog.Content>
</Dialog.Root>
<!-- /Video Upload Dialog -->
