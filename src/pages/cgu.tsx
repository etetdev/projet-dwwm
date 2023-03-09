import Head from "next/head";
import { Navbar, Footer } from "./layout";

const CGU = () => {
  return (
    <>
      <Head>
        <title>RoamR - CGU</title>
      </Head>
      <Navbar></Navbar>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#101010] text-white">
        <p className="w-1/2 text-justify leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nobis nostrum necessitatibus tempora enim aliquid totam officia eos
          veritatis laudantium aperiam cumque voluptas, possimus sint id earum.
          Deserunt, fuga in. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Inventore nobis nostrum necessitatibus tempora enim aliquid
          totam officia eos veritatis laudantium aperiam cumque voluptas,
          possimus sint id earum. Deserunt, fuga in. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Inventore nobis nostrum necessitatibus
          tempora enim aliquid totam officia eos veritatis laudantium aperiam
          cumque voluptas, possimus sint id earum. Deserunt, fuga in. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis
          nostrum necessitatibus tempora enim aliquid totam officia eos
          veritatis laudantium aperiam cumque voluptas, possimus sint id earum.
          Deserunt, fuga in. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Inventore nobis nostrum necessitatibus tempora enim aliquid
          totam officia eos veritatis laudantium aperiam cumque voluptas,
          possimus sint id earum. Deserunt, fuga in.
        </p>
      </section>
      <Footer></Footer>
    </>
  );
};

export default CGU;
