"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import prismaConfig from "@/prisma.config";

import { revalidatePath } from "next/cache";

export async function createTransaction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const type = formData.get("type") as string;
  const rawAmount = parseFloat(formData.get("amount") as string);
  const amount = type === "expense" ? -rawAmount : rawAmount;

  await prisma.transaction.create({
    data: {
      name,
      category,
      amount: amount,
      userId: session.user.id,
    },
  });

  revalidatePath("/transactions");
}

export async function deleteTransaction(id: string) {
  const session = await auth();
  if (!session?.user?.id) return;

  await prisma.transaction.delete({
    where: {
      id,
      userId: session.user.id,
    },
  });

  revalidatePath("/transactions");
}

export async function updateTransaction(id: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  await prisma.transaction.update({
    where: {
      id,
      userId: session.user.id,
    },
    data: {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      amount: parseFloat(formData.get("amount") as string),
    },
  });

  revalidatePath("/transactions");
}

export async function createBudget(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const category = formData.get("category") as string;
  const limit = parseFloat(formData.get("limit") as string);
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  await prisma.budget.create({
    data: {
      category,
      limit,
      month,
      year,
      userId: session.user.id,
    },
  });

  revalidatePath("/budgets");
}
