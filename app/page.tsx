import { FaRegEnvelope, FaLock} from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">  
            <div className="text-left font-bold text-xl">
              <span className="text-blue-500">Putu</span>Kasir
            </div>
            <div className="py-20">
              <h2 className="text-4xl font-bold text-blue-500 mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2"></FaRegEnvelope>
                <input type ="email" name="email" placeholder="Email" className="bg-gray-100 focus:bg-blue-100">
                </input>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-72 p-2 flex items-center">
                  <FaLock className="text-gray-400 mr-2"></FaLock>
                <input type ="password" name="password" placeholder="Password" className="bg-gray-100 focus:bg-blue-100">
                </input>
                </div>
                <Link href="#" className="border-2 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white mt-8">Sign In</Link>
              </div>
            </div>
        </div>
        {/* Sign Up */}
        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2"> Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Create a food website cashier. That will help you manage orders more efficiently.</p>
          <Link href="/register" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500">Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
