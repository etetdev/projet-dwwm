import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "./account";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div
      className="min-h-screen bg-gray-900 p-16"
      style={{ padding: "50px 0 100px 0" }}
    >
      {!session ? (
        <Auth
          providers={["github", "discord"]}
          supabaseClient={supabase}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
