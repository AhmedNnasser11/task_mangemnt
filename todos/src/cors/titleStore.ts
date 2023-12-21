import { create } from 'zustand'

type TitleState = {
  title: string;
  setPgeTitle: (title: string) => void;
}

export const useTitleStore = create<TitleState>((set) => ({
  title: "",
  setPgeTitle: (title: string) => set({ title }),
}));