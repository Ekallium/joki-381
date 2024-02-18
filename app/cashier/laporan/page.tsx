import React from "react";
import Link from "next/link";
import Topbar from "@/public/topbar";
import CashierLaporanNav from "@/public/kasir/clnav";
import { FiEye, FiPrinter } from "react-icons/fi";
import IsiTabel6 from "@/public/tabel/isitabel6";

const Laporan = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">
        <Topbar></Topbar>
            <CashierLaporanNav></CashierLaporanNav>
            <div className="overflow-auto mt-32">
              <div className="flex h-10">
                <input
                  type="text"
                  id="searchbar"
                  name="searchbar"
                  className=" rounded-md bg-white border-gray-200 border-2 w-1/9 h-9 ml-auto px-2 mt-1"
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
                    <th scope="col" className="w-1/6 p-2 font-normal">
                      No id
                    </th>
                    <th scope="col" className="w-1/6 p-2 font-normal">
                      Tanggal
                    </th>
                    <th scope="col" className="w-1/6 p-2 font-normal">
                      Kasir
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Member
                    </th>
                    <th scope="col" className="w-1/6 p-2 font-normal">
                      Voucher
                    </th>
                    <th scope="col" className="w-1/12 p-2 font-normal">
                      Total
                    </th>
                    <th scope="col" className="w-1/12 p-2 font-normal">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ganjil">
                    <td>ORDR-AJ6LK6</td>
                    <td>06/02/2024</td>
                    <td>Yono Karbu</td>
                    <td>Alip Starboy</td>
                    <td>B56HJK</td>
                    <td>20</td>
                    <td className="flex"> <Link href="lihatlaporan">
                    <FiEye className="size-6 pt-1 mr-5 my-auto"></FiEye>
                    </Link>
                    <Link href=""><FiPrinter className="size-7 my-auto"></FiPrinter></Link> 
                    </td>
                  </tr>
                  <tr className="genap">
                    <td>ORDR-AJ6LK6</td>
                    <td>12/02/2024</td>
                    <td>Yono Karbu</td>
                    <td>Alip Starboy</td>
                    <td>B56HJK</td>
                    <td>15</td>
                    <td className="flex"> <Link href="lihatlaporan">
                    <FiEye className="size-6 pt-1 mr-5 my-auto"></FiEye>
                    </Link>
                    <Link href=""><FiPrinter className="size-7 my-auto"></FiPrinter></Link> 
                    </td>
                  </tr>
                  <IsiTabel6></IsiTabel6>
                  <IsiTabel6></IsiTabel6>
                  <IsiTabel6></IsiTabel6>
                  <IsiTabel6></IsiTabel6>
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

export default Laporan;
