// Available API keys for rotation
const API_KEYS = [
  'AIzaSyDUyf6-WQGVCfvExItqgDdGyX7BzJ6Lul8',
  'AIzaSyBmKrslIELV2wP6dIMmVD2zidgGDg3FxH8',
  'AIzaSyCrUiefbBnL90V0wCgfDmV8GxmCiS58--c'
];

let currentKeyIndex = 0;

export function getNextApiKey(): string {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return key;
}