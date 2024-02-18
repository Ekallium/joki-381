import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import React from "react";
import Link from "next/link";
import {IoTrashOutline } from "react-icons/io5";
const TransaksiBar = () => {
    return(
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
    )
}
export default TransaksiBar;