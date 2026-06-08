import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { products } from "@/data/products";

export default function PricesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mr-2 px-3 py-2 rounded-lg bg-white/90 hover:bg-white text-sm font-medium">
          Narxlar
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[95%]">
        <DialogHeader>
          <DialogTitle>Mahsulotlar va Narxlari</DialogTitle>
          <DialogDescription>Bu yerda sayt bo'limidagi barcha mahsulotlar va ularning coin narxlari ko'rsatiladi.</DialogDescription>
        </DialogHeader>

        <div className="mt-4 max-h-[60vh] overflow-auto">
          <table className="w-full text-sm table-auto border-collapse">
            <thead className="bg-muted text-muted-foreground sticky top-0">
              <tr>
                <th className="text-left px-3 py-2 border">ID</th>
                <th className="text-left px-3 py-2 border">Nomi</th>
                <th className="text-right px-3 py-2 border">Coins</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="odd:bg-white even:bg-slate-50">
                  <td className="px-3 py-2 border align-top">{p.id}</td>
                  <td className="px-3 py-2 border align-top">{p.name}</td>
                  <td className="px-3 py-2 border text-right align-top">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <button className="px-3 py-2 rounded bg-primary text-primary-foreground">Yopish</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
