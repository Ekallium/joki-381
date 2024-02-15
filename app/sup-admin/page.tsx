import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GrLogout } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const SupAdmin = () => {
  return (
    <>
      <Head>
        <title>Manage Tenant</title>
      </Head>
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
            {/* Your sidebar content here */}
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

          <div className="flex flex-col flex-grow w-full pl-4">
            <div className="pt-4 px-4 overflow-auto mt-28">
              <div className="flex h-10">
                <Link
                  href="#"
                  type="button"
                  className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-600 border-2 rounded-xl w-25 ml-16 text-sm"
                >
                  <FaPlus className="text-white inline-flex justify-center mr-1 mb-1 text-xs"></FaPlus>
                  Tambah
                </Link>
                <input
                  type="text"
                  id="namaPemilik"
                  name="namaPemilik"
                  className=" rounded-md bg-white border-gray-200 border-2 w-1/9 h-9 ml-auto px-2"
                  placeholder="&#xf002; Cari disini..."
                />
                <Link
                  href="#"
                  type="button"
                  className="bg-blue-500 text-white p-2 px-6 hover:bg-blue-600 border-2 rounded-xl w-1/14 ml-8 text-sm mr-4"
                >
                  Cari
                </Link>
              </div>

              <table className="text-left ml-auto flex-grow border-2 p-16 mr-4 mt-6">
                <thead>
                  <tr className="text-white bg-blue-400">
                    <th scope="col" className="w-12 p-2 font-normal">
                      No
                    </th>
                    <th scope="col" className="w-1/5 p-2 font-normal">
                      Nama
                    </th>
                    <th scope="col" className="w-1/5 p-2 font-normal">
                      Telepon
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Email
                    </th>
                    <th scope="col" className="w-1/5 p-2 font-normal">
                      Alamat
                    </th>
                    <th scope="col" className="w-40 p-2 font-normal">
                      Kode
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add table rows here */}
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
            <div className="ml-24 mt-7 inline-flex">
            <p>showing 1 to 2 of 2 entries</p>
            <Link
                  href="#"
                  type="button"
                  className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-600 border-2 rounded-md w-1/14 ml-auto text-sm"
                >
                  Previous
                </Link>
                <Link
                  href="#"
                  type="button"
                  className="bg-white text-black w-8 border-2 rounded-md w-1/14 text-lg text-center self-center h-9"
                >
                  1
                </Link>
                <Link
                  href="#"
                  type="button"
                  className="bg-blue-500 text-white p-2 px-3 hover:bg-blue-600 border-2 rounded-md w-1/14 text-sm mr-8"
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
