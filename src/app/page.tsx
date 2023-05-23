import SignInButton from "@/components/buttons/signin-button";
import SignOutButton from "@/components/buttons/signout-button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) redirect("/auth/signin");

  return (
    <div>
      <div>Auth Project</div>
      <div>
        <SignOutButton />
      </div>
      <div>
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </div>
  );
}
