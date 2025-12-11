<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import { Separator } from "$/lib/components/ui/separator";
  import { buttonVariants } from "$lib/components/ui/button";
  import "iconify-icon";

  const { data } = $props();
  let videoFile = $state(null);
  let videoInput;
</script>

<!-- Video List -->
<div class="flex flex-1 bg-teal-700">video1, video2, video3 ... videoN</div>
<!-- /Video List -->

<!-- Video Upload Dialog -->
<Dialog.Root open={data.cmd === "upload" ? true : false}>
  <Dialog.Content class="bg-popover h-11/12 max-h-[95%] w-5xl max-w-full! px-0">
    <Dialog.Header>
      <Dialog.Title class="px-4">
        <span>동영상 업로드</span>
      </Dialog.Title>
      <Separator class="my-4" />
    </Dialog.Header>
    <div class="flex-center flex-col p-4">
      <input
        id="input-file"
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        onchange={null}
        bind:this={videoInput}
        disabled={null}
        hidden={true} />
      <label
        for="input-file"
        class="flex-center text-muted-foreground my-5 size-36 cursor-pointer rounded-full bg-stone-900/50 transition duration-200">
        <iconify-icon icon="mdi:upload" width="72" height="72" background="none"></iconify-icon>
      </label>
      <span class="my-0.5 text-[15px]">동영상 파일을 드래그 앤 드롭하여 업로드</span>
      <span class="text-muted-foreground my-0.5 text-[13px]"
        >동영상을 게시하기 전에는 비공개로 설정됩니다.</span>
      <label
        for="input-file"
        class={buttonVariants({
          variant: "default",
          class: "my-6 w-23 justify-center gap-1 rounded-full px-2",
        })}>파일 선택</label>
    </div>
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
  </Dialog.Content>
</Dialog.Root>
<!-- /Video Upload Dialog -->
