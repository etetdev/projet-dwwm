import { SignIn, SignOut } from "./action";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/server/auth";

export default function Home() {
  let session;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          {session ? (
            <>
              <SignOut />
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </main>
    </>
  );
}
