/** init theme */
const IS_DARK =
  window.localStorage.theme === 'dark' ||
  (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (IS_DARK) document.documentElement.dataset.mode = 'dark';
