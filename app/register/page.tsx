import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg">
          {/* Registration Form */}
          <div className="grid grid-cols-3 p-5">
          <Link href="./" className="text-blue-500 p-2 pl-8 text-xs col-span-1 justify-start text-left  ">
              Menu Login
            </Link>
            <div className="col-span-1 text-center font-bold text-3xl mb-4 col-start-2">
              <h1>Registrasi</h1>
            </div>
            <div col-span-1></div>

            {/* Nama Pemilik Input */}
            <div className="mt-4 mb-4 col-span-1 flex flex-col justify-end pr-4 pb-1 relative ">
              <label
                htmlFor="namaPemilik"
                className="text-sm font-medium text-gray-600 mb-1 underline-offset-auto"
              >
                Nama Pemilik
              </label>
            </div>
            <div className="mt-4 mb-4 col-span-2 flex flex-col justify-center">
              <input
                type="text"
                id="namaPemilik"
                name="namaPemilik"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Nama Cafe Input */}
            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="namaCafe"
                className="text-sm font-medium text-gray-600 mb-1 underline-offset-auto"
              >
                Nama Cafe
              </label>
            </div>
            <div className="mb-4 col-span-2 flex flex-col justify-center">
              <input
                type="text"
                id="namaCafe"
                name="namaCafe"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Email
              </label>
            </div>
            <div className="mb-4 col-span-2 flex flex-col justify-center">
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Nomor Telepon Input */}
            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="nomorTelepon"
                className="text-sm font-medium text-gray-600 mb-1 underline-offset-auto"
              >
                Nomor Telepon
              </label>
            </div>
            <div className="mb-4 col-span-2 flex flex-col justify-center ">
              <input
                type="tel"
                id="nomorTelepon"
                name="nomorTelepon"
                className="mt-1 p-2 w-full border rounded-md"
                autoComplete="tel"
                pattern="[0-9]*"
              />
            </div>

            {/* Alamat Input */}
            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4 relative">
              <label
                htmlFor="alamat"
                className="text-sm font-medium text-gray-600 mb-1 underline-offset-auto"
              >
                Alamat
              </label>
            </div>
            <div className="mb-4 col-span-2 flex flex-col justify-center">
              <input
                type="text"
                id="alamat"
                name="alamat"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-left px-14 ">
            <p>
              Lakukan Pendaftaran MidTrans dan data dibawah untuk menggunakan
              digital payment
            </p>
            <Link href="#" className="text-blue-400 mt-4 text-xs hover:text-blue-700">
              Tutorial Mendaftar Midtrans
            </Link>
          </div>

          {/* Input Server Key dan Client Key */}
          <div className="grid grid-cols-3 p-5">
            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4">
              <label
                htmlFor="serverkey"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Server Key
              </label>
            </div>
            <div className="mb-4 col-span-2 flex flex-col justify-center">
              <input
                type="password"
                id="serverkey"
                name="serverkey"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4 col-span-1 flex flex-col justify-end pb-1 pr-4">
              <label
                htmlFor="clientkey"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Client Key
              </label>
            </div>
            <div className="mb-4 col-span-2 flex flex-col justify-center">
              <input
                type="password"
                id="clientkey"
                name="clientkey"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="col-span-1 col-start-2">
              <Link
                href="#"
                type="button"
                className="bg-blue-500 text-white p-2 hover:bg-white hover:text-blue-600 border-2 border-blue-500 rounded-full w-full"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
