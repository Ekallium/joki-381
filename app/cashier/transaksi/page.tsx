import React from "react";
import IsiDashboard from "@/public/isidashboard";
import Topbar from "@/public/topbar";
import SearchBar from "@/public/searchbar";
import Link from "next/link";
import {IoTrashOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoCashOutline} from "react-icons/io5";
import { FiCoffee, FiUsers } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Image from "next/image";
const Transaksi = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">

        <Topbar></Topbar>

        <section className="flex flex-row h-screen">
        <aside className="bg-white text-white hidden md:block w-16 fixed top-0 left-0 h-full z-30 border-r-2  border-gray-300">
        <nav className="flex flex-col pt-4 px-4">
          <Link href="transaksi" className="mx-auto my-12 p-2 rounded-md  bg-blue-200">
            <IoCashOutline className=" text-blue-600 size-5"></IoCashOutline>
          </Link>
          <Link href="produk" className="mx-auto p-2 mb-12 rounded-md">
            <FiCoffee className="text-gray-600 size-5"></FiCoffee>
          </Link>
          <Link
            href="member"
            className="mx-auto p-2 mb-12 rounded-md"
          >
            <FiUsers className="text-gray-600 size-5"></FiUsers>
          </Link>
          <Link href="laporan" className="mx-auto p-2 rounded-md">
            <HiOutlineDocumentText className="text-gray-600 size-5"></HiOutlineDocumentText>
          </Link>
        </nav>
      </aside>


        {/* transaction bar */}
        <aside className="bg-white text-white hidden md:block w-1/3 fixed top-0 right-0 h-full z-10 border-r-2 border border-gray-300">
            <div className="h-3/4 border-b-2 border-gray-300 overflow-auto">
              <nav className="flex flex-col px-4">
                <div
                  className="grid grid-cols-2 gap-y-6 w-auto mt-20 "
                  style={{ gridTemplateColumns: "1.5fr 1fr" }}
                >
                  <div className="text-black col-span-1">
                    <div className="inline text-sm font-bold text-left">
                      Fresh Sariwa Salad{" "}
                    </div>
                    <span className="text-gray-400 text-sm font-normal text-right inline ml-2">
                      Rp. 20.000
                    </span>
                    <div className="flex flex-row mt-1">
                      <Link
                        href="#"
                        type="button"
                        className="bg-white border border-gray-600 text-gray-600 hover:bg-gray-100 rounded-sm px-1 mt-3 py-1 mb-1"
                      >
                        <FaMinus className="text-gray size-3"></FaMinus>
                      </Link>
                      <p className="mx-3 mt-3 text-sm font-normal">10</p>
                      <Link
                        href="#"
                        type="button"
                        className="border border-gray-600 bg-blue-500 text-white hover:bg-blue-600 rounded-sm text-sm mt-3 px-1 py-1 mb-1 mr-9"
                      >
                        <FaPlus className="text-white size-3"></FaPlus>
                      </Link>
                      <Link
                        href="#"
                        type="button"
                        className="border border-gray-600 bg-red-500 text-white hover:bg-red-600 rounded-sm text-sm mt-3 ml-auto mr-auto px-1 mb-1 py-1"
                      >
                        <IoTrashOutline className="text-white"></IoTrashOutline>
                      </Link>
                    </div>
                  </div>
                  <div className="text-blue-500 text-right my-auto font-bold col-span-1 text-md">
                    Rp. 200.000
                  </div>
                  <div className="text-black col-span-1">
                    <div className="inline text-sm font-bold text-left">
                      Fresh Sariwa Salad{" "}
                    </div>
                    <span className="text-gray-400 text-sm font-normal text-right inline ml-2">
                      Rp. 20.000
                    </span>
                    <div className="flex flex-row mt-1">
                      <Link
                        href="#"
                        type="button"
                        className="bg-white border border-gray-600 text-gray-600 hover:bg-gray-100 rounded-sm px-1 mt-3 py-1 mb-1"
                      >
                        <FaMinus className="text-gray size-3"></FaMinus>
                      </Link>
                      <p className="mx-3 mt-3 text-sm font-normal">10</p>
                      <Link
                        href="#"
                        type="button"
                        className="border border-gray-600 bg-blue-500 text-white hover:bg-blue-600 rounded-sm text-sm mt-3 px-1 py-1 mb-1 mr-9"
                      >
                        <FaPlus className="text-white size-3"></FaPlus>
                      </Link>
                      <Link
                        href="#"
                        type="button"
                        className="border border-gray-600 bg-red-500 text-white hover:bg-red-600 rounded-sm text-sm mt-3 ml-auto mr-auto px-1 mb-1 py-1"
                      >
                        <IoTrashOutline className="text-white"></IoTrashOutline>
                      </Link>
                    </div>
                  </div>
                  <div className="text-blue-500 text-right my-auto font-bold col-span-1 text-md">
                    Rp. 200.000
                  </div>
                  <div className="text-black col-span-1">
                    <div className="inline text-sm font-bold text-left">
                      Fresh Sariwa Salad{" "}
                    </div>
                    <span className="text-gray-400 text-sm font-normal text-right inline ml-2">
                      Rp. 20.000
                    </span>
                    <div className="flex flex-row mt-1">
                      <Link
                        href="#"
                        type="button"
                        className="bg-white border border-gray-600 text-gray-600 hover:bg-gray-100 rounded-sm px-1 mt-3 py-1 mb-1"
                      >
                        <FaMinus className="text-gray size-3"></FaMinus>
                      </Link>
                      <p className="mx-3 mt-3 text-sm font-normal">10</p>
                      <Link
                        href="#"
                        type="button"
                        className="border border-gray-600 bg-blue-500 text-white hover:bg-blue-600 rounded-sm text-sm mt-3 px-1 py-1 mb-1 mr-9"
                      >
                        <FaPlus className="text-white size-3"></FaPlus>
                      </Link>
                      <Link
                        href="#"
                        type="button"
                        className="border border-gray-600 bg-red-500 text-white hover:bg-red-600 rounded-sm text-sm mt-3 ml-auto mr-auto px-1 mb-1 py-1"
                      >
                        <IoTrashOutline className="text-white"></IoTrashOutline>
                      </Link>
                    </div>
                  </div>
                  <div className="text-blue-500 text-right my-auto font-bold col-span-1 text-md">
                    Rp. 200.000
                  </div>
                </div>
              </nav>
            </div>

            <div className="h-auto p-4">
              <div
                className="grid grid-cols-2"
                style={{ gridTemplateColumns: "1fr 1.5fr" }}
              >
                <div className="col-span-1 flex flex-col mt-2">
                  <label htmlFor="voucher" className="text-sm text-gray-400">
                    Voucher / Member
                  </label>
                </div>
                <div className="col-span-1 flex flex-col">
                  <input
                    type="text"
                    id="voucher"
                    name="voucher"
                    className="border-2 rounded-md h-7 bg-white border-gray-300 text-black"
                  />
                  <Link
                    href="#"
                    type="button"
                    className="bg-blue-500 text-white hover:bg-blue-600 rounded-md w-12 text-xs ml-auto px-3 py-1 mt-1 text-center"
                  >
                    Cari
                  </Link>
                </div>
                <div className="text-gray-400 text-md text-left col-span-1 mt-3 text-sm">
                  Total
                </div>
                <div className="text-blue-500 text-right text-lg my-auto font-bold col-span-1 mb-3 mt-3">
                  Rp. 1.809.000
                </div>
                <div className="col-span-2 mx-5 text-center mt-2">
                  <Link
                    href="#"
                    type="button"
                    className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg w-full text-sm py-2"
                  >
                    Bayar Pemesanan
                  </Link>
                </div>
              </div>
            </div>
          </aside>

        <SearchBar></SearchBar>

        {/* grid item */}
          <div className="flex flex-col flex-grow w-full pl-6 pr-1/5">
            <div className="mt-14 w-3/4 ml-10 bg-gray-200">
              <div className="w-5/6 overflow-auto">
                <div className="grid grid-cols-3 w-full gap-8 p-4 pl-6 ">
                <div className="col-span-1 w-auto h-70 m-auto ">
                    <div className="max-h-40 flex flex-col">
                      <Image
                        src="/img1.jpg"
                        alt="Salad"
                        height={200}
                        width={500}
                        className="overflow-hidden rounded-t-xl"
                      ></Image>
                    </div>
                    <div className="w-full flex flex-col bg-white rounded-b-lg p-4">
                      <div className="font-bold text-sm">
                        Fresh Sariwa Salad
                      </div>
                      <div className="text-gray-400 text-xs my-4 mt-1">Stok: 20</div>
                      <div className="flex">
                        <div className="text-blue-500 font-bold flex flex-col text-sm ">
                          Rp. 20.000
                        </div>
                        <Link
                          href="#"
                          type="button"
                          className="bg-blue-500 text-white hover:bg-blue-600 rounded-sm text-xs p-1 font-normal ml-auto px-3"
                        >
                          Tambah
                        </Link>
                      </div>
                      </div>
                  </div>   
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                  <IsiDashboard></IsiDashboard>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Transaksi;

