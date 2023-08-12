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
            OPStack Chain.
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
                    <p className="text-sm font-sans text-[#101521CC] my-4">Once you've logged into the server, clone our repository.</p>
                    <CopyBlock
                    text={`git clone https://github.com/yasmuru/opstack-deployer \ncd opstack-deployer\n`}
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
                    }\nRPC_KIND=any`}
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
                    <p className="text-sm font-sans text-[#101521CC] my-4">You can manually run the scripts or run it through docker. Make sure you have updated .env with proper values and deposited required ETH.</p>
                    <p className="text-md font-sans text-[#101521CC] my-4">For manual</p>

                    <CopyBlock
                    language="bash"
                    text={`cd deployer-scripts \n./opstack.sh`}
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                    />

                    <p className="text-md font-sans text-[#101521CC] my-4">For docker</p>
                    <p className="text-sm font-sans text-[#101521CC] my-4">Make sure you have installed docker and docker-compose.</p>

                    {/* <p className="text-sm font-sans text-[#101521CC] my-4">If docker not installed, for ubuntu</p>
                    <CopyBlock
                    language="bash"
                    text={`apt install docker.io \nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \nsudo chmod +x /usr/local/bin/docker-compose`}
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                    /> */}
                    
                    {/* <p className="text-sm font-sans text-[#101521CC] my-4">then you can build and run docker as follows</p> */}

                    <CopyBlock
                    language="bash"
                    text={`docker-compose up --build`}
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                    />
                    
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
                        using the RPC end points as <b>host:8545</b> along with chain id used earlier while running the script.
                    </p>
                    <br></br>
                    <p>Once the chain is successfully created, you will receive the L1 bridge proxy address as the output. You can then send a small amount of ETH (0.1 or less) to that bridge proxy address, and it will be bridged to your L2 Chain.</p>
                    <br></br>
                    <p>
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
