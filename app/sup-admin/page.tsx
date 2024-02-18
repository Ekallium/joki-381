import React from "react";
import Link from "next/link";
import { GrLogout } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { SlNote } from "react-icons/sl";

const SupAdmin = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">
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

        <section className="flex flex-row h-screen">
          <aside className="bg-white text-white hidden md:block w-16 fixed top-0 left-0 h-full z-30 border-r-2  border-gray-300">
            <nav className="flex flex-col pt-4 px-4">
              <Link
                href="#"
                className="bg-blue-200 mx-auto my-16 p-2 rounded-md"
              >
                <BsShop className="text-blue-600 size-5"></BsShop>
              </Link>
            </nav>
          </aside>

          <div className="flex flex-col flex-grow w-full">
            <div className="overflow-auto mt-32">
              <div className="flex h-10">
                <Link
                  href="#"
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

              <table className="text-left mx-auto ml-24 flex-grow border-2 p-16 mr-4 mt-4">
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
                      Alamat
                    </th>
                    <th scope="col" className="w-1/9 p-2 font-normal">
                      Kode
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ganjil">
                    <td>1</td>
                    <td>Arthur Bore up</td>
                    <td>085745786742</td>
                    <td className="underline">arthurlaksana@gmail.com</td>
                    <td>Pakisaji</td>
                    <td>J4AM4C</td>
                  </tr>
                  <tr className="genap">
                    <td>2</td>
                    <td>Arthur Bore up</td>
                    <td>085745786742</td>
                    <td className="underline">arthurlaksana@gmail.com</td>
                    <td>Pakisaji</td>
                    <td>J4AM4C</td>
                  </tr>
                  <tr className="ganjil">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="genap">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="ganjil">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="genap">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="ganjil">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="genap">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="ganjil">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="genap">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ml-28 mt-7 inline-flex">
              <p className="italic">showing 1 to 2 of 2 entries</p>
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
          </div>
        </section>
      </main>
    </>
  );
};

export default SupAdmin;
