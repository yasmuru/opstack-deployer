import { useDisconnect } from "wagmi";
import LoaderIcon from "../../assets/loader.svg";

function FooterButtons({
    fieldsStatus,
    onNext,
    onBack,
    onReset,
    currStep,
    createFlag,
}: any) {
    const { disconnect } = useDisconnect();

    const handleNext = () => {
        if (!fieldsStatus) {
            return;
        }
        onNext();
    };

    return (
        <div className="flex justify-around w-full fixed bottom-0 bg-white py-3 border border-[#ECECEC]">
            <div className="flex justify-between w-[55%]">
                <button
                    onClick={() => {
                    onReset();
                    disconnect();
                    }}
                    className="flex items-center gap-x-1 space-x-1 rounded-full border text-black font-semibold py-2 px-4"
                >
                    <img src={LoaderIcon}></img> Reset
                </button>
                <span>
                    {currStep != 0 && (
                        <button
                            disabled={!fieldsStatus}
                            onClick={onBack}
                            className={` rounded-full border bg-white text-black font-semibold py-2 px-4 `}
                        >
                            &larr; Back
                        </button>
                    )}
                    {currStep == 2 || (currStep == 1 && !createFlag) ? null : (
                    <button
                        onClick={handleNext}
                        className={`ml-2 rounded-full border bg-black text-white font-semibold py-2 px-4  ${
                            !fieldsStatus
                            ? "bg-gray-200 pointer-events-none"
                            : "hover:bg-white hover:text-black"
                        }`}
                        >
                        Next &rarr;
                    </button>
                    )}
                    {currStep == 2 && (
                        <button className="mx-2 rounded-full border bg-black hover:bg-white text-white hover:text-black font-semibold py-2 px-4 ">
                            Finish
                        </button>
                    )}
                </span>
            </div>
        </div>
    );
}

export default FooterButtons;
