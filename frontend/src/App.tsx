import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import Image from "./assets/logo.png"
import Setup from "./components/Setup";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <>
      <div className="flex p-3 mx-5 w-full justify-around">

        <img src={Image}></img>

        {/** @see https://www.rainbowkit.com/docs/connect-button */}
        <ConnectButton />
      </div>
      <div className="bg-[#FEF7F8]">
        {isConnected ? (
          <>
            <Setup />
          </>
        ) :
          (
            <>
              <div className="flex justify-center items-center h-3/4">
                <div className="text-center">
                  <h1 className="text-3xl font-bold">Deploy your OP Stack Chain</h1>
                  <p className="mt-2">Use the following interface to launch your L2 chain on OPStack. This interface can be used for testing and preparing for the super-chain, or you can modify it to suit your needs. Learn more</p>
                </div>
              </div>
              <div>
              </div>
            </>

          )}


      </div>
    </>
  );
}


