import { inpatientPatients, InpatientPatient } from "../stores/data";
import { PasienSchema, PasienSchemaUpdate } from "../schemas/pasien.schema";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const pasienService = {
  async fetchPatients(): Promise<InpatientPatient[]> {
    await delay(500);
    return [...inpatientPatients];
  },

  async createPatient(payload: PasienSchema): Promise<InpatientPatient> {
    await delay(500);

    const newPatient: InpatientPatient = {
      id: Date.now(),
      name: payload.name,
      nik: payload.nik,
      diagnosis: payload.diagnosis,
      admissionDate: payload.admissionDate,
      doctor: payload.doctor,
      room: payload.room,
    };

    inpatientPatients.push(newPatient);

    return newPatient;
  },

  async updatePatient(payload: PasienSchemaUpdate): Promise<InpatientPatient> {
    await delay(500);

    const index = inpatientPatients.findIndex((p) => p.id === payload.id);
    if (index === -1) throw new Error("Patient not found");

    const updated: InpatientPatient = {
      id: payload.id,
      name: payload.name,
      nik: payload.nik,
      diagnosis: payload.diagnosis,
      admissionDate: payload.admissionDate,
      doctor: payload.doctor,
      room: payload.room,
    };

    inpatientPatients[index] = updated;
    return updated;
  },

  async deletePatient(id: number): Promise<{ id: number }> {
    await delay(500);

    const index = inpatientPatients.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Patient not found");

    inpatientPatients.splice(index, 1);
    return { id };
  },
};