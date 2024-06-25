import { atom, selector } from "recoil";
import { themes } from "../theme";

export const themeAtom = atom({
  key: "themeAtom",
  default: localStorage.getItem("theme") || "dark",
});

export const themeSelector = selector({
  key: "themeSelecetor",
  get: ({ get }) => {
    const theme = get(themeAtom);
    return themes[theme];
  },
});
