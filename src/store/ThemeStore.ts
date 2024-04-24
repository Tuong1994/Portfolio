import { ComponentColor } from "@/common/type";
import { StateCreator, create } from "zustand";

export type ThemeColor = Exclude<ComponentColor, "black" | "white" | 'gray'>;

interface ThemeState {
  color: ThemeColor;
  setColor: (color: ThemeColor) => void;
}

const store: StateCreator<ThemeState> = (set) => ({
  color: "blue",
  setColor: (color) => set((state) => ({ ...state, color })),
});

const useThemeStore = create(store);

export default useThemeStore;
