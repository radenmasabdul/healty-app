import { create } from 'zustand';

export type AlertType = "success" | "error" | "info";

interface AlertState {
    message: string | null;
    type: AlertType | null;
    setAlert: (message: string, type: AlertType) => void;
    clearAlert: () => void;
};

export const useAlertStore = create<AlertState>((set) => ({
    message: null,
    type: null,

    setAlert: (message: string, type: AlertType) => set({ message, type }),
    clearAlert: () => set({ message: null, type: null })
}));