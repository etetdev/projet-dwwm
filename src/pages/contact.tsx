import Head from "next/head";
import { Navbar, Footer } from "./layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>RoamR - Contact</title>
      </Head>
      <Navbar></Navbar>
      <section className="mx-auto flex min-h-screen flex-col items-center justify-center space-y-16 bg-white text-black dark:bg-[#101010] dark:text-white">
        <h1 className="text-center text-6xl font-bold">Nous contacter</h1>
        <h2>Dernière mise à jour le 28 avril 2023</h2>
        <div className="w-1/2 text-justify leading-8">
          Nous sommes heureux de vous offrir plusieurs moyens de nous contacter
          pour toute question ou demande. Veuillez choisir celui qui vous
          convient le mieux :{" "}
          <ul className="mt-8 list-inside">
            <li>
              - Envoyez-nous un e-mail à contact@roamr.com. Nous ferons de notre
              mieux pour vous répondre dans les plus brefs délais.
            </li>{" "}
            <li>
              - Appelez-nous au 0606060606. Nos heures d&apos;ouverture sont
              12h-13h.
            </li>{" "}
            <li>
              - Remplissez le formulaire de contact ci-dessous pour nous envoyer
              un message directement depuis notre site Web.
            </li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
