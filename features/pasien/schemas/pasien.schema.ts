import { z } from "zod";

export const pasienSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" }),

    nik: z
        .string()
        .min(1, { message: "NIK is required" })
        .length(16, { message: "NIK must be exactly 16 characters" })
        .regex(/^\d+$/, { message: "NIK must contain numbers only" }),

    diagnosis: z
        .string()
        .min(1, { message: "Diagnosa is required" }),

    admissionDate: z
        .string()
        .min(1, { message: "Admission date is required" })
        .refine((val) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const inputDate = new Date(val);
            return inputDate >= today;
        }, { message: "Admission date cannot be in the past" }),

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
        .length(16, { message: "NIK must be exactly 16 characters" })
        .regex(/^\d+$/, { message: "NIK must contain numbers only" }),

    diagnosis: z
        .string()
        .min(1, { message: "Diagnosa is required" }),

    admissionDate: z
        .string()
        .min(1, { message: "Admission date is required" })
        .refine((val) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const inputDate = new Date(val);
            return inputDate >= today;
        }, { message: "Admission date cannot be in the past" }),

    doctor: z
        .string()
        .min(1, { message: "Doctor is required" }),
    
    room: z
        .string()
        .min(1, { message: "Room is required" }),
});

export type PasienSchema= z.infer<typeof pasienSchema>;
export type PasienSchemaUpdate = z.infer<typeof pasienSchemaUpdate>;