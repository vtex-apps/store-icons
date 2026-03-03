declare module 'vtex.css-handles' {
  export function useCssHandles(handles: readonly string[]): {
    [key: string]: string
  }
}
