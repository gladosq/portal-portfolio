import {create} from 'zustand';

interface PortalState {
  isMainPageScrolled?: boolean;
  setIsMainPageScrolled: (value: boolean) => void;
}

const usePortalStore = create<PortalState>((set) => ({
  isMainPageScrolled: undefined,
  setIsMainPageScrolled: (value) => set(() => ({isMainPageScrolled: value}))
}));

export default usePortalStore;
