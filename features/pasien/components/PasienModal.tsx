"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import GlobalModal from "@/components/global/GlobalModal";

import { usePasien } from "../hooks/usePasien";

export default function PasienModal() {
    const {
        openModal,
        setOpenModal,
        handleCreate,
        saveNewForm,
        handleResetForm,
        loadingFetch
    } = usePasien();

    const style = `w-full pr-4 py-2.5 text-primary border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`;

  return (
     <GlobalModal
      icon={Plus}
      name="Add Patient"
      title="Add New Patient"
      description="Please fill in the details below to create a new patient."
      className="bg-surface"
      onSubmit={saveNewForm.handleSubmit(handleCreate)}
      onCancel={handleResetForm}
      open={openModal}
      onOpenChange={setOpenModal}
      loading={loadingFetch}
    >
        <div className="space-y-5 py-5">
            <div className="space-y-3">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    className={style}
                    {...saveNewForm.register("name")}
                />
                {saveNewForm.formState.errors.name && (
                    <p className="text-red-500 text-sm">{saveNewForm.formState.errors.name.message}</p>
                )}
            </div>

            <div className="space-y-3">
                <Label htmlFor="nik">NIK</Label>
                <Input
                    type="text"
                    id="nik"
                    placeholder="NIK"
                    className={style}
                    {...saveNewForm.register("nik")}
                />
                {saveNewForm.formState.errors.nik && (
                    <p className="text-red-500 text-sm">{saveNewForm.formState.errors.nik.message}</p>
                )}
            </div>

            <div className="space-y-3">
                <Label htmlFor="diagnosis">Diagnosis</Label>
                <Input
                    type="text"
                    id="diagnosis"
                    placeholder="Diagnosis"
                    className={style}
                    {...saveNewForm.register("diagnosis")}
                />
                {saveNewForm.formState.errors.diagnosis && (
                    <p className="text-red-500 text-sm">{saveNewForm.formState.errors.diagnosis.message}</p>
                )}
            </div>

            <div className="space-y-3">
                <Label htmlFor="admissionDate">Admission Date</Label>
                <Input
                    type="date"
                    id="admissionDate"
                    min={new Date().toISOString().split("T")[0]}
                    className={style}
                    {...saveNewForm.register("admissionDate")}
                />
                {saveNewForm.formState.errors.admissionDate && (
                    <p className="text-red-500 text-sm">{saveNewForm.formState.errors.admissionDate.message}</p>
                )}
            </div>

            <div className="space-y-3">
                <Label htmlFor="doctor">Doctor</Label>
                <Input
                    type="text"
                    id="doctor"
                    placeholder="Doctor name"
                    className={style}
                    {...saveNewForm.register("doctor")}
                />
                {saveNewForm.formState.errors.doctor && (
                    <p className="text-red-500 text-sm">{saveNewForm.formState.errors.doctor.message}</p>
                )}
            </div>

            <div className="space-y-3">
                <Label htmlFor="room">Room</Label>
                <Input
                    type="text"
                    id="room"
                    placeholder="Room (e.g. Mawar 1A)"
                    className={style}
                    {...saveNewForm.register("room")}
                />
                {saveNewForm.formState.errors.room && (
                    <p className="text-red-500 text-sm">{saveNewForm.formState.errors.room.message}</p>
                )}
            </div>
        </div>
    </GlobalModal>
  )
}
