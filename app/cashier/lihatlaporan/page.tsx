import React from "react";
import Topbar from "@/public/topbar";
import CashierLaporanNav from "@/public/kasir/clnav";
import IsiTabel5 from "@/public/tabel/isitabel5";

const LihatLaporan = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen py-2 bg-gray-100">
        <Topbar></Topbar>
            <CashierLaporanNav></CashierLaporanNav>
            <div className="overflow-auto my-auto">

              <table className="mx-auto ml-20 flex-grow border-2 p-16 mr-4 mt-4 text-center">
                <thead>
                  <tr className="text-white bg-blue-400">
                    <th scope="col" className="w-1/9 p-2 font-normal">
                      No
                    </th>
                    <th scope="col" className="w-1/4 p-2 font-normal">
                      Nama Produk
                    </th>
                    <th scope="col" className="w-1/6 p-2 font-normal">
                      Harga
                    </th>
                    <th scope="col" className="w-1/3 p-2 font-normal">
                      Jumlah
                    </th>
                    <th scope="col" className="w-full p-2 font-normal">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ganjil">
                    <td>1</td>
                    <td>fresh Sariwa Salad</td>
                    <td>Rp 20.000</td>
                    <td>5</td>
                    <td>Rp 100.000</td>
                  </tr>
                  <tr className="genap">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <IsiTabel5></IsiTabel5>
                  <IsiTabel5></IsiTabel5>
                  <IsiTabel5></IsiTabel5>
                  <IsiTabel5></IsiTabel5>
                </tbody>
              </table>
            </div>
      </main>
    </>
  );
};

export default LihatLaporan;
