import { atomFamily, selector, atom } from "recoil";

export const itemWithId = atomFamily({
  key: `item`,
  default: {
    name: "name",
    rate: 0,
    count: 0,
  },
});

export const mySelector = selector({
  key: "MySelector",
  get: ({ get }) => {
    const ids = [
      "Spotify",
      "Deezer",
      "Tidal",
      "Amazon Music",
      "Apple Music",
      "Youtube Music",
      "Napster",
    ];
    const selectedItems = ids.map((id) => get(itemWithId(id)));
    return computeTotalEarning(selectedItems);
  },
});

function computeTotalEarning(
  selectedItems: { name: string; count: number; rate: number }[]
): number {
  let currentTotal = 0;
  for (const streaming of selectedItems) {
    currentTotal += streaming.count * streaming.rate;
    if (currentTotal < 0) {
      return 0;
    }
  }
  return currentTotal;
}

export type Currency = "USD" | "GBP" | "EUR";
export type CurrencySymbol = "$" | "£" | "€";

export const itemCurrencyActive = atom({
  key: "activeCurrency",
  default: {
    name: "USD" as Currency,
    rate: 1,
    symbol: "$" as CurrencySymbol,
  },
});

export const currencySelector = selector({
  key: "CurrencySelector",
  get: ({ get }) => {
    return get(itemCurrencyActive);
  },
});

export const additionalStreamingServicesExpanded = atom({
  key: "openedAdditionalStreamingServices",
  default: {
    isExpanded: false,
  },
});

export const additionalStreamingServicesExpandedSelector = selector({
  key: "AdditionalStreamingServicesExpanded",
  get: ({ get }) => {
    return get(additionalStreamingServicesExpanded);
  },
});
