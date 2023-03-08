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
      </Head>
      <Navbar></Navbar>
      <div className="h-[972px] bg-[url('/blob-scene.svg')] bg-scroll">
        <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
          <section className="">
            <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
              <div className="max-w-screen-md">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  RoamR est le réseau social qu&apos;il vous faut pour les
                  passionners de voyages !
                </h2>
                <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis illo excepturi id cupiditate qui, doloremque
                  molestiae quo, aspernatur praesentium accusamus itaque
                  similique recusandae nemo nisi libero! Ipsum minima dolorum
                  vitae!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/login"
                    className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                  >
                    Rejoindre
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
            <figure className="mx-auto max-w-screen-md">
              <svg
                className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
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
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  曖昧3センチ そりゃぷにってコトかい？ ちょっ！
                  らっぴんぐが制服... だぁぁ不利ってこたない ぷ。 がんばっちゃ
                  やっちゃちゃ そんときゃーっち release ぎョッ 汗 (Fuu)々 (Fuu)
                  の谷間に Darling, darling, freeze!
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
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Konata Izumi
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
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
