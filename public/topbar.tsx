import Image from "next/image";
import React from "react";
import { SlNote } from "react-icons/sl";
import { GrLogout } from "react-icons/gr";
import Link from "next/link";
const Topbar = () => {
    return(
        <>
        <nav className="flex items-center bg-white px-4 py-2 fixed top-0 w-full z-20 border-b-2 border-gray-300">
          <Image
            width={10}
            height={10}
            src=""
            alt="Profile"
            className="bg-gray-300 ml-16 w-12 h-12 rounded-full"
          ></Image>
          <div>
            <div className="text-left ml-4 font-bold text-sm flex">
              Toko Kopi Djaja
              <Link href="#">
                <SlNote className="ml-2"></SlNote>
              </Link>
            </div>
            <p className="text-sm font-semibold text-gray-400 ml-4">
              Selamat Datang Yono Karbu
            </p>
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
        </>
    );
};
export default Topbar;