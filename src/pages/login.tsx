import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "./account";
import { Navbar, Footer } from "./layout";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
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
          <p>Account page will go here.</p>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
