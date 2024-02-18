import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Topbar from "@/public/topbar";
import { SlNote } from "react-icons/sl";
import { HiTrash } from "react-icons/hi2";
import CashierProdukNav from "@/public/kasir/cpnav";
import Image from "next/image";

const Produk = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">
        <Topbar></Topbar>
            <CashierProdukNav></CashierProdukNav>
            <div className="overflow-auto mt-32">
              <div className="flex h-10">
                <Link
                  href="editproduk"
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
                      Gambar
                    </th>
                    <th scope="col" className="w-1/5 p-2 font-normal">
                      Nama
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      harga
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Stok
                    </th>
                    <th scope="col" className="w-1/9 p-2 font-normal">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ganjil">
                    <td>1</td>
                    <td className="">
                      <Image
                      src="/img1.jpg"
                      alt="Salad"
                      height={100}
                      width={80}
                      className="overflow-hidden mx-auto p-1">

                      </Image>
                    </td>
                    <td>Fresh Sariwa Salad</td>
                    <td>Rp 20.000</td>
                    <td>20</td>
                    <td className="flex"> <Link href="editproduk">
                    <SlNote className="size-6 pt-1 mr-5 my-4"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-4"></HiTrash></Link> 
                    </td>
                  </tr>
                  <tr className="genap">
                    <td>2</td>
                    <td className="">
                      <Image
                      src="/img1.jpg"
                      alt="Salad"
                      height={100}
                      width={80}
                      className="overflow-hidden mx-auto p-1">

                      </Image>
                    </td>
                    <td>Fresh Sariwa Salad</td>
                    <td>Rp 20.000</td>
                    <td>20</td>
                    <td className="flex"> <Link href="editproduk">
                    <SlNote className="size-6 pt-1 mr-5 my-4"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-4"></HiTrash></Link> 
                    </td>
                  </tr>
                  <tr className="ganjil">
                    <td>3</td>
                    <td className="">
                      <Image
                      src="/img1.jpg"
                      alt="Salad"
                      height={100}
                      width={80}
                      className="overflow-hidden mx-auto p-1">

                      </Image>
                    </td>
                    <td>Fresh Sariwa Salad</td>
                    <td>Rp 20.000</td>
                    <td>20</td>
                    <td className="flex"> <Link href="editproduk">
                    <SlNote className="size-6 pt-1 mr-5 my-4"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-4"></HiTrash></Link> 
                    </td>
                  </tr>
                  <tr className="genap">
                    <td>4</td>
                    <td className="">
                      <Image
                      src="/img1.jpg"
                      alt="Salad"
                      height={100}
                      width={80}
                      className="overflow-hidden mx-auto p-1">

                      </Image>
                    </td>
                    <td>Fresh Sariwa Salad</td>
                    <td>Rp 20.000</td>
                    <td>20</td>
                    <td className="flex"> <Link href="editproduk">
                    <SlNote className="size-6 pt-1 mr-5 my-4"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-4"></HiTrash></Link> 
                    </td>
                  </tr>
                  <tr className="ganjil">
                    <td>5</td>
                    <td className="">
                      <Image
                      src="/img1.jpg"
                      alt="Salad"
                      height={100}
                      width={80}
                      className="overflow-hidden mx-auto p-1">

                      </Image>
                    </td>
                    <td>Fresh Sariwa Salad</td>
                    <td>Rp 20.000</td>
                    <td>20</td>
                    <td className="flex"> <Link href="editproduk">
                    <SlNote className="size-6 pt-1 mr-5 my-4"></SlNote>
                    </Link>
                    <Link href=""><HiTrash className="size-7 my-4"></HiTrash></Link> 
                    </td>
                  </tr>
                  

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

export default Produk;