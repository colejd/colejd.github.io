/**
 * Concatenate the given path strings, preventing "//" in the middle.
 */
export function concatPaths(path1, path2) {
  // Remove trailing slash
  if (path1.charAt(path1.length - 1) === "/") {
    path1 = path1.substring(0, path1.length - 1)
  }
  // Remove leading slash
  if (path2[0] === "/") {
    path2 = path2.substring(1)
  }
  return `${path1}/${path2}`
}
