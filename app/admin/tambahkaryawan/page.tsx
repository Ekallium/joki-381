import React from "react";
import Topbar from "@/public/topbar";
import AdminKaryawanNav from "@/public/admin/aknav";
import Link from "next/link";

const TambahKaryawan = () => {
  return (
    <>
        <Topbar></Topbar>
        <AdminKaryawanNav></AdminKaryawanNav>
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl">


          <div className="grid grid-cols-4 p-6 px-16 pr-12" style={{ gridTemplateColumns: '0.7  fr 0.5fr 1fr 1fr' }}>
            <div className="col-span-4 text-center font-semi-bold text-lg mb-4 underline underline-offset-8">
              Tambah Karyawan
            </div>


            <div className="mt-4 mb-4 col-span-1 flex flex-col justify-end pr-4 pb-1 relative ">
              <label
                htmlFor="namaPemilik"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Nama
              </label>
            </div>
            <div className="ml-8 col-span-3 flex flex-col ">
              <input
                type="text"
                id="namaPemilik"
                name="namaPemilik"
                className="mt-4 p-1 w-80 border rounded-md bg-blue-200"
              />
            </div>


            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="telepon"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Telepon
              </label>
            </div>
            <div className="ml-8 mb-4 col-span-3 flex flex-col justify-center">
              <input
                type="tel"
                id="telepon"
                name="telepon"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200"
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Email
              </label>
            </div>
            <div className="mb-4 col-span-3 flex flex-col justify-center pl-8">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200"
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="alamat"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Role
              </label>
            </div>
            <div className="mb-4 col-span-3 flex flex-col justify-center pl-8">
              <input
                type="text"
                id="alamat"
                name="alamat"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200  "
              />
            </div>
          </div>
          <div className="w-full">
          <Link
                href="karyawan"
                type="button"
                className="mb-3 bg-blue-500 text-white p-1 hover:bg-blue-600 border border-black rounded-md w-24"
              >
                Selesai
              </Link>
          </div>
        </div>
      </div>
    </main>
      </>
  );
}
export default TambahKaryawan;
