import React from "react";
interface BudgetCardProps {
  category: string;
  spent: number;
  limit: number;
  color: string;
}

const BudgetCard = ({ category, spent, limit, color }: BudgetCardProps) => {
  const percentage = Math.round((spent / limit) * 100);
  const remaining = limit - spent;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      {/* top row — name and amounts */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900">{category}</h3>
        <span className="text-sm text-gray-500">
          Rs. {spent.toLocaleString()} / Rs. {limit.toLocaleString()}
        </span>
      </div>

      {/* progress bar */}
      <div className="w-full bg-gray-100 h-2.5 rounded-full">
        <div
          style={{
            width: `${Math.min(percentage, 100)}%`,
            backgroundColor: color,
          }}
          className="h-2.5 rounded-full transition-all"
        />
      </div>

      {/* bottom row — remaining text and percentage */}
      <div className="flex justify-between items-center mt-2">
        <p
          className={`text-xs font-medium ${remaining >= 0 ? "text-success" : "text-danger"}`}
        >
          {remaining >= 0
            ? `Rs. ${remaining.toLocaleString()} remaining`
            : `Rs. ${Math.abs(remaining).toLocaleString()} over budget`}
        </p>
        <span className="text-xs text-gray-400">{percentage}%</span>
      </div>
    </div>
  );
};

export default BudgetCard;
