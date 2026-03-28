"use client";

import { monthlySpending } from "@/lib/mockData";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SpendingChart = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4">
      <h3 className="font-bold text-gray-900 mb-4">Spending this month</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={monthlySpending}>
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip
            formatter={(value) => {
              if (typeof value !== "number") return value;
              return `Rs. ${value.toLocaleString()}`;
            }}
          />
          <Bar dataKey="spending" fill="#4F46E5" radius={[6, 6, 0, 0]} />
          <Bar dataKey="income" fill="#E0E7FF" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;
