import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth(); // checked  for the currently active user

  if (!userId) {
    // if not redirect to the sign in page
    redirect("/sign-in");
  }

  //we checked the currently active user has any store created
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  //if currently active user has any store created then we redirected to the dashoard (dashboard)/layout.tsx
  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
