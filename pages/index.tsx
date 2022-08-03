import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Logos
import logo from "../public/images/logo.svg";
import mastercraft from "../public/images/logo-mastercraft.svg";

// Icons
import openMenu from "../public/images/icon-hamburger.svg";
import bookmark from "../public/images/icon-bookmark.svg";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Crowdfunding product page</title>
        <meta name="description" content="Frontend Mentor challenge | Crowdfunding product page" />
        <link rel="image/png" href="/favicon.png" />
      </Head>

      <header className="hero | min-h-[300px]">
        <div className="relative pt-8 pb-9 mx-6">
          <div className="flex justify-between">
            <a href="#">
              <Image src={logo} alt="" />
            </a>
            <button>
              <Image src={openMenu} alt="Open menu" />
            </button>
          </div>

          <ul className="mobile-menu | md:hidden hidden absolute top-full w-full divide-y rounded-lg font-bold bg-white">
            <li className="p-4">About</li>
            <li className="p-4">Discover</li>
            <li className="p-4">Get Started</li>
          </ul>
        </div>
      </header>

      <main className="-mt-14 mx-6 pb-16 grid gap-4 rounded-lg text-sm text-gray-500">
        <section className="card | pt-0 pb-10 relative flex flex-col items-center text-center">
          <div className="absolute -translate-y-1/2">
            <Image src={mastercraft} alt="" />
          </div>
          <h1 className="mt-14 text-[1.35rem] leading-none font-bold text-black">Mastercraft Bamboo Monitor Riser</h1>
          <p className="mt-4 leading-relaxed">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>

          <div className="mt-8 w-full flex justify-between gap-2 leading-none">
            <button className="flex-grow rounded-full font-bold text-white bg-cyan-400">Back this project</button>
            <button>
              <Image src={bookmark} alt="Bookmark project" />
            </button>
          </div>
        </section>

        <section className="card | text-center">
          <p className="pb-6">
            <span className="block text-4xl font-bold text-black">$89,914</span>
            of $100,000 backed
          </p>
          <p className="inline-block pt-8 pb-6 border-y">
            <span className="block text-4xl font-bold text-black">5,007</span>
            total backers
          </p>
          <p className="pt-8 pb-6">
            <span className="block text-4xl font-bold text-black">56</span>
            days left
          </p>

          <div
            className="relative w-full h-3 rounded-lg bg-gray-100
            after:absolute after:left-0 after:top-0 after:bottom-0 after:w-[80%] after:rounded-lg after:bg-cyan-400"
          ></div>
        </section>

        <section className="card | pb-4">
          <h2 className="text-lg font-bold text-black">About this project</h2>
          <p className="paragraph">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
            comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and
            make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className="paragraph">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to
            allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <section className="my-6 px-4 py-6 border rounded-lg">
            <h3 className="font-bold text-black leading-relaxed">
              Bamboo Stand
              <span className="block font-normal text-cyan-400">Pledge $25 or more</span>
            </h3>
            <p className="paragraph">
              You get an ergonomic stand made of natural bamboo. You&rsquo;ve helped us launch our promotional campaign,
              and you&rsquo;ll be added to a special Backer member list.
            </p>

            <p className="mt-6 flex items-center gap-2">
              <span className="font-bold text-3xl text-black">101</span>
              left
            </p>

            <button className="mt-6 py-3 px-8 rounded-full bg-cyan-400 text-white">Select Reward</button>
          </section>

          <section className="my-6 px-4 py-6 border rounded-lg">
            <h3 className="font-bold text-black leading-relaxed">
              Black Edition Stand
              <span className="block font-normal text-cyan-400">Pledge $75 or more</span>
            </h3>
            <p className="paragraph">
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
            </p>

            <p className="mt-6 flex items-center gap-2">
              <span className="font-bold text-3xl text-black">64</span>
              left
            </p>

            <button className="mt-6 py-3 px-8 rounded-full bg-cyan-400 text-white">Select Reward</button>
          </section>

          <section className="my-6 px-4 py-6 border rounded-lg opacity-50">
            <h3 className="font-bold text-black leading-relaxed">
              Mahogany Special Edition
              <span className="block font-normal text-cyan-400">Pledge $200 or more</span>
            </h3>
            <p className="paragraph">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>

            <p className="mt-6 flex items-center gap-2">
              <span className="font-bold text-3xl text-black">0</span>
              left
            </p>

            <button className="mt-6 py-3 px-8 rounded-full bg-gray text-white">Out of Stock</button>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
