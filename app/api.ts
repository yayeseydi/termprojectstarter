"use server";

import { prisma } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

// CREATE BLOCK (actually save it)
export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string | null;
  const code = formData.get("code") as string | null;

  if (!title || !code) {
    redirect("/blocks/create");
  }

  await prisma.block.create({
    data: { title, code },
  });

  redirect("/");
}

// LOGIN (secure-ish)
export async function handleLogin(formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (!username || !password) {
    redirect("/login");
  }

  const foundUser = await prisma.user.findUnique({
    where: { username },
  });

  if (!foundUser) {
    redirect("/login");
  }

  const isValid = await bcrypt.compare(password, foundUser.password);
  if (!isValid) {
    redirect("/login");
  }


  redirect("/");
}
