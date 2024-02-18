import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Topbar from "@/public/topbar";
import AdminKaryawanNav from "@/public/admin/aknav";
import IsiTabel from "@/public/tabel/isitabel";
import { SlNote } from "react-icons/sl";
import { HiTrash } from "react-icons/hi2";

const Karyawan = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">
        <Topbar></Topbar>
            <AdminKaryawanNav></AdminKaryawanNav>
            <div className="overflow-auto mt-32">
              <div className="flex h-10">
                <Link
                  href="tambahkaryawan"
                  type="button"
                  className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-600 border-2 rounded-xl w-25 ml-24 text-sm"
                >
                  <FaPlus className="text-white inline-flex justify-center mr-1 mb-1 text-xs"></FaPlus>
                  Tambah
                </Link>
                <input
                  type="text"
                  id="searchbar"
                  name="searchbar"
                  className=" rounded-md bg-white border-gray-200 border-2 w-1/9 h-9 ml-auto px-2 mt-1"
                  placeholder="&#xf002;    Cari disini..."
                />
                <Link
                  href="#"
                  type="button"
                  className="bg-blue-500 text-white p-2 px-6 hover:bg-blue-600 border-2 rounded-xl w-1/15 ml-8 text-sm mr-4"
                >
                  Cari
                </Link>
              </div>

              <table className="mx-auto ml-20 flex-grow border-2 p-16 mr-4 mt-4 text-center">
                <thead>
                  <tr className="text-white bg-blue-400">
                    <th scope="col" className="w-1/15 p-2 font-normal">
                      No
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Nama
                    </th>
                    <th scope="col" className="w-1/5 p-2 font-normal">
                      Telepon
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Email
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Role
                    </th>
                    <th scope="col" className="w-1/9 p-2 font-normal">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ganjil">
                    <td>1</td>
                    <td>Arthur BoreUp</td>
                    <td>085745786742</td>
                    <td className="underline">arthurlaksana@gmail.com</td>
                    <td>Kasir</td>
                    <td className="flex"> <Link href="editkaryawan">
                    <SlNote className="size-6 pt-1 mr-5 my-auto"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-auto"></HiTrash></Link> 
                    </td>
                  </tr>
                  <tr className="genap">
                    <td>2</td>
                    <td>Arthur BoreUp</td>
                    <td>085745786742</td>
                    <td className="underline">arthurlaksana@gmail.com</td>
                    <td>Kasir</td>
                    <td className="flex"> <Link href="editkaryawan">
                    <SlNote className="size-6 pt-1 mr-5 my-auto"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-auto"></HiTrash></Link> 
                    </td>
                  </tr>
                  <IsiTabel></IsiTabel>
                  <IsiTabel></IsiTabel>
                  <IsiTabel></IsiTabel>
                  <IsiTabel></IsiTabel>
                </tbody>
              </table>
            </div>
            <div className="ml-28 mt-7 inline-flex">
              <Link
                href="#"
                type="button"
                className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-600 border-2 rounded-md w-1/14 ml-auto text-sm border-blue-200"
              >
                Previous
              </Link>
              <Link
                href="#"
                type="button"
                className="bg-white text-black w-8 border-2 rounded-md w-1/14 text-lg text-center h-9 border-blue-200"
              >
                1
              </Link>
              <Link
                href="#"
                type="button"
                className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-600 border-2 rounded-md w-1/14 text-sm mr-8 border-blue-200"
              >
                Next
              </Link>
            </div>
            

          <div className="flex flex-col flex-grow w-full">
            
          </div>
      </main>
    </>
  );
};

export default Karyawan;
