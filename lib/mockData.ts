export const mockUser = {
  name: "Aarav Shrestha",
  balance: 84250,
  income: 65000,
  spending: 32400,
};

export const mockTransactions = [
  {
    id: "1",
    name: "Bhatbhateni Superstore",
    category: "Shopping",
    amount: -2340,
    date: "2025-03-27",
  },
  {
    id: "2",
    name: "Salary — Deerwalk IT",
    category: "Income",
    amount: 65000,
    date: "2025-03-25",
  },
  {
    id: "3",
    name: "NEA Electricity Bill",
    category: "Utilities",
    amount: -1850,
    date: "2025-03-24",
  },
  {
    id: "4",
    name: "Sajha Yatayat",
    category: "Transport",
    amount: -450,
    date: "2025-03-23",
  },
  {
    id: "5",
    name: "Daraz Nepal",
    category: "Shopping",
    amount: -3200,
    date: "2025-03-22",
  },
  {
    id: "6",
    name: "WorldLink Internet",
    category: "Utilities",
    amount: -1450,
    date: "2025-03-21",
  },
  {
    id: "7",
    name: "Ncell Recharge",
    category: "Utilities",
    amount: -500,
    date: "2025-03-20",
  },
  {
    id: "8",
    name: "Pathao Food",
    category: "Food",
    amount: -850,
    date: "2025-03-19",
  },
  {
    id: "9",
    name: "Freelance Payment",
    category: "Income",
    amount: 15000,
    date: "2025-03-18",
  },
  {
    id: "10",
    name: "Sastodeal Purchase",
    category: "Shopping",
    amount: -2100,
    date: "2025-03-17",
  },
  {
    id: "11",
    name: "Nepal Airlines Ticket",
    category: "Transport",
    amount: -8500,
    date: "2025-03-15",
  },
  {
    id: "12",
    name: "Classic Tech Internet",
    category: "Utilities",
    amount: -1350,
    date: "2025-03-14",
  },
];

export const mockBudgets = [
  { category: "Food & Dining", spent: 9800, limit: 12000, color: "#4F46E5" },
  { category: "Transport", spent: 6200, limit: 8000, color: "#059669" },
  { category: "Shopping", spent: 7400, limit: 7000, color: "#DC2626" },
  { category: "Entertainment", spent: 3900, limit: 6000, color: "#7C3AED" },
  { category: "Utilities", spent: 5100, limit: 6000, color: "#D97706" },
];

export type SpendingData = {
  day?: string;
  month?: string;
  spending: number;
  income: number;
};

export const monthlySpending: SpendingData[] = [
  { month: "Baishak", spending: 28000, income: 60000 },
  { month: "Jestha", spending: 31000, income: 60000 },
  { month: "Asar", spending: 27500, income: 62000 },
  { month: "Shrawan", spending: 35000, income: 60000 },
  { month: "Bhadra", spending: 29000, income: 65000 },
  { month: "Asoj", spending: 30000, income: 6500 },
  { month: "Kartik", spending: 32400, income: 65000 },
  { month: "Mangsir", spending: 29000, income: 45000 },
  { month: "Poush", spending: 3000, income: 65000 },
  { month: "Magh", spending: 32400, income: 6000 },
  { month: "Falgun", spending: 29000, income: 95000 },
  { month: "Chaitra", spending: 300, income: 76000 },
];
export const dailySpending: SpendingData[] = [
  { day: "01", spending: 0, income: 0 },
  { day: "05", spending: 450, income: 0 },
  { day: "10", spending: 1200, income: 0 },
  { day: "15", spending: 800, income: 0 },
  { day: "20", spending: 2100, income: 0 },
  { day: "25", spending: 1850, income: 65000 },
  { day: "27", spending: 2340, income: 0 },
  { day: "29", spending: 450, income: 0 },
];
export const mockGoals = [
  {
    id: "1",
    name: "New Laptop",
    target: 80000,
    saved: 45000,
    color: "#4F46E5",
    emoji: "💻",
  },
  {
    id: "2",
    name: "Emergency Fund",
    target: 200000,
    saved: 120000,
    color: "#059669",
    emoji: "🛡️",
  },
  {
    id: "3",
    name: "Trip to Pokhara",
    target: 50000,
    saved: 12000,
    color: "#D97706",
    emoji: "🏔️",
  },
  {
    id: "4",
    name: "New Phone",
    target: 60000,
    saved: 60000,
    color: "#7C3AED",
    emoji: "📱",
  },
];
