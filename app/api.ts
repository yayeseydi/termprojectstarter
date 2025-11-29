"use server";

import { prisma } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

// CREATE BLOCK
export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string | null;
  const code = formData.get("code") as string | null;

  if (!title || !code) {
    // If form is missing values, send them back to the create page
    redirect("/blocks/create");
  }

  await prisma.block.create({
    data: {
      title,
      code,
    },
  });

  redirect("/");
}

// LOGIN 
export async function handleLogin(formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (!username || !password) {
    redirect("/login");
  }

  // 1. Find user by username only
  const foundUser = await prisma.user.findUnique({
    where: { username },
  });

  // If no user, or password wrong: back to login
  if (!foundUser) {
    redirect("/login");
  }

  // 2. Compare hashed password
  const isValid = await bcrypt.compare(password!, foundUser.password);

  if (!isValid) {
    redirect("/login");
  }

  // 3. Store user_id in an HTTP-only cookie
  const cookieStore = cookies();
  cookieStore.set("user_id", String(foundUser.id), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  // 4. Go home
  redirect("/");
}
