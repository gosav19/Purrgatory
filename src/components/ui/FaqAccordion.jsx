"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Purrgatory?",
    answer: "Purrgatory is an NFT project featuring unique digital cats living in limbo, waiting to be adopted on the blockchain."
  },
  {
    question: "How can I mint a Purrgatory NFT?",
    answer: "Go to the Mint page, connect your wallet, select the quantity, and click the Mint button."
  },
  {
    question: "Which wallets are supported?",
    answer: "MetaMask and other wallets compatible with WalletConnect are supported."
  },
  {
    question: "What blockchain is used?",
    answer: "Purrgatory NFTs are minted on the Ethereum blockchain."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-700 rounded-lg">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 font-semibold bg-gray-800 hover:bg-gray-700 rounded-t-lg"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-900 rounded-b-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
