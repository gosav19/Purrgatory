'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import Door from '../components/ui/Door'; // adjust path if needed
import Footer from '../components/ui/Footer'; // adjust path if needed

export default function HomePage() {
  const router = useRouter();
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    const connectToContract = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const sdk = new ThirdwebSDK(signer);
        const contract = await sdk.getContract("0x26e02fD009941357d412afAb08D3F7FC560F258F");
        console.log("Contract loaded:", contract);
      } catch (err) {
        console.error("Error connecting to contract", err);
      }
    };

    connectToContract();
  }, []);

  // Reset scroll restrictions when door opens
  useEffect(() => {
    if (doorOpen) {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [doorOpen]);

  if (!doorOpen) {
    return <Door onEnter={() => setDoorOpen(true)} />;
  }

  return (
    <>
      <main className="w-full min-h-screen relative z-10">
        <section
          className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/city.png')" }}
        >
          <div className="z-10 max-w-4xl px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-red-800 drop-shadow-xl">
              Welcome to Purrgatory
            </h1>
            <p className="mt-4 text-lg text-black italic">
              Nine lives weren&apos;t enough. Welcome to the afterlife of feline rebellion.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => router.push("/gallery")}
                className="px-6 py-3 rounded-full bg-purple-700 text-white hover:bg-purple-800 shadow-lg"
              >
                View Gallery
              </button>
              <button
                onClick={() => router.push("/mint")}
                className="px-6 py-3 rounded-full bg-pink-700 text-white hover:bg-pink-800 shadow-lg"
              >
                Mint Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
