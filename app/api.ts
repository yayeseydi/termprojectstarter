"use server";

import { prisma } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// LOGIN ONLY
export async function handleLogin(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // Find user
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    redirect("/login");
  }

  // Compare password directly (if stored without bcrypt)
  if (user.password !== password) {
    redirect("/login");
  }

  redirect("/");
}
