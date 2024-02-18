import React from "react";
import Topbar from "@/public/topbar";
import AdminDiskonNav from "@/public/admin/adnav";
import Link from "next/link";

const EditDiskon = () => {
  return (
    <>
        <Topbar></Topbar>
        <AdminDiskonNav></AdminDiskonNav>
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl">


          <div className="grid grid-cols-4 p-6 px-16 pr-12" style={{ gridTemplateColumns: '0.7  fr 0.5fr 1fr 1fr' }}>
            <div className="col-span-4 text-center font-semi-bold text-lg mb-4 underline underline-offset-8">
              Edit Voucher
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
                htmlFor="kode"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Kode
              </label>
            </div>
            <div className="ml-8 mb-4 col-span-3 flex flex-col justify-center">
              <input
                type="kode"
                id="kode"
                name="kode"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200"
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="persentase"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Persentase
              </label>
            </div>
            <div className="mb-4 col-span-3 flex flex-col justify-center pl-8">
              <input
                type="persentase"
                id="persentase"
                name="persentase"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200"
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="nominal"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Nominal
              </label>
            </div>
            <div className="mb-4 col-span-3 flex flex-col justify-center pl-8">
              <input
                type="text"
                id="nominal"
                name="nominal"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200  "
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="expired"
                className="text-sm font-medium text-gray-600 mb-1 border-b border-black pb-1"
              >
                Expired
              </label>
            </div>
            <div className="mb-4 col-span-3 flex flex-col justify-center pl-8">
              <input
                type="text"
                id="expired"
                name="expired"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200  "
              />
            </div>
          </div>
          <div className="w-full">
          <Link
                href="diskon"
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
export default EditDiskon;
