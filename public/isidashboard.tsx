import React from "react";
import Image from "next/image";
import Link from "next/link";
const IsiDashboard = () => {
  return (
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
  );
};
export default IsiDashboard;
