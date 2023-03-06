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
      <section className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Désolé, cette page est introuvable ! (┬┬﹏┬┬)
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Nous sommes désolés, mais la page que vous recherchez est introuvable.
          Il est possible que cette page ait été supprimée, renommée ou déplacée
          vers un nouvel emplacement.
        </p>
        <Link
          href="/"
          className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Retourner à la page d&apos;accueil
        </Link>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Error;
