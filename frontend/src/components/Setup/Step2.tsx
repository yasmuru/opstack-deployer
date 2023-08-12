import { useState } from "react";
import Loader from "../UI_Components/Loader";
import { initWasm } from "@trustwallet/wallet-core";
import { Wallet } from "../../utils/wallet";
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
    sequencer: sequencerAddr,
  };
};

function Step2({ address, setAddress, createFlagAtom }: any) {
  const [createFlag, setCreateFlag] = useAtom(createFlagAtom);
  const [loading, setLoading] = useState(false);

  //disabled -> If accounts are not created.

  const handleWalletCreate = async () => {
    setLoading(true);
    const addr = await getAddress();
    setAddress(addr);
    setTimeout(() => {
      setCreateFlag(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="md:mx-24 lg:mx-48 mt-9 w-[55%] !mx-auto">
      <h1 className="font-bold text-2xl my-5 mb-4 font-sans text-[#101521CC]">
        Wallet Setup{" "}
      </h1>
      <p className="font-medium text-base text-[#797F8A]">
        Create wallets for Admin, Batcher, Sequencer and Proposer
      </p>

      {loading ? (
        <div className="md:mx-24 lg:mx-48 ">
          <div className="flex justify-center mt-10">
            <Loader></Loader>
          </div>
        </div>
      ) : !createFlag ? (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleWalletCreate}
            className="text-xl mx-2 rounded-full border bg-white  text-black hover:bg-black hover:text-white font-semibold py-3 px-10"
          >
            Create Wallets
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 shadow-2xl mt-6 mb-8">
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 pb-1.5">
            <div className="w-full ">
              <label
                htmlFor="input1"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Admin </span> Public Address
              </label>
              <input
                disabled
                value={address.admin.publicAddr}
                type="text"
                id="input1"
                className="bg-gray-200 text-xs w-full rounded  border-grey-300 border-2  p-4"
                placeholder="Input 1"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="input2"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold"> Admin</span> Private Key
              </label>
              <input
                disabled
                value={address.admin.privateKey}
                type="text"
                id="input2"
                className="bg-gray-200 text-xs w-full rounded border-grey-300 border-2   p-4"
                placeholder="Input 2"
              />
            </div>
          </div>
          <p className="pb-4 font-sans text-xs italic text-[#101521CC]">
            Recommended ETH for Admin: <b>2 ETH</b>
          </p>
          <hr />
          <div className="py-4  grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="w-full ">
              <label
                htmlFor="input1"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Sequencer</span> Public Address
              </label>
              <input
                disabled
                value={address.sequencer.publicAddr}
                type="text"
                id="input1"
                className="bg-gray-200 text-xs w-full rounded  border-grey-300 border-2   p-4"
                placeholder="Input 1"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="input2"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Sequencer</span> Private Key
              </label>
              <input
                disabled
                value={address.sequencer.privateKey}
                type="text"
                id="input2"
                className="bg-gray-200 text-xs  w-full rounded border-grey-300 border-2   p-4"
                placeholder="Input 2"
              />
            </div>
          </div>
          <hr />
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 pb-1.5">
            <div className="w-full ">
              <label
                htmlFor="input1"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Proposer</span> Public Address
              </label>
              <input
                disabled
                value={address.proposer.publicAddr}
                type="text"
                id="input1"
                className="bg-gray-200 text-xs w-full rounded  border-grey-300 border-2   p-4"
                placeholder="Input 1"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="input2"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Proposer</span> Private Key
              </label>
              <input
                disabled
                value={address.proposer.privateKey}
                type="text"
                id="input2"
                className="bg-gray-200 text-xs  w-full rounded border-grey-300 border-2   p-4"
                placeholder="Input 2"
              />
            </div>
          </div>
          <p className="pb-4 text-xs italic text-[#101521CC]">
            Recommended ETH for Proposer: <b>5 ETH</b>
          </p>

          <hr className="" />
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 pb-1.5">
            <div className="w-full ">
              <label
                htmlFor="input1"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Batcher</span> Public Address
              </label>
              <input
                disabled
                value={address.batcher.publicAddr}
                type="text"
                id="input1"
                className=" bg-gray-200 text-xs w-full rounded  border-grey-300 border-2   p-4"
                placeholder="Input 1"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="input2"
                className="font-sans block text-sm font-medium text-[#101521CC] mb-1"
              >
                <span className="font-semibold">Batcher</span> Private Key
              </label>
              <input
                disabled
                value={address.batcher.privateKey}
                type="text"
                id="input2"
                className="bg-gray-200 text-xs  w-full rounded border-grey-300 border-2   p-4"
                placeholder="Input 2"
              />
            </div>
          </div>
          <p className="text-xs italic text-[#101521CC]">
            Recommended ETH for Batcher: <b>10 ETH</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Step2;
