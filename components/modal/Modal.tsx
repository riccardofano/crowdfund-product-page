import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

import Pledge from "./Pledge";

import successIcon from "../../public/images/icon-check.svg";

interface ModalProps {
  chosen: string;
  close: () => void;
}

function Modal({ close, chosen }: ModalProps) {
  const [selected, setSelected] = useState(chosen);
  const [submitted, setSubmitted] = useState(false);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overlay | fixed inset-0 overflow-y-scroll">
      <div className="mt-36 mb-16 w-full px-6">
        {submitted ? (
          <div className="grid justify-items-center text-center px-6 py-10 gap-4 rounded-lg bg-white">
            <Image src={successIcon} alt="" />
            <h1 className="text-lg font-bold text-black">Thanks for your support!</h1>
            <p className="leading-relaxed">
              Your pledge brings us one stop closer to sharing Mastercraft Bambbo Monitor Riser worldwide. You will get
              an email once our campaign is completed.
            </p>

            <button
              className="button | mt-4 px-8 py-3"
              onClick={() => {
                setSubmitted(false);
                close();
              }}
            >
              Got it!
            </button>
          </div>
        ) : (
          <form className="p-6 grid gap-4 rounded-lg bg-white" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <h1 className="text-lg font-bold text-black">Back this project</h1>
              <button className="text-black opacity-40 hover:opacity-100" onClick={close}>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <Pledge
              id="1"
              title="Pledge with no reward"
              description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
              selected={selected}
              onChange={handleRadioChange}
            />
            <Pledge
              id="2"
              title="Bamboo Stand"
              description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              minimum={25}
              remaining={101}
              selected={selected}
              onChange={handleRadioChange}
            />
            <Pledge
              id="3"
              title="Black Edition Stand"
              description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              minimum={75}
              remaining={64}
              selected={selected}
              onChange={handleRadioChange}
            />
            <Pledge
              id="4"
              title="Mahogany Special Edition"
              description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              minimum={200}
              remaining={0}
              selected={selected}
              onChange={handleRadioChange}
            />
          </form>
        )}
      </div>
    </div>
  );
}

export default Modal;
