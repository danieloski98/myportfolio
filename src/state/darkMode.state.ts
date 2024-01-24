import { create } from 'zustand'

type State = {
    isDarkMode: boolean;
    toggleDarkMode: () => void
}

// const isOn = localStorage.getItem('isDarkMode') as string | null;
export const useDarkModeToggle = create<State>((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state) => {
        const isOn = state.isDarkMode ? 'false':'true';
        localStorage.setItem('isDarkMode', isOn);
        return { ...state, isDarkMode: !state.isDarkMode }
    })
}))