import { fail } from "@sveltejs/kit";

export function load({ url }) {
  return { cmd: url.searchParams.get("cmd") };
}

export const actions = {
  // upload: async ({ cookies, request }) => {
  upload: async ({ request }) => {
    const formData = await request.formData();

    try {
    } catch (error: any) {
      return fail(422, {
        // description: formData.get("description") as string,
        description: "The video-file does not exist.",
        error: error.message,
      });
    }

    console.debug(
      `formData.input-file = ${formData.get("video-file") ? (formData.get("video-file") as File).name : "false"}`
    );

    // return { success: true, id: cookies.get('userid') };
    return { "video-file": { success: true } };
  },
};
