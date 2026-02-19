"use client";

import { useState, useEffect, useCallback } from "react";
import { usePasienStore } from "../stores/pasienStore";
import { pasienService } from "../services/pasien.api";
import { pasienSchema, PasienSchema, PasienSchemaUpdate } from "../schemas/pasien.schema";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAlertStore } from "@/store/useAlertStore";

interface NewPatient {
  name: string;
  nik: string;
  diagnosis: string;
  admissionDate: string;
  doctor: string;
  room: string;
};

export function usePasien() {
  const {
    patients,
    loading,
    setPatients,
    addPatient,
    updatePatient,
    deletePatient,
    setLoading,
  } = usePasienStore();

  const { setAlert } = useAlertStore();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const limit = 10;

  const fetchPatients = useCallback(async () => {
    try {
      setLoading(true);
      const data = await pasienService.fetchPatients();
      setPatients(data);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setPatients]);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const filteredData = patients.filter((p) => {
    if (!keyword) return true;
    const lower = keyword.toLowerCase();
    return (
      p.name.toLowerCase().includes(lower) ||
      p.nik.includes(lower) ||
      p.diagnosis.toLowerCase().includes(lower) ||
      p.doctor.toLowerCase().includes(lower) ||
      p.room.toLowerCase().includes(lower)
    );
  });

  const totalData = filteredData.length;
  const totalPages = Math.ceil(totalData / limit);
  const tableData = filteredData.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleSearch = ({ keyword }: { keyword: string }) => {
    setKeyword(keyword);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const newUserInitial: NewPatient = {
    name: "",
    nik: "",
    diagnosis: "",
    admissionDate: "",
    doctor: "",
    room: "",
  };

  const saveNewForm = useForm<PasienSchema>({
    resolver: zodResolver(pasienSchema),
    defaultValues: newUserInitial,
  });

   const handleResetForm = () => {
    saveNewForm.reset();
  };

  const handleCreate = async (payload: PasienSchema) => {
    try {
      setLoading(true);
      const newPatient = await pasienService.createPatient(payload);
      
      addPatient(newPatient);
      setAlert("Patient created successfully", "success");

      handleResetForm();
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to create patient:", error);
      setAlert("Invalid", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (payload: PasienSchemaUpdate) => {
    try {
      setLoading(true);
      const updated = await pasienService.updatePatient(payload);
      updatePatient(updated);
    } catch (error) {
      console.error("Failed to update patient:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      await pasienService.deletePatient(id);
      deletePatient(id);
    } catch (error) {
      console.error("Failed to delete patient:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    tableData,
    totalData,
    totalPages,
    currentPage,
    keyword,
    openModal,
    setOpenModal,
    loadingFetch: loading,
    handleSearch,
    handlePageChange,
    handleCreate,
    saveNewForm,
    handleResetForm,
    handleUpdate,
    handleDelete,
  };
}