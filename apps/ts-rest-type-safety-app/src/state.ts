import { create } from 'zustand';

interface State {
  searchString: string;
  setSearchString: (searchString: string) => void;
}

// @ts-ignore
export const useStore = create<State>((set) => ({
  searchString: '',
  setSearchString: (searchString: string) => set({ searchString }),
}));
