import { useState } from "react";


function Setup() {
  const [currStep, setStep] = useState(0);
  return (
    <>
      {currStep == 0 &&
        <Step1></Step1>
      }
      {currStep == 1 &&
        <Step2></Step2>
      }
      <FooterButtons currStep={currStep} onNext={() => setStep(1)} onBack={() => setStep(0)} onReset={() => { alert('Reset') }}></FooterButtons>

    </>
  )
}

export default Setup;


const FooterButtons = ({ onNext, onBack, onReset, currStep }: any) => {
  return (
    <div className="flex justify-around  sticky bottom-0 bg-white py-3">
      <button
        onClick={onReset}
        className="mx-2 rounded-full border hover:bg-black text-black hover:text-white font-semibold py-2 px-4"
      >
        Reset
      </button>
      <span>
        {currStep != 0 &&
          <button
            onClick={onBack}
            className="mx-2 rounded-full border bg-white hover:bg-black text-black hover:text-white font-semibold py-2 px-4 "
          >
            &larr; Back
          </button>
        }
        {currStep == 0 &&
          <button
            onClick={onNext}
            className="mx-2 rounded-full border bg-black hover:bg-white text-white hover:text-black font-semibold py-2 px-4 "
          >
            Next &rarr;
          </button>
        }
        {currStep != 0 &&
          <button
            className="mx-2 rounded-full border bg-black hover:bg-white text-white hover:text-black font-semibold py-2 px-4 "
          >
            Finish
          </button>
        }
      </span>
    </div>
  );
};

function Step1() {
  return (
    <>
      <div className="mx-48">
        <h1 className="text-bold text-2xl my-5" >Initial Setup</h1>
        <div className="bg-white rounded p-6 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full ">
            <label htmlFor="input1" className="block mb-1">Chain Id
            </label>
            <input type="text" id="input1" className=" w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
          </div>
          <div className="w-full ">
            <label htmlFor="input2" className="block mb-1">Chain Name</label>
            <input type="text" id="input2" className="  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
          </div>
          <div className="w-full ">
            <label htmlFor="input3" className="block mb-1">Layer 1 RPC URL</label>
            <input type="text" id="input3" className="  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 3" />
          </div>
        </div>

        <h1 className="text-bold text-2xl my-5" >Wallet Setup (Optional)</h1>
        <div className="bg-white  rounded p-6 shadow-md">
          <div className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="w-full ">
              <label htmlFor="input1" className="block mb-1">Admin Public Address
              </label>
              <input type="text" id="input1" className=" w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
            </div>
            <div className="w-full ">
              <label htmlFor="input2" className="block mb-1">Admin Private Key</label>
              <input type="text" id="input2" className=" w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
            </div>
          </div>
          <p className="pb-4 p-2">Recommended ETH for Admin: <b>2 ETH</b></p>
          <hr />
          <div className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="w-full ">
              <label htmlFor="input1" className="block mb-1">Sequencer Public Address
              </label>
              <input type="text" id="input1" className=" w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
            </div>
            <div className="w-full ">
              <label htmlFor="input2" className="block mb-1">Sequencer Private Key</label>
              <input type="text" id="input2" className="  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
            </div>
          </div>
          <hr />
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full ">
              <label htmlFor="input1" className="block mb-1">Proposer Public Address
              </label>
              <input type="text" id="input1" className=" w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
            </div>
            <div className="w-full ">
              <label htmlFor="input2" className="block mb-1">Proposer Private Key</label>
              <input type="text" id="input2" className="  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
            </div>
          </div>
          <p className="pb-4 p-2" >Recommended ETH for Proposer: <b>5 ETH</b></p>

          <hr className="" />
          <div className=" p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full ">
              <label htmlFor="input1" className="block mb-1">Batcher Public Address
              </label>
              <input type="text" id="input1" className=" w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
            </div>
            <div className="w-full ">
              <label htmlFor="input2" className="block mb-1">Batcher Private Key</label>
              <input type="text" id="input2" className="  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
            </div>
          </div>
          <p>Recommended ETH for Batcher: <b>10 ETH</b></p>
        </div>
      </div>
    </>
  )
}




function Step2() {
  return (
    <div className="mx-48">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    1
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Hardware Requirments</p>
                <p className="text-gray-700">
                  <div className="card p-4">
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
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Clone the Repsistory</p>
                <p className="text-gray-700">

                  <div className="bg-black p-3 text-white">
                    git clone https://github.com/yasmuru/opstack-deployer.git
                    <p></p>
                    cd opstack-deployer/deploy-scripts
                  </div>
                </p>
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
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Run the Scritps</p>
                <p className="text-gray-700">


                  <div className="bg-black p-3 text-white">
                    ./initial.sh
                  </div>

                  <p className="text-md">
                    Once initial.sh script runs successfully,
                    <br />
                    We can refresh the terminal using
                    <br />
                    <br />
                    <code className="card p-2"> source ~/.bashrc</code>
                    <br />
                    <br />
                    Then we can run the setup / final script with below command
                    
                  </p>
                  <br />
                  <div className="bg-black p-3 text-white">
                    ./setup.sh
                  </div>
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
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
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
                    
                    <br />
                    <br />
                    For more details refer:
                    <a
                      href="https://stack.optimism.io/#dive-deeper-into-the-op-stack"
                      className="px-1 underline">OPStack Offical Docs
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
};