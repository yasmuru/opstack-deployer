import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import Image from "./assets/logo.png";
import Setup from "./components/Setup/Setup";
import WelcomePage from "./components/WelcomePage";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <>
      <div className="flex px-40 py-3 fixed top-0 left-0 right-0 z-10 w-full justify-around z-1 bg-white h-16">
        <div className="container flex items-center justify-between">
          <img className="w-[12%] object-contain" src={Image}></img>

          {/** @see https://www.rainbowkit.com/docs/connect-button */}
          <ConnectButton />
        </div>
      </div>
      <div className="bg-custom-gradient h-[calc(100vh-64px)]">
        <div className="pt-14 h-full overflow-y-auto">
          {isConnected ? (
            <>
              <Setup />
            </>
          ) : (
            <WelcomePage />
          )}
        </div>
      </div>
    </>
  );
}
