import Head from "next/head";
import { Navbar, Footer } from "./layout";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>RoamR - Politique de confidentialité</title>
      </Head>
      <Navbar></Navbar>
      <section className="mx-auto flex min-h-screen flex-col items-center justify-center space-y-16 bg-[#101010] text-white">
        <h1 className="text-center text-6xl font-bold">
          Politique de confidentialité
        </h1>
        <h2>Dernière mise à jour le 3 avril 2023</h2>
        <p className="w-1/2 text-justify leading-8">
          Nous, RoamR, sommes engagés à protéger la vie privée de nos
          utilisateurs et nous prenons très au sérieux notre responsabilité de
          protéger les informations que nous collectons auprès d&apos;eux. Nous
          ne collectons aucune donnée personnelle identifiable auprès de nos
          utilisateurs. Cela signifie que nous ne collectons pas de noms,
          adresses e-mail, adresses postales, numéros de téléphone, informations
          de carte de crédit ou toute autre information qui pourrait être
          utilisée pour identifier directement un utilisateur. Nous pouvons
          collecter des informations non personnelles, telles que le type de
          navigateur que vous utilisez, le type de système d&apos;exploitation
          que vous utilisez, le pays à partir duquel vous accédez à notre site
          Web, le nombre de fois que vous visitez notre site Web et les pages
          que vous consultez. Ces informations sont collectées de manière
          anonyme et ne sont pas associées à des informations personnelles
          identifiables. Nous utilisons ces informations pour améliorer notre
          site Web et nos services, ainsi que pour comprendre comment nos
          utilisateurs interagissent avec notre site Web. Nous pouvons également
          partager ces informations avec des tiers pour des raisons
          d&apos;analyse statistique. Nous prenons des mesures pour protéger la
          sécurité de vos informations. Nous utilisons des technologies de
          sécurité pour protéger les informations que nous collectons contre la
          divulgation non autorisée, l&apos;utilisation, la modification ou la
          destruction. Nous limitons l&apos;accès à vos informations à nos
          employés et entrepreneurs qui ont besoin de ces informations pour
          effectuer leur travail. En utilisant notre site Web, vous acceptez
          cette politique de confidentialité. Nous pouvons modifier cette
          politique de temps à autre. Si nous apportons des modifications
          importantes à cette politique, nous vous informerons par e-mail ou par
          un avis bien en vue sur notre site Web. Nous vous encourageons à
          consulter régulièrement cette politique de confidentialité pour être
          informé des dernières mises à jour. Si vous avez des questions ou des
          préoccupations concernant notre politique de confidentialité,
          n&apos;hésitez pas à nous contacter à l&apos;adresse e-mail
          contact@roamr.com.
        </p>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Privacy;
