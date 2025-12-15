export function getRelativePath(path: string): string {
  // Ensure the base path ends with a slash if it's not empty/root
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${base}${cleanPath}`;
}
