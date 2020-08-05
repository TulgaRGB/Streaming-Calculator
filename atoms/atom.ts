import {atomFamily, selector} from "recoil/dist";

export const itemWithId = atomFamily({
  key: `item`,
  default: {
    name: 'name',
    rate: 0,
    count: 0
  },
})

export const mySelector = selector({
  key: 'MySelector',
  get: ({get}) => {
    const ids = ['Spotify', 'Deezer', 'Tidal', 'Amazon Music', 'Apple Music', 'Pandora'];
    const selectedItems = ids.map(id => get(itemWithId(id)));
    return computeTotalEarning(selectedItems);
  },
})

function computeTotalEarning(selectedItems: { name: string; count: number; rate: number; }[]): number {
  let currentTotal = 0;
  for (const streaming of selectedItems) {
   currentTotal +=  streaming.count * streaming.rate;
    if (currentTotal < 0) {
      return 0;
    }
  }
  return currentTotal;
}
