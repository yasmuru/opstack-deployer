import { useAtom } from "jotai";
import { CopyBlock, dracula } from "react-code-blocks";

function Step3({ addressFromStorage, fields }: any) {
    const [address, _]: any = useAtom(addressFromStorage);
    return (
        <div className="md:mx-24 lg:mx-48 mt-9 w-[55%] !mx-auto">
        <h1 className="font-bold text-2xl my-5 mb-4 font-sans text-[#101521CC]">
            Finishing Up
        </h1>
        <p className="font-medium text-base text-[#797F8A] mb-8">
            Please follow the below instructions to complete the deployment of your
            OP Stack Chain.
        </p>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="grid gap-6 row-gap-10">
            <div className="pb-20">
                <div className="flex">
                <div className="flex flex-col items-center mr-4 ">
                    <div>
                    <div className="flex items-center justify-center w-10 h-10 border border-[#CED1D5] rounded-full text-lg font-bold text-[#101521CC]">
                        1
                    </div>
                    </div>
                    <div className="w-0.5 h-full bg-[#ECECEC]" />
                </div>
                <div className="pt-1 pb-6 w-full">
                    <p className="mb-4 text-lg font-bold text-[#101521CC]">
                    Hardware Requirements
                    </p>
                    <ul className="bg-[#F4F4F4] list-disc p-4 pl-10 rounded-2xl">
                    <li className="text-[#101521] font-normal text-sm mb-2">
                        OS: Linux Ubuntu 20.04 LTS
                    </li>
                    <li className="text-[#101521] font-normal text-sm mb-2">
                        RAM: Min. 8GB & 4 CPUs
                    </li>
                    <li className="text-[#101521] font-normal text-sm mb-2">
                        Storage: 250GB or more
                    </li>
                    </ul>
                    <p className="text-sm text-[#101521CC] mt-4">
                    You can use any cloud services like Digital Ocean, AWS, Google
                    Cloud, etc.,
                    </p>
                </div>
                </div>
                <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                    <div className="flex items-center justify-center w-10 h-10 border border-[#CED1D5] rounded-full text-lg font-bold text-[#101521CC]">
                        2
                    </div>
                    </div>
                    <div className="w-0.5 h-full bg-[#ECECEC]" />
                </div>
                <div className="pt-1 pb-6 w-full font-source_code text-xs">
                    <p className="mb-4 text-lg font-bold font-sans text-[#101521CC]">
                    Clone the Repository
                    </p>
                    <CopyBlock
                    text={`git clone https://github.com/yasmuru/opstack-deployer \ncd opstack-setup-script\n`}
                    language={"bash"}
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                    />
                    <p className="text-sm text-[#101521CC] my-4 font-sans">
                    Create your environment file with following keys, you can use
                    command nano .env or vim .env to create it.
                    </p>

                    <CopyBlock
                    langugage={"bash"}
                    text={`CHAIN_NAME=${fields.CHAIN_NAME}\nCHAIN_ID=${
                        fields.CHAIN_ID
                    }\nETH_RPC_URL=${fields.ETH_RPC_URL}\nADMIN_PUBLIC_ADDRESS=${
                        address?.admin?.publicAddr || ""
                    }\nADMIN_PRIVATE_KEY=${
                        address?.admin?.privateKey || ""
                    }		\nSEQUENCER_PUBLIC_ADDRESS=${
                        address?.sequencer?.publicAddr || ""
                    }	\nSEQUENCER_PRIVATE_KEY=${
                        address?.sequencer?.privateKey || ""
                    }					\nBATCHER_PUBLIC_ADDRESS=${
                        address?.batcher?.publicAddr || ""
                    }			\nBATCHER_PRIVATE_KEY=${
                        address?.batcher?.privateKey || ""
                    }				\nPROPOSER_PUBLIC_ADDRESS=${
                        address?.proposer?.publicAddr || ""
                    }			\nPROPOSER_PRIVATE_KEY=${
                        address?.proposer?.privateKey || ""
                    }`}
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                    ></CopyBlock>
                </div>
                </div>
                <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                    <div className="flex items-center justify-center w-10 h-10 border border-[#CED1D5] rounded-full text-lg font-bold text-[#101521CC]">
                        3
                    </div>
                    </div>
                    <div className="w-0.5 h-full bg-[#ECECEC]" />
                </div>
                <div className="pt-1 pb-8 font-source_code w-full">
                    <p className="mb-4 text-lg font-bold font-sans text-[#101521CC]">
                    Run the Scripts
                    </p>

                    <CopyBlock
                    language="bash"
                    text={`bash ./initial.sh\n or\n./initial.sh`}
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                    />

                    <p className="text-sm font-sans text-[#101521CC] my-4">
                    Once initial.sh script runs successfully,
                    <br />
                    We can refresh the terminal using
                    <code className="card p-[0.25rem] rounded-[0.25rem] text-[#f8f8f2] bg-[#282a36] ml-1">
                        {" "}
                        source ~/.bashrc
                    </code>
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
                    <ul className="text-sm font-sans text-[#101521CC] my-4">
                    <li>Performs Initializes the OP Stack Starts</li>
                    <li>The OP Stack</li>
                    </ul>
                </div>
                </div>
                <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                    <div className="flex items-center justify-center w-10 h-10 border border-[#CED1D5] rounded-full text-lg font-bold text-[#101521CC]">
                        4
                    </div>
                    </div>
                    <div className="w-0.5 h-full bg-[#ECECEC]" />
                </div>
                <div className="pt-1 pb-8">
                    <p className="mb-4 text-lg font-bold text-[#101521CC]">
                    L2 Chain Deployed Successfully
                    </p>
                    <p className="text-sm text-[#101521CC] my-4">
                    <p>
                        Once the script runs successfully you can now see the new
                        chain up and running in the port 8545. You can access it by
                        using the RPC end points as <code>host:8454</code>
                        along with chain id used earlier while running the script.
                        The best way to submit feedback and report bugs is to
                        <a
                        href="https://github.com/yasmuru/opstack-deployer/issues"
                        className="underline px-1"
                        >
                        Open a GitHub issue.
                        </a>
                        <br />
                        <br />
                        For more details refer:
                        <a
                        href="https://stack.optimism.io/#dive-deeper-into-the-op-stack"
                        className="px-1 underline"
                        >
                        OP Stack Official Docs
                        </a>
                        <br />
                        <br />
                        For setting up explorer, Please refer
                        <a
                        href="https://github.com/yasmuru/opstack-deployer"
                        className="underline px-1"
                        >
                        here.
                        </a>
                    </p>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Step3;
