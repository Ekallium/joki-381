import { IoCashOutline } from "react-icons/io5";
import { FiCoffee, FiUsers } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Link from "next/link";
import React from "react";

const CashierProdukNav = () => {
  return (
    <>
    <aside className="bg-white text-white hidden md:block w-16 fixed top-0 left-0 h-full z-30 border-r-2  border-gray-300">
      <nav className="flex flex-col pt-4 px-4">
        <Link
          href="transaksi"
          className="mx-auto my-12 p-2 rounded-md"
        >
          <IoCashOutline className="text-gray-600 size-5"></IoCashOutline>
        </Link>
        <Link href="produk" className="mx-auto p-2 mb-12 rounded-md  bg-blue-200">
          <FiCoffee className="text-blue-600 size-5"></FiCoffee>
        </Link>
        <Link
          href="member"
          className="mx-auto p-2 mb-12 rounded-md"
        >
          <FiUsers className="text-gray-600 size-5 "></FiUsers>
        </Link>
        <Link href="laporan" className="mx-auto p-2 rounded-md">
          <HiOutlineDocumentText className="text-gray-600 size-5"></HiOutlineDocumentText>
        </Link>
      </nav>
      </aside>
    </>
  );
};
export default CashierProdukNav;
