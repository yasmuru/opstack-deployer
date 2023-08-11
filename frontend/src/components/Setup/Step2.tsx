import { useState } from "react";
import Loader from "../UI_Components/Loader";
import { initWasm } from "@trustwallet/wallet-core";
import { Wallet } from '../../utils/wallet'
import { useAtom } from "jotai";

const getAddress = async () => {
  // Creating Address for the required accounts for deploying the blockchain
  const walletCore = await initWasm();
  const admin = new Wallet(walletCore);
  const proposer = new Wallet(walletCore);
  const batcher = new Wallet(walletCore);
  const sequencer = new Wallet(walletCore);

  const adminAddr = await admin.createAccount();
  const proposerAddr = await proposer.createAccount();
  const batcherAddr = await batcher.createAccount();
  const sequencerAddr = await sequencer.createAccount();

  return {
    admin: adminAddr,
    proposer: proposerAddr,
    batcher: batcherAddr,
    sequencer: sequencerAddr
  }
};




function Step2({ address, setAddress, createFlagAtom }: any) {
  const [createFlag, setCreateFlag] = useAtom(createFlagAtom);
  const [loading, setLoading] = useState(false);

  //disabled -> If accounts are not created. 

  const handleWalletCreate = async () => {
    setLoading(true);
    const addr = await getAddress();
    setAddress(addr)
    setTimeout(() => {
      setCreateFlag(true);
      setLoading(false);
    }, 1000)
  }

  return (
    <div className="md:mx-24 lg:mx-48 mt-12">
      <h1 className="text-bold text-2xl my-5 font-sans" >Wallet Setup  </h1>
      <div className="bg-gray-200 p-4 m-2 rounded-md">
        Content : Create a accounts for Admin, Batcher, Sequencer and Proposer
      </div>


      {loading ?
        <div className="md:mx-24 lg:mx-48 ">
          <div className="flex justify-center mt-10">
            <Loader></Loader>
          </div>
        </div>
        : !createFlag ?
          <div className="flex justify-center mt-10">
            <button
              onClick={handleWalletCreate}
              className="text-xl mx-2 rounded-full border bg-white  text-black hover:bg-black hover:text-white font-semibold py-3 px-10"
            >
              Create Accounts
            </button>
          </div>
          :

          <div className="bg-white  rounded p-6 shadow-md">
            <div className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div className="w-full ">
                <label htmlFor="input1" className="block mb-1">Admin Public Address
                </label>
                <input disabled value={address.admin.publicAddr} type="text" id="input1" className="bg-gray-200 text-xs w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
              </div>
              <div className="w-full ">
                <label htmlFor="input2" className="block mb-1">Admin Private Key</label>
                <input disabled value={address.admin.privateKey} type="text" id="input2" className="bg-gray-200 text-xs w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
              </div>
            </div>
            <p className="pb-4 p-2">Recommended ETH for Admin: <b>2 ETH</b></p>
            <hr />
            <div className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div className="w-full ">
                <label htmlFor="input1" className="block mb-1">Sequencer Public Address
                </label>
                <input disabled value={address.sequencer.publicAddr} type="text" id="input1" className="bg-gray-200 text-xs w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
              </div>
              <div className="w-full ">
                <label htmlFor="input2" className="block mb-1">Sequencer Private Key</label>
                <input disabled value={address.sequencer.privateKey} type="text" id="input2" className="bg-gray-200 text-xs  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
              </div>
            </div>
            <hr />
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full ">
                <label htmlFor="input1" className="block mb-1">Proposer Public Address
                </label>
                <input disabled value={address.proposer.publicAddr} type="text" id="input1" className="bg-gray-200 text-xs w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
              </div>
              <div className="w-full ">
                <label htmlFor="input2" className="block mb-1">Proposer Private Key</label>
                <input disabled value={address.proposer.privateKey} type="text" id="input2" className="bg-gray-200 text-xs  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
              </div>
            </div>
            <p className="pb-4 p-2" >Recommended ETH for Proposer: <b>5 ETH</b></p>

            <hr className="" />
            <div className=" p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full ">
                <label htmlFor="input1" className="block mb-1">Batcher Public Address
                </label>
                <input disabled value={address.batcher.publicAddr} type="text" id="input1" className=" bg-gray-200 text-xs w-full rounded  border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 1" />
              </div>
              <div className="w-full ">
                <label htmlFor="input2" className="block mb-1">Batcher Private Key</label>
                <input disabled value={address.batcher.privateKey} type="text" id="input2" className="bg-gray-200 text-xs  w-full rounded border-grey-300 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4" placeholder="Input 2" />
              </div>
            </div>
            <p>Recommended ETH for Batcher: <b>10 ETH</b></p>
          </div>
      }
    </div>
  )
}

export default Step2;