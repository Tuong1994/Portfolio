import { StateCreator, create } from "zustand";

type Mode = "dark" | "light";

interface ModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const store: StateCreator<ModeState> = (set) => ({
  mode: "light",
  setMode: (mode) => set((state) => ({ ...state, mode })),
});

const useModeStore = create(store);

export default useModeStore;
