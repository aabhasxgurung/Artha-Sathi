import React from "react";

interface GoalCardProps {
  name: string;
  target: number;
  saved: number;
  color: string;
  emoji: string;
}

const GoalCard = ({ name, target, saved, color, emoji }: GoalCardProps) => {
  const percentage = Math.round((saved / target) * 100);
  const needed = target - saved;
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div>
        <h3 className="font-semibold text-gray-900">
          <span>{emoji}</span> {name}
        </h3>
        <span className="text-sm text-gray-500">
          Rs. {saved.toLocaleString()} / Rs. {target.toLocaleString()}
        </span>
        <div className="w-full bg-gray-100 h-2.5 rounded-full my-3">
          <div
            style={{
              width: `${Math.min(percentage, 100)}%`,
              backgroundColor: color,
            }}
            className="h-2.5 rounded-full transition-all"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          {needed <= 0 ? (
            <p className="text-xs font-medium text-success">Completed! 🎉</p>
          ) : (
            <p className="text-xs font-medium text-danger">
              Rs. {needed.toLocaleString()} still needed
            </p>
          )}
          <span className="text-xs text-gray-400">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
