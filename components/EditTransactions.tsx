"use client";
import { updateTransaction } from "@/app/actions/transactions";
import { useState } from "react";
import { Edit2 } from "lucide-react";

interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
}

export default function EditTransactionModal({
  transaction,
}: {
  transaction: Transaction;
}) {
  const [open, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (formData: FormData) => {
    await updateTransaction(transaction.id, formData);
    handleClose();
  };
  const now = new Date();

  return (
    <div>
      <div
        className="bg-gray-100 rounded-xl p-2 cursor-pointer text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <Edit2 className="w-4 h-4" />
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Edit Transaction
                </h2>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8"
                >
                  ✕
                </button>
              </div>
              <form action={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    defaultValue={transaction.name}
                    placeholder="e.g. Groceries"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={transaction.category}
                    required
                    className="w-full px-3 py-2 border border-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Transport">Transport</option>
                    <option value="Income">Income</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount
                  </label>
                  <input
                    id="amount"
                    type="number"
                    step="any"
                    name="amount"
                    defaultValue={transaction.amount}
                    placeholder="0.00"
                    required
                    className="w-full px-3 py-2 border text-gray-700 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand text-white font-medium py-2.5 px-4 rounded-lg mt-2 hover:bg-brand/90 focus:ring-4 focus:ring-brand/20 transition-all"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
