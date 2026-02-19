import { z } from "zod";

export const pasienSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" }),

    nik: z
        .string()
        .min(1, { message: "NIK is required" })
        .min(16, { message: "NIK must be at least 16 characters" }),

    diagnosis: z
        .string()
        .min(1, { message: "Diagnosa is required" }),

    admissionDate: z
        .string()
        .min(1, { message: "Admission date is required" }),

    doctor: z
        .string()
        .min(1, { message: "Doctor is required" }),
    
    room: z
        .string()
        .min(1, { message: "Room is required" }),
});

export const pasienSchemaUpdate = z.object({
        id: z
        .number()
        .min(1, { message: "ID is required" }),

    name: z
        .string()
        .min(1, { message: "Name is required" }),

    nik: z
        .string()
        .min(1, { message: "NIK is required" })
        .min(16, { message: "NIK must be at least 16 characters" }),

    diagnosis: z
        .string()
        .min(1, { message: "Diagnosa is required" }),

    admissionDate: z
        .string()
        .min(1, { message: "Admission date is required" }),

    doctor: z
        .string()
        .min(1, { message: "Doctor is required" }),
    
    room: z
        .string()
        .min(1, { message: "Room is required" }),
});

export type PasienSchema= z.infer<typeof pasienSchema>;
export type PasienSchemaUpdate = z.infer<typeof pasienSchemaUpdate>;