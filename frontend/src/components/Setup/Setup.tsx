import { useState } from "react";

import { atom, useAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import FooterButtons from "./FooterButtons";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

type Fields = {
  CHAIN_NAME: string;
  CHAIN_ID: number;
  ETH_RPC_URL: string;
};

// Creating a flag to remember the address created
const addressFromStorage = atomWithStorage("address", {});

// Creating a flag to remember the state of user opting to create wallets or not
const createFlagAtom = atom(false);

function Setup() {
  const [currStep, setStep] = useState(0);
  const [address, setAddress] = useAtom(addressFromStorage);

  const [fields, setFields] = useState({
    CHAIN_NAME: "My OPStack Chain",
    CHAIN_ID: Math.floor(Math.random() * 90000) + 10000,
    ETH_RPC_URL: "https://rpc.ankr.com/eth_goerli",
  });
  const fieldsStatus =
    fields.CHAIN_NAME && fields.CHAIN_ID && fields.ETH_RPC_URL;
  const [createFlag, setCreateFlag] = useAtom(createFlagAtom);

  const handleReset = () => {
    setFields({
      CHAIN_NAME: "My OPStack Chain",
      CHAIN_ID: Math.floor(Math.random() * 90000) + 10000,
      ETH_RPC_URL: "",
    });
    setAddress({});
    setStep(0);
    setCreateFlag(false);
  };

  return (
    <>
      {currStep == 0 && <Step1 fields={fields} setFields={setFields}></Step1>}
      {currStep == 1 && (
        <Step2
          address={address}
          setAddress={setAddress}
          createFlagAtom={createFlagAtom}
        ></Step2>
      )}
      {currStep == 2 && (
        <Step3 fields={fields} addressFromStorage={addressFromStorage}></Step3>
      )}
      <FooterButtons
        fieldsStatus={fieldsStatus}
        currStep={currStep}
        onNext={() => setStep((prev) => prev + 1)}
        onBack={() => setStep((prev) => prev - 1)}
        onReset={handleReset}
        createFlag={createFlag}
      ></FooterButtons>
    </>
  );
}

export default Setup;
