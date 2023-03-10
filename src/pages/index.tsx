import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "./layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RoamR</title>
        <link rel="shortcut icon" href="./favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#101010]">
          <section>
            <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
              <div className="max-w-screen-md">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
                  RoamR est le réseau social qu&apos;il vous faut pour les
                  passionner de voyages !
                </h2>
                <p className="mb-8 font-light text-gray-400 sm:text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis illo excepturi id cupiditate qui, doloremque
                  molestiae quo, aspernatur praesentium accusamus itaque
                  similique recusandae nemo nisi libero! Ipsum minima dolorum
                  vitae!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/login"
                    className="bg-primary-700 inline-flex items-center justify-center rounded-md bg-[#3fcf8e] px-4 py-2.5 text-center text-base text-black hover:bg-[#34b27b] focus:outline-none focus:ring-4 focus:ring-[#34b27b] md:mr-0"
                  >
                    REJOINDRE
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="flex min-h-screen flex-col items-center justify-center bg-[#101010]">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
            <figure className="mx-auto max-w-screen-md">
              <svg
                className="mx-auto mb-3 h-12 text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-white">
                  <ruby>
                    曖昧<rp>(</rp>
                    <rt>あいまい</rt>
                    <rp>)</rp>
                  </ruby>
                  3センチ そりゃぷにってコトかい？ ちょっ！ らっぴんぐが
                  <ruby>
                    制服<rp>(</rp>
                    <rt>せいふく</rt>
                    <rp>)</rp>
                  </ruby>
                  ... だぁぁ
                  <ruby>
                    不利<rp>(</rp>
                    <rt>ふり</rt>
                    <rp>)</rp>
                  </ruby>
                  ってこたない ぷ。 がんばっちゃ やっちゃちゃ そんときゃーっち
                  release ぎョッ
                  <ruby>
                    汗<rp>(</rp>
                    <rt>あせ</rt>
                    <rp>)</rp>
                  </ruby>
                  (Fuu) 々 (Fuu) の
                  <ruby>
                    谷間<rp>(</rp>
                    <rt>たにま</rt>
                    <rp>)</rp>
                  </ruby>
                  に Darling, darling, freeze!
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Image
                  className="h-14 w-14 rounded-full object-cover object-top"
                  src="/picture.jpg"
                  alt="Konata Izumi"
                  width="64"
                  height="64"
                ></Image>
                <div className="flex items-center divide-x-2 divide-gray-700">
                  <div className="pr-3 font-medium text-white">
                    Konata Izumi
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-400">
                    Leader of Lucky Star
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
