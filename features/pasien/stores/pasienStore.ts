import { create } from "zustand";
import { InpatientPatient } from "./data";

type PasienState = {
  patients: InpatientPatient[];
  loading: boolean;
  setPatients: (patients: InpatientPatient[]) => void;
  addPatient: (patient: InpatientPatient) => void;
  updatePatient: (patient: InpatientPatient) => void;
  deletePatient: (id: number) => void;
  setLoading: (loading: boolean) => void;
};

export const usePasienStore = create<PasienState>((set) => ({
  patients: [],
  loading: false,

  setPatients: (patients) => set({ patients }),

  addPatient: (patient) =>
    set((state) => ({
      patients: [patient, ...state.patients],
    })),

  updatePatient: (patient) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patient.id ? patient : p
      ),
    })),

  deletePatient: (id) =>
    set((state) => ({
      patients: state.patients.filter((p) => p.id !== id),
    })),

  setLoading: (loading) => set({ loading }),
}));