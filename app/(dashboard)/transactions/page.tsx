import { mockTransactions } from "@/lib/mockData";
import TransactionFilters from "@/components/TransactionFilters";
import RecentTransactions from "@/components/RecentTransactions";

export default async function TransactionsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category || "All";

  const filtered =
    active === "All"
      ? mockTransactions
      : mockTransactions.filter((txn) => txn.category === active);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
      <p className="text-gray-500 mt-1">{filtered.length} transactions</p>
      <TransactionFilters active={active} />
      <RecentTransactions transactions={filtered} />
    </div>
  );
}
