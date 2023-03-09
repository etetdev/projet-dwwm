import Head from "next/head";
import Link from "next/link";
import { Navbar, Footer } from "./layout";

const Error = () => {
  return (
    <>
      <Head>
        <title>RoamR - 404</title>
      </Head>
      <Navbar></Navbar>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#101010]">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-white lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Désolé, cette page est introuvable ! (┬┬﹏┬┬)
        </p>
        <p className="mb-4 text-center text-lg font-light text-gray-400">
          Nous sommes désolés, mais la page que vous recherchez est introuvable.
          Il est possible que cette page ait été supprimée, renommée ou déplacée
          vers un nouvel emplacement.
        </p>
        <Link
          href="/"
          className="bg-primary-700 inline-flex items-center justify-center rounded-md bg-[#3fcf8e] px-4 py-2.5 text-center text-base text-black hover:bg-[#34b27b] focus:outline-none focus:ring-4 focus:ring-[#34b27b] md:mr-0"
        >
          Retourner à la page d&apos;accueil
        </Link>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Error;
