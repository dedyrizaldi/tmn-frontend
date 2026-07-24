import { fetchHome } from "@/repositories/home.repository";

export async function getHome() {
  return await fetchHome();
}
