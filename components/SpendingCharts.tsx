"use client";

import { dailySpending, monthlySpending, SpendingData } from "@/lib/mockData";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export const years = [2024, 2025, 2026];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SpendingChart = () => {
  const [view, setView] = useState<"month" | "year">("month");
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState("March");
  const data: SpendingData[] =
    view === "month" ? dailySpending : monthlySpending;

  return (
    <div className="border border-gray-300 rounded-2xl p-4">
      <h3 className="font-bold text-gray-900 mb-4">
        {view === "month"
          ? `${selectedMonth} ${selectedYear}`
          : `${selectedYear} Overview`}
      </h3>
      <div className="flex gap-4">
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {["month", "year"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v as "month" | "year")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all
            ${view === v ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
        {view === "month" && (
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 bg-white"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        )}
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barCategoryGap={5}>
          <defs>
            <linearGradient id="incomeBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset={"0"} stopColor="#10B981" stopOpacity={"1"} />
              <stop offset={"1"} stopColor="#10B981" stopOpacity={"0"} />
            </linearGradient>
            <linearGradient id="expenseBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset={"0"} stopColor="#4F46E5" stopOpacity={"1"} />
              <stop offset={"1"} stopColor="#4F46E5" stopOpacity={"0"} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="5 5"
            strokeOpacity={"0.2"}
            vertical={false}
          />
          <XAxis
            stroke="#888888"
            dataKey={view === "month" ? "day" : "month"}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            padding={{ left: 5, right: 5 }}
          />
          <YAxis
            stroke="#888888"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip
            formatter={(value) => {
              if (typeof value !== "number") return value;
              return `Rs. ${value.toLocaleString()}`;
            }}
          />
          <Bar dataKey="income" fill="#059669" radius={4} />
          <Bar dataKey="spending" fill="#dc2626" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;
