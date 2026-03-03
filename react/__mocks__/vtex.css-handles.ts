export function useCssHandles() {
  return new Proxy({}, {
    get: () => '',
  })
}
