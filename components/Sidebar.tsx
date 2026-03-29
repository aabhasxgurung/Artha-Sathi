"use client";

import {
  ArrowLeftRight,
  LayoutDashboard,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: <LayoutDashboard /> },
  { label: "Transactions", href: "/transactions", icon: <ArrowLeftRight /> },

  { label: "Budgets", href: "/budgets", icon: <Target /> },
  { label: "Goals", href: "/goals", icon: <TrendingUp /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-20 lg:w-56 min-h-screen bg-white border-r border-gray-100 py-6">
      {/* Logo */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center text-white font-bold text-sm shrink-0">
            A
          </div>
          <div className="hidden lg:block">
            <div className="font-bold text-sm text-gray-900">ArthaSathi</div>
            <div className="text-xs text-gray-400">Personal Finance</div>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 px-2 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
                ${
                  isActive
                    ? "bg-[#EEF2FF] text-[#4F46E5] font-semibold"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <span className="text-base w-5 text-center shrink-0">
                {item.icon}
              </span>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User card at bottom */}
      <div className="px-2 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-xs font-bold shrink-0">
            AS
          </div>
          <div className="hidden lg:block">
            <div className="text-xs font-semibold text-gray-900">
              Aarav Shrestha
            </div>
            <div className="text-xs text-gray-400">Free plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
