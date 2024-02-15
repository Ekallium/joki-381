import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg py-6">
            <div className="text-center font-bold text-3xl mt-5">
              <h1>LOGIN</h1>
            </div>
            {/* Nama Pemilik Input */}
          <div className="grid grid-cols-4 p-5" style={{ gridTemplateColumns: '0.7fr 0.3fr 2fr 1fr' }}>
            <div className="mb-4 col-span-1 flex flex-col justify-center pt-6 mr-9 pl-2">
              <label
                htmlFor="namaPemilik"
                className="text-sm font-medium text-gray-600 mb-1 border-b pb-1 border-black"
              >
                Email ID
              </label>
            </div>
            <div className="col-span-1"></div>
            <div className="my-4 col-span-2 flex flex-col justify-center">
              <input
                type="text"
                id="namaPemilik"
                name="namaPemilik"
                className="mt-1 p-2 w-full border rounded-md bg-blue-200"
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-center pt-10 mr-9 pl-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600 mb-1 border-b pb-1 px-3 border-black"
              >
                Password
              </label>
            </div>
            <div className="col-span-1"></div>
            <div className="mb-4 col-span-2 flex flex-col justify-center mt-9">
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md bg-blue-200"
              />
            </div>

            <div className="col-span-4 mt-9">
              <Link
                href="#"
                type="button"
                className="bg-blue-500 text-white p-2 hover:bg-white hover:text-blue-600 border-2 border-blue-500 rounded-full w-1/3"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
