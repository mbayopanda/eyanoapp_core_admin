import create from 'zustand';

const createConfigSlice = (set) => ({
  version : '1.0.0',
  navbarBreakPoint : 'xl',
  topNavbarBreakpoint : 'lg',
  isFluid: true,
  isRTL: false,
  isDark: false,
  showBurgerMenu: false,
  isNavbarCollapsed: false,
  isSidebarCollapsed: false,
  navbarStyle: 'transparent',
  toggleFluid: () => set(state => ({ isFluid: !state.isFluid })),
  toggleRTL: () => set(state => ({ isRTL: !state.isRTL })),
  toggleDark: () => set(state => ({ isDark: !state.isDark })),
  toggleBurgerMenu: () => set(state => ({ showBurgerMenu: !state.showBurgerMenu })),
  toggleNavbarCollapsed: () => set(state => ({ isNavbarCollapsed: !state.isNavbarCollapsed })),
  toggleSidebarCollapsed: () => set(state => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
});

const createSessionSlice = set => ({
  ssoServer: '',
  setSsoServer: (value) => set(() => ({ ssoServer: value })),
  userEmail: '',
  setUserEmail: (value) => set(() => ({ userEmail: value })),
  userName: '',
  setUserName: (value) => set(() => ({ userName: value })),
  userIsAdmin: '',
  setUserIsAdmin: (value) => set(() => ({ userIsAdmin: value })),
});

const useStore = create( (set, get) => ({
   ...createConfigSlice(set, get),
   ...createSessionSlice(set, get),
}));

export default useStore;