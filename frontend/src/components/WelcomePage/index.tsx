import { ConnectButton } from "@rainbow-me/rainbowkit";

function WelcomePage() {
    return (
        <div className="pt-40">
            <div className="flex flex-col items-center justify-items-center gap-6">
                <h1 className="text-4xl font-bold font-sans">Deploy your OP Stack Chain</h1>
                <p className="mt-2 text-[#797F8A] text-xl font-medium leading-8 text-center max-w-2xl">Use the following interface to launch your L2 chain on OPStack. This interface can be used for testing and preparing for the super-chain, or you can modify it to suit your needs. <a className="underline" href="https://stack.optimism.io/" target="_blank">Learn more</a></p>
                <div className="flex justify-center">
                    <ConnectButton />
                </div>
            </div >
        </div>
    )
}

export default WelcomePage;