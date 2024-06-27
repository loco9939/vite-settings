import { create } from 'zustand';

type AppStore = {
  bears: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
  removeAllBears: () => void;
};

const appStore = create<AppStore>(set => ({
  bears: 0,
  increase: by => set(state => ({ bears: state.bears + by })),
  decrease: by =>
    set(state => ({ bears: state.bears > 0 ? state.bears - by : state.bears })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default appStore;
