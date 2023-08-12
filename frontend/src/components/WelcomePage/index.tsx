import { ConnectButton } from "@rainbow-me/rainbowkit";

function WelcomePage() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-items-center">
                <h1 className="text-5xl font-bold font-sans mb-6">
                Deploy your OP Stack Chain
                </h1>
                <p className="text-[#797F8A] text-xl font-normal leading-8 text-center max-w-[60rem] mb-14">
                Use the following interface to launch your L2 chain on OPStack. This
                interface can be used for testing and preparing for the super-chain,
                or you can modify it to suit your needs.{" "}
                <a
                    className="underline"
                    href="https://stack.optimism.io/"
                    target="_blank"
                >
                    Learn more
                </a>
                </p>
                <div className="flex justify-center">
                <ConnectButton />
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
