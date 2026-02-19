"use client";

import { usePasien } from "../hooks/usePasien";
import GlobalToolbar from "@/components/global/GlobalToolbar";
import GlobalDataTable from "@/components/global/GlobalDataTable";
import PasienModal from "./PasienModal";

export default function PasienList() {
  const {
    tableData,
    totalData,
    currentPage,
    loadingFetch,
    handleSearch,
    handlePageChange,
  } = usePasien();

  const columns = [
    { key: "name", header: "Name", width: "20%" },
    { key: "nik", header: "NIK", width: "18%" },
    { key: "diagnosis", header: "Diagnosis", width: "20%" },
    { key: "admissionDate", header: "Admission Date", width: "14%" },
    { key: "doctor", header: "Doctor", width: "16%" },
    { key: "room", header: "Room", width: "12%" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 md:gap-10 items-center">
        <div className="flex-1 min-w-70">
          <GlobalToolbar
            showSearch={true}
            filters={[]}
            onSearch={({ keyword }) => handleSearch({ keyword })}
          />
        </div>

        <PasienModal />
      </div>

      <GlobalDataTable
        columns={columns}
        data={tableData}
        page={currentPage}
        limit={10}
        total={totalData}
        onPageChange={handlePageChange}
        loading={loadingFetch}
      />
    </div>
  );
}