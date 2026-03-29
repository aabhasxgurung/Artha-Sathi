import { mockTransactions, mockUser } from "@/lib/mockData";
import RecentTransactions from "@/components/RecentTransactions";
import SpendingCharts from "@/components/SpendingCharts";
import StatCard from "@/components/StatCard";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Good morning, {mockUser.name.split(" ")[0]} 👋
      </h1>
      <p className="text-gray-500 mt-1">Here is your financial overview</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
        <StatCard
          label="Total Balance"
          value={`Rs. ${mockUser.balance.toLocaleString()}`}
          change="12% this month"
          positive={true}
        />
        <StatCard
          label="Monthly Spending"
          value={`Rs. ${mockUser.spending.toLocaleString()}`}
          change="8% vs last month"
          positive={false}
        />
        <StatCard
          label="Monthly Income"
          value={`Rs. ${mockUser.income.toLocaleString()}`}
          change="Salary received"
          positive={true}
        />
      </div>
      <SpendingCharts />
      <div>
        <RecentTransactions transactions={mockTransactions.slice(0, 5)} />
        <div className="flex justify-end mt-2">
          <Link
            href="/transactions"
            className="text-sm text-brand font-medium hover:underline"
          >
            View all transactions →
          </Link>
        </div>
      </div>
    </div>
  );
}
