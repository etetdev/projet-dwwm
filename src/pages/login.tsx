import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Navbar, Footer } from "./layout";
import Link from "next/link";
import Head from "next/head";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      <Head>
        <title>RoamR - Connexion</title>
      </Head>
      <Navbar></Navbar>
      <div
        className="container min-h-screen"
        style={{ padding: "50px 0 100px 0" }}
      >
        {!session ? (
          <Auth
            providers={["github", "discord"]}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <section className="mx-auto flex min-h-screen flex-col items-center justify-center space-y-16 bg-white text-black dark:bg-[#101010] dark:text-white">
            <Link href="./account">
              <h2>Vous pouvez modifier votre compte en cliquant ici</h2>
            </Link>
          </section>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
