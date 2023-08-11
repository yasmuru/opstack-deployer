import { useAtom } from "jotai";
import { CopyBlock, dracula } from "react-code-blocks";



let address = {
    CHAIN_NAME: "",
    CHAIN_ID: "",
    ETH_RPC_URL: "",
    ETH_RPC_KIND: "",
    ADMIN_PUBLIC_ADDRESS: "",
    ADMIN_PRIVATE_KEY: "",
    SEQUENCER_PUBLIC_ADDRESS: "",
    SEQUENCER_PRIVATE_KEY: "",
    BATCHER_PUBLIC_ADDRESS: "",
    BATCHER_PRIVATE_KEY: "",
    PROPOSER_PUBLIC_ADDRESS: "",
    PROPOSER_PRIVATE_KEY: "",
};




function Step3({ addressFromStorage, fields }: any) {
    const [address, _]: any = useAtom(addressFromStorage);
    return (
        <div className="mx-48">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 row-gap-10">
                    <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4 ">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        1
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8 w-full">
                                <p className="mb-2 text-lg font-bold">Hardware Requirments</p>
                                <p className="text-gray-700">
                                    <div className="border p-4 bg-gray-100 w-10/12">
                                        OS: Linux Ubuntu 20.04 LTS
                                        <br />RAM: Min. 8GB & 4 CPUs
                                        <br />
                                        Storage: 250GB or more
                                    </div>
                                    <p className="text-lg text-gray-700 font-semibold">
                                        You can use any cloud services like Digital Ocean, AWS,
                                        Google Cloud, etc.,
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        2
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8 w-full">
                                <p className="mb-2 text-lg font-bold">Clone the Repsistory</p>
                                <CopyBlock
                                    text={`git clone https://github.com/yasmuru/opstack-deployer \ncd opstack-deployer/deploy-scripts\n`}
                                    language={"bash"}
                                    codeBlock
                                    theme={dracula}
                                    showLineNumbers={false}
                                />
                                <p className="text-lg text-gray-700 font-semibold">
                                    Create your environment file with following keys, you can use command nano .env or vim .env to create it.
                                </p>

                                <CopyBlock
                                    langugage={"bash"}
                                    text={`CHAIN_NAME=${fields.CHAIN_NAME}\nCHAIN_ID=${fields.CHAIN_ID}\nETH_RPC_URL=${fields.ETH_RPC_URL}\nADMIN_PUBLIC_ADDRESS=${address?.admin?.publicAddr || ""}\nADMIN_PRIVATE_KEY=${address?.admin?.privateKey || ""}		\nSEQUENCER_PUBLIC_ADDRESS=${address?.sequencer?.publicAddr || ""}	\nSEQUENCER_PRIVATE_KEY=${address?.sequencer?.privateKey || ""}					\nBATCHER_PUBLIC_ADDRESS=${address?.batcher?.publicAddr || ""}			\nBATCHER_PRIVATE_KEY=${address?.batcher?.privateKey || ""}				\nPROPOSER_PUBLIC_ADDRESS=${address?.proposer?.publicAddr || ""}			\nPROPOSER_PRIVATE_KEY=${address?.proposer?.privateKey || ""}`}
                                    codeBlock
                                    theme={dracula}
                                    showLineNumbers={false}
                                >

                                </CopyBlock>


                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        3
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8  w-full">
                                <p className="mb-2 text-lg font-bold">Run the Scritps</p>
                                <p className="text-gray-700">

                                    <CopyBlock
                                        language="bash"
                                        text={`bash ./initial.sh\n or\n./initial.sh`}
                                        codeBlock
                                        theme={dracula}
                                        showLineNumbers={false}
                                    />




                                    <p className="text-md">
                                        Once initial.sh script runs successfully,
                                        <br />
                                        We can refresh the terminal using
                                        <code className="card p-2"> source ~/.bashrc</code>
                                        <br />
                                        Then we can run the setup / final script with below command
                                    </p>


                                    <CopyBlock
                                        language="bash"
                                        text={`bash ./setup.sh\nor\n./setup.sh`}
                                        codeBlock
                                        theme={dracula}
                                        showLineNumbers={false}
                                    />

                                    {/* <div className="bg-black p-3 text-white">
                      bash ./setup.sh\nor\n./setup.sh
                    </div> */}
                                    <ul>
                                        <li>- Performs Initializes the OP Stack Starts</li>
                                        <li>- The OP Stack</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        4
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">L2 Chain Deployed Successfully</p>
                                <p className="text-gray-700">
                                    <p>
                                        Once the script runs successfully you can now see the
                                        new chain up and running in the port 8545. You can
                                        access it by using the RPC end points as <code
                                        >host:8454</code
                                        >
                                        along with chain id used earlier while running the script.
                                        The best way to submit feedback and report bugs is to
                                        <a
                                            href="https://github.com/yasmuru/opstack-deployer/issues"
                                            className="underline px-1">Open a GitHub issue
                                        </a>
                                        <br />
                                        <br />
                                        For more details refer:
                                        <a
                                            href="https://stack.optimism.io/#dive-deeper-into-the-op-stack"
                                            className="px-1 underline">OPStack Offical Docs
                                        </a>
                                        <br />
                                        <br />
                                        For setting up explorer, Please refer
                                        <a
                                            href="https://github.com/yasmuru/opstack-deployer"
                                            className="underline px-1">here</a>
                                    </p>

                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Step3;