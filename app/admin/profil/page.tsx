import React from "react";
import Image from "next/image";
import AdminProfilNav from "@/public/admin/aprnav";
import Link from "next/link";
import { GrLogout } from "react-icons/gr";

const Profil = () => {
  return (
    <>
        <nav className="flex items-center bg-white px-4 py-2 fixed top-0 w-full z-20 border-b-2 border-gray-300">
          
          <div className="font-bold ml-16 text-xl text-gray-500">
            Edit Tenant
          </div>
          <div className="flex items-center ml-auto">
            <div className="text-sm font-bold">
              Yono Karbu
              <p className="font-semibold text-gray-500 text-sm">Kasir</p>
            </div>
          </div>
          <Link href="#">
            <GrLogout className="text-red-600 size-6 mx-12 mr-6"></GrLogout>
          </Link>
        </nav>
        <AdminProfilNav></AdminProfilNav>
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <Image 
            width={160}
            height={160}
            src=""
            alt="Profile"
            className="bg-gray-300 mx-auto rounded-full mt-9 mb-7"></Image>
            <button className="bg-blue-200 text-blue-500 p-1 px-4 rounded-sm mb-12">CHANGE PHOTO</button>
        <div className=" rounded-2xl shadow-2xl max-w-3xl">


          <div className="grid grid-cols-4 p-6" style={{ gridTemplateColumns: '0.7  fr 0.5fr 1fr 1fr' }}>


            <div className="my-3 col-span-1 flex flex-col justify-end pr-4 pb-1 relative ">
              <label
                htmlFor="namaPemilik"
                className="text-sm font-bold text-gray-600 mb-1 pb-1"
              >
                Nama
              </label>
            </div>
            <div className="ml-8 col-span-3 flex flex-col ">
              <input
                type="text"
                id="namaPemilik"
                name="namaPemilik"
                className="mt-2 p-1 w-80 border rounded-md bg-blue-200"
              />
            </div>

            <div className="mb-3 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="email"
                className="text-sm font-bold text-gray-600 mb-1 pb-1"
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

            <div className="mb-3 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="alamat"
                className="text-sm font-bold text-gray-600 mb-1 pb-1"
              >
                Alamat
              </label>
            </div>
            <div className="mb-4 col-span-3 flex flex-col justify-center pl-8">
              <input
                type="text"
                id="alamat"
                name="alamat"
                className="mt-4 p-1 w-full border rounded-md bg-blue-200 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-end ml-auto">
        <button className="p-1 bg-gray-400 px-9 mb-6 font-semibold">Cancel</button>
        <button className="p-1 bg-blue-200 text-blue-500 ml-12 mr-9 mb-6 px-10 font-semibold">Save</button>
      </div>
    </main>
      </>
  );
}
export default Profil;
