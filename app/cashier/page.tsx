import React from "react";
import Link from "next/link";
import { GrLogout } from "react-icons/gr";
import { BsShop } from "react-icons/bs";

const Cashier = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">
        <nav className="flex items-center bg-white px-4 py-2 fixed top-0 w-full z-20 border-b-2 border-gray-300">
          <img
            src="#"
            alt="#"
            className="bg-gray-300 ml-16 w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-left ml-4 font-bold text-sm">
              Toko Kopi Djaja
              <p className="text-xs font-normal text-gray-400">
                Selamat Datang Yono Karbu
              </p>
            </div>
          </div>
          <div className="flex items-center ml-auto mr-6">
            <div className="text-xs font-bold">
              Yono Karbu
              <p className="font-normal text-gray-400">Kasir</p>
            </div>
          </div>
          <Link href="#">
            <GrLogout className="text-red-600"></GrLogout>
          </Link>
        </nav>

        <section className="flex flex-row h-screen">
          <aside className="bg-white text-white hidden md:block w-16 fixed top-0 left-0 h-full z-30 border-r-2  border-gray-300">
            <nav className="flex flex-col pt-4 px-4">
              <Link
                href="#"
                className="bg-blue-200 mx-auto my-20 p-2 rounded-md"
              >
                <BsShop className="text-blue-600"></BsShop>
              </Link>
              <Link href="#"></Link>
              <Link href="#"></Link>
            </nav>
          </aside>
          <aside className="bg-white text-white hidden md:block w-1/3 fixed top-0 right-0 h-full z-10 border-r-2 overflow-auto border border-gray-300">
            <nav className="flex flex-col pt-4 px-4">
            </nav>
          </aside>
          <div className="flex items-center bg-white px-4 py-2 fixed top-16 h-16 w-full z-5 border-2 border-gray-300">
          </div>
          <div className="flex flex-col flex-grow w-full pl-12 pr-1/3">
            <div className="pt-4 px-4 overflow-auto mt-28">
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cashier;
