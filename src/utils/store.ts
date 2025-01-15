import {create} from 'zustand';

interface AppState {
  isDrawerOpen: boolean;
  currentScreen: string;
  changeDrawerOpenStatus: () => void;
  changeCurrentScreen: (screen: string) => void;
}

export const useAppStore = create<AppState>(set => ({
  isDrawerOpen: false,
  currentScreen: 'HomeTab',
  changeDrawerOpenStatus: () =>
    set(state => ({isDrawerOpen: !state.isDrawerOpen})),
  changeCurrentScreen: (screen: string) =>
    set(state => ({currentScreen: screen})),
}));
