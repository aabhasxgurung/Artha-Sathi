"use client";
import React from "react";
import { ShoppingBag, Briefcase, Zap, Bus, Trash2 } from "lucide-react";
import { deleteTransaction } from "@/app/actions/transactions";
import { usePathname } from "next/navigation";
import EditTransactionModal from "./EditTransactions";

interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
}
interface RecentTransactionsProps {
  transactions: Transaction[];
}
const categoryIcons: Record<string, React.ReactNode> = {
  Shopping: <ShoppingBag className="w-5 h-5" />,
  Income: <Briefcase className="w-5 h-5" />,
  Utilities: <Zap className="w-5 h-5" />,
  Transport: <Bus className="w-5 h-5" />,
};
const categoryColors: Record<string, string> = {
  Shopping: "bg-brand-light text-brand",
  Income: "bg-success-light text-success",
  Utilities: "bg-amber-100 text-amber-600",
  Transport: "bg-blue-100 text-blue-600",
};

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  const isTransactionPage = usePathname() === "/transactions";
  return (
    <div className="p-4 my-5 border border-gray-300 rounded-3xl">
      <h1 className="text-2xl font-bold text-gray-900">Recent Transactions</h1>
      <div className="flex flex-col gap-2 mt-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between w-full items-center gap-2"
          >
            <div className="flex items-center justify-between bg-gray-100 gap-2 rounded-xl p-2 w-full">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${categoryColors[transaction.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {categoryIcons[transaction.category] ?? (
                    <ShoppingBag className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {transaction.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction.date} · {transaction.category}
                  </p>
                </div>
              </div>
              <p
                className={
                  transaction.amount > 0
                    ? "text-success font-bold"
                    : "text-danger font-bold"
                }
              >
                {transaction.amount > 0 ? "+" : ""}Rs.{" "}
                {Math.abs(transaction.amount).toLocaleString()}
              </p>
            </div>

            {isTransactionPage && (
              <>
                <div className="bg-gray-100 rounded-xl p-2">
                  <form action={deleteTransaction.bind(null, transaction.id)}>
                    <button
                      type="submit"
                      className="text-red-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </div>
                <div>
                  <EditTransactionModal transaction={transaction} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
