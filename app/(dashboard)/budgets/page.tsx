import { auth } from "@/auth";
import AddBudget from "@/components/AddBudget";
import BudgetCard from "@/components/BudgetCard";
import { mockBudgets } from "@/lib/mockData";
import { prisma } from "@/lib/prisma";

export default async function page() {
  const session = await auth();
  const userId = session?.user?.id;
  const now = new Date();

  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const budgets = await prisma.budget.findMany({
    where: { userId, month, year },
  });
  const budgetsWithSpending = await Promise.all(
    budgets.map(async (budget) => {
      const result = await prisma.transaction.aggregate({
        where: {
          userId,
          category: budget.category,
          amount: { lt: 0 },
        },
        _sum: { amount: true },
      });
      return {
        ...budget,
        spent: Math.abs(result._sum.amount ?? 0),
      };
    }),
  );

  const categoryColors: Record<string, string> = {
    Food: "#4F46E5",
    Shopping: "#DC2626",
    Transport: "#059669",
    Utilities: "#D97706",
    Entertainment: "#7C3AED",
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Budgets</h1>
      <div className="flex justify-between items-center mt-2 mb-6">
        <p className="text-gray-500 mt-1">
          {month}/{year} · Monthly limits
        </p>
        <AddBudget />
      </div>
      {budgetsWithSpending.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No budgets yet. Add one to get started.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {budgetsWithSpending.map((budget) => (
            <BudgetCard
              color={categoryColors[budget.category]}
              key={budget.category}
              {...budget}
            />
          ))}
        </div>
      )}
    </div>
  );
}
