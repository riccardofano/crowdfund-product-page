import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Pledge from "../components/Pledge";

// Logos
import mastercraft from "../public/images/logo-mastercraft.svg";

// Icons
import bookmark from "../public/images/icon-bookmark.svg";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Crowdfunding product page</title>
        <meta name="description" content="Frontend Mentor challenge | Crowdfunding product page" />
        <link rel="image/png" href="/favicon.png" />
      </Head>

      <Header />

      <main className="md:mx-auto md:max-w-[730px] md:-mt-[5.75rem] -mt-14 mx-6 pb-16 grid gap-4 rounded-lg md:text-base text-sm text-gray-500">
        <section className="card | pt-0 pb-10 relative flex flex-col items-center text-center">
          <div className="absolute -translate-y-1/2">
            <Image src={mastercraft} alt="" />
          </div>
          <h1 className="mt-14 text-[1.35rem] leading-none font-bold text-black">Mastercraft Bamboo Monitor Riser</h1>
          <p className="mt-4 leading-relaxed">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>

          <div className="mt-8 w-full flex items-stretch justify-between gap-2">
            <button className="md:px-10 md:flex-grow-0 flex-grow rounded-full font-bold text-white bg-cyan-400">
              Back this project
            </button>
            <div>
              <button className="flex items-stretch">
                <Image src={bookmark} alt="Bookmark project" />
                <span className="md:flex hidden pl-16 pr-8 -ml-12 items-center leading-none rounded-full font-bold bg-gray-200">
                  Bookmark
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="card | md:text-left text-center">
          <div className="md:flex md:align-center md:gap-12 md:mb-8">
            <p className="md:p-0 pb-6">
              <span className="block text-4xl font-bold text-black">$89,914</span>
              of $100,000 backed
            </p>
            <p className="md:py-0 md:px-12 md:border-x md:border-y-0 inline-block pt-8 pb-6 border-y">
              <span className="block text-4xl font-bold text-black">5,007</span>
              total backers
            </p>
            <p className="md:p-0 pt-8 pb-6">
              <span className="block text-4xl font-bold text-black">56</span>
              days left
            </p>
          </div>

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

          <Pledge
            title="Bamboo Stand"
            minimum={25}
            description="You get an ergonomic stand made of natural bamboo. You&rsquo;ve helped us launch our promotional campaign, and you&rsquo;ll be added to a special Backer member list."
            remaining={101}
          />

          <Pledge
            title="Black Edition Stand"
            minimum={75}
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            remaining={64}
          />

          <Pledge
            title="Mahogany Special Edition"
            minimum={200}
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            remaining={0}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
