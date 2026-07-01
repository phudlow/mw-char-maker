export const threshold = 1920;

export function isMobileViewWidth() {
  return screen.width < threshold ? true : false;
}
