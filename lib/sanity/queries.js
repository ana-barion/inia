import { client } from "@/sanity/lib/client";

export async function getHeader() {
  return await client.fetch(`*[_type == "header"][0]`);
}

export async function getFooter() {
  return await client.fetch(`*[_type == "footer"][0]`);
}
