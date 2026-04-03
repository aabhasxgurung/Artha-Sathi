import { mockTransactions, mockUser } from "@/lib/mockData";
import RecentTransactions from "@/components/RecentTransactions";
import SpendingCharts from "@/components/SpendingCharts";
import StatCard from "@/components/StatCard";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArrowRight } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/");

  const firstName = session.user?.name?.split(" ")[0] ?? "User";
  const [incomeResult, spendingResult] = await Promise.all([
    prisma.transaction.aggregate({
      where: { userId: session.user?.id, amount: { gt: 0 } },
      _sum: { amount: true },
    }),
    prisma.transaction.aggregate({
      where: { userId: session.user?.id, amount: { lt: 0 } },
      _sum: { amount: true },
    }),
  ]);
  const income = incomeResult._sum.amount ?? 0;
  const spending = Math.abs(spendingResult._sum.amount ?? 0);
  const balance = income - spending;
  const recentTransactions = await prisma.transaction.findMany({
    where: { userId: session.user?.id },
    orderBy: { date: "desc" },
    take: 5,
  });
  const formatted = recentTransactions.map((txn) => ({
    ...txn,
    date: txn.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));
  const transactionCount = await prisma.transaction.count({
    where: { userId: session.user?.id },
  });
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Good morning, {firstName} 👋
      </h1>
      <p className="text-gray-500 mt-1">Here is your financial overview</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
        <StatCard
          label="Total Balance"
          value={`Rs. ${balance.toLocaleString()}`}
          change={`${transactionCount} transactions total`}
          positive={true}
        />
        <StatCard
          label="Monthly Spending"
          value={`Rs. ${spending.toLocaleString()}`}
          // change="8% vs last month"
          positive={false}
        />
        <StatCard
          label="Monthly Income"
          value={`Rs. ${income.toLocaleString()}`}
          // change="Salary received"
          positive={true}
        />
      </div>
      <SpendingCharts />
      <div>
        <RecentTransactions transactions={formatted} />
        <div className="flex justify-end mt-2">
          <Link
            href="/transactions"
            className="text-sm text-brand font-medium hover:underline inline-flex items-center gap-2"
          >
            View all transactions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
