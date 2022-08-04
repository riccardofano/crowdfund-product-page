import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Modal from "../components/modal/Modal";
import Pledge from "../components/Pledge";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [chosen, setChosen] = useState("2");

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [modalOpen]);

  const handleModalOpening = (id: string) => {
    setChosen(id);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen md:text-base text-sm text-gray-500 bg-gray-100">
      <Head>
        <title>Crowdfunding product page</title>
        <meta name="description" content="Frontend Mentor challenge | Crowdfunding product page" />
        <link rel="image/png" href="/favicon.png" />
      </Head>

      <Header />

      <main className="md:mx-auto md:max-w-[730px] md:-mt-[5.75rem] -mt-14 mx-6 pb-16 grid gap-4 rounded-lg ">
        <Heading onClick={() => handleModalOpening("1")} />

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
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            remaining={101}
            onClick={() => handleModalOpening("2")}
          />

          <Pledge
            title="Black Edition Stand"
            minimum={75}
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            remaining={64}
            onClick={() => handleModalOpening("3")}
          />

          <Pledge
            title="Mahogany Special Edition"
            minimum={200}
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            remaining={0}
            onClick={() => handleModalOpening("4")}
          />
        </section>
      </main>

      {modalOpen && <Modal chosen={chosen} close={() => setModalOpen(false)} />}
    </div>
  );
};

export default Home;
