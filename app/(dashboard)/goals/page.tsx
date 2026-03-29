import GoalCard from "@/components/GoalCard";
import { mockGoals } from "@/lib/mockData";
import React from "react";

const page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Goals</h1>
      <p className="text-gray-500 mt-1">Falgun 2081 · Long-term savings</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {mockGoals.map((goal) => (
          <GoalCard key={goal.id} {...goal} />
        ))}
      </div>
    </div>
  );
};

export default page;
