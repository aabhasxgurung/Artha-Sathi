"use client";
import { useRouter } from "next/navigation";

const filters = ["All", "Income", "Shopping", "Utilities", "Transport", "Food"];

export default function TransactionFilters({ active }: { active: string }) {
  const router = useRouter();

  return (
    <div className="flex gap-2 flex-wrap mt-4 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => router.push(`/transactions?category=${filter}`)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
            ${
              active === filter
                ? "bg-brand text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
