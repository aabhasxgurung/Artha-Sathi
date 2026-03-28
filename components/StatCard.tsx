import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";
interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

const StatCard = ({ label, value, change, positive }: StatCardProps) => {
  return (
    <div className="w-full p-4 rounded-2xl bg-background shadow-sm border border-gray-300">
      <h3 className="text-gray-500 mb-1.5">{label}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <div
        className={`inline-flex items-center mt-1.5 px-2 py-1 rounded-full ${
          positive ? "bg-success-light" : "bg-danger-light"
        }`}
      >
        <span
          className={`text-sm inline-flex items-center gap-1 ${positive ? "text-success" : "text-danger"}`}
        >
          {positive ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}{" "}
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
