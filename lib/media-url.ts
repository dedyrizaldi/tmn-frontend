const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export function mediaUrl(path?: string | null) {
  if (!path) return "/images/placeholder.webp";

  if (path.startsWith("http")) {
    return path;
  }

  return `${API_URL}${path}`;
}
