export function load({ url }) {
  return { cmd: url.searchParams.get("cmd") };
}
