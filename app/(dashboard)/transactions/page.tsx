import TransactionFilters from "@/components/TransactionFilters";
import RecentTransactions from "@/components/RecentTransactions";
import AddTransactionModal from "@/components/AddTransactionModal";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function TransactionsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/");
  const { category } = await searchParams;
  const active = category || "All";
  const transactions = await prisma.transaction.findMany({
    where: { userId: session.user.id },
    orderBy: { date: "desc" },
  });
  const formatted = transactions.map((txn) => ({
    ...txn,
    date: txn.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));

  const filtered =
    active === "All"
      ? formatted
      : formatted.filter(
          (txn) => txn.category.toLowerCase() === active.toLowerCase(),
        );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
      <p className="text-gray-500 mt-1">{filtered.length} transactions</p>
      <div className="flex justify-between items-center">
        <TransactionFilters active={active} />
        <AddTransactionModal />
      </div>

      <RecentTransactions transactions={filtered} />
    </div>
  );
}
