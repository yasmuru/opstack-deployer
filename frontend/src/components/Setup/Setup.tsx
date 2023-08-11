import { useEffect, useState } from "react";

import { atom, useAtom } from 'jotai'
import { atomWithStorage, RESET } from 'jotai/utils';
import FooterButtons from "./FooterButtons";
import Step2 from "./Step2";
import Step3 from "./Step3";


type Fields = {
  CHAIN_NAME: string;
  CHAIN_ID: number;
  ETH_RPC_URL: string;
};

interface IStep1Props {
  fields: Fields,
  setFields: Function

}


// Creating a flag to remember the address created
const addressFromStorage = atomWithStorage('address', {});

// Creating a flag to remember the state of user opting to create wallets or not
const createFlagAtom = atom(false);


function Setup() {
  const [currStep, setStep] = useState(0);
  const [address, setAddress] = useAtom(addressFromStorage);

  const [fields, setFields] = useState({
    CHAIN_NAME: "My-OPStack-Chain",
    CHAIN_ID: Math.floor(Math.random() * 90000) + 10000,
    ETH_RPC_URL: "https://rpc.ankr.com/eth_goerli"
  });
  const fieldsStatus = fields.CHAIN_NAME && fields.CHAIN_ID && fields.ETH_RPC_URL;
  const [createFlag, setCreateFlag] = useAtom(createFlagAtom);

  const handleReset = () => {
    setFields({
      CHAIN_NAME: "",
      CHAIN_ID: Math.floor(Math.random() * 90000) + 10000,
      ETH_RPC_URL: ""
    })
    setAddress({});
    setStep(0);
    setCreateFlag(false);
  }

  return (
    <>
      {currStep == 0 &&
        <Step1 fields={fields} setFields={setFields}></Step1>
      }
      {
        currStep == 1 &&
        <Step2 address={address} setAddress={setAddress} createFlagAtom={createFlagAtom}></Step2>

      }
      {currStep == 2 &&
        <Step3 fields={fields} addressFromStorage={addressFromStorage}></Step3>
      }
      <FooterButtons fieldsStatus={fieldsStatus} currStep={currStep} onNext={() => setStep((prev) => prev + 1)} onBack={() => setStep((prev) => prev - 1)} onReset={handleReset}></FooterButtons>

    </>
  )
}

export default Setup;


function Step1({ fields, setFields }: IStep1Props) {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFields((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  };


  return (
    <>
      <div className="md:mx-24 lg:mx-48 mt-12">
        <h1 className="font-bold text-2xl my-5 font-sans">Initial Setup</h1>
        <div className="bg-white rounded p-6 shadow-md grid grid-cols-1  gap-4">
          <div className="w-full ">
            <label htmlFor="input1" className="block mb-1 font-sans text-base font-semibold">Chain Id
            </label>
            <input onChange={handleInputChange} value={fields.CHAIN_ID} type="text" name="CHAIN_ID" id="chain_id" className=" w-full rounded  border-grey-300 border-2 focus:border-gray-500 focus:ring focus:ring-gray-200 p-4" placeholder="" />
          </div>
          <div className="w-full ">
            <label htmlFor="input2" className="block mb-1 font-sans text-base font-semibold">Chain Name</label>
            <input onChange={handleInputChange} value={fields.CHAIN_NAME} type="text" name="CHAIN_NAME" id="chain_name" className="  w-full rounded border-grey-300 border-2 focus:border-gray-500 focus:ring focus:ring-gray-200 p-4" placeholder="" />
          </div>
          <div className="w-full ">
            <label htmlFor="input3" className="block mb-1 font-sans text-base font-semibold">Layer 1 - RPC URL</label>
            <input onChange={handleInputChange} value={fields.ETH_RPC_URL} type="text" name="ETH_RPC_URL" id="rpc_url" className="  w-full rounded border-grey-300 border-2 focus:border-gray-500 focus:ring focus:ring-gray-200 p-4" placeholder="" />
          </div>
        </div>
      </div>
    </>
  )
}



