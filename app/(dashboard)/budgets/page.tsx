import BudgetCard from "@/components/BudgetCard";
import { mockBudgets } from "@/lib/mockData";
import React from "react";

const page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Budgets</h1>
      <p className="text-gray-500 mt-1">Falgun 2081 · Monthly limits</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {mockBudgets.map((budget) => (
          <BudgetCard key={budget.category} {...budget} />
        ))}
      </div>
    </div>
  );
};

export default page;
