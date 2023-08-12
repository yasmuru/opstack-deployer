type Fields = {
    CHAIN_NAME: string;
    CHAIN_ID: number;
    ETH_RPC_URL: string;
};

interface IStep1Props {
    fields: Fields;
    setFields: Function;
}

function Step1({ fields, setFields }: IStep1Props) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFields((prevState: any) => {
            return { ...prevState, [name]: value };
        });
    };

    return (
        <>
        <div className="md:mx-24 lg:mx-48 mt-9 w-[55%] !mx-auto">
            <h1 className="font-bold text-2xl my-5 font-sans text-[#101521CC]">
                Initial Setup
            </h1>
            <div className="bg-white rounded-2xl p-6 shadow-2xl grid grid-cols-1 gap-4">
                <div className="w-full">
                    <label
                        htmlFor="input1"
                        className="block mb-1 font-sans text-sm font-semibold text-[#101521CC]"
                    >
                        Chain Id
                    </label>
                    <input
                        onChange={handleInputChange}
                        value={fields.CHAIN_ID}
                        type="text"
                        name="CHAIN_ID"
                        id="chain_id"
                        className="w-full rounded border-grey-300 border border-[#ECECEC] focus:outline-none focus-visible:ring focus:border-gray-500 focus:ring focus:ring-gray-200 p-4"
                        placeholder=""
                    />
            </div>
            <div className="w-full">
                <label
                    htmlFor="input2"
                    className="block mb-1 font-sans text-sm font-semibold text-[#101521CC]"
                >
                    Chain Name
                </label>
                <input
                    onChange={handleInputChange}
                    value={fields.CHAIN_NAME}
                    type="text"
                    name="CHAIN_NAME"
                    id="chain_name"
                    className="w-full rounded border-grey-300 border border-[#ECECEC] focus:outline-none focus-visible:ring focus:border-gray-500 focus:ring focus:ring-gray-200 p-4"
                    placeholder=""
                />
            </div>
            <div className="w-full">
                <label
                    htmlFor="input3"
                    className="block mb-1 font-sans text-sm font-semibold text-[#101521CC]"
                >
                    Layer 1 - RPC URL
                </label>
                <input
                    onChange={handleInputChange}
                    value={fields.ETH_RPC_URL}
                    type="text"
                    name="ETH_RPC_URL"
                    id="rpc_url"
                    className="w-full rounded border-grey-300 border border-[#ECECEC] focus:outline-none focus-visible:ring focus:border-gray-500 focus:ring focus:ring-gray-200 p-4"
                    placeholder=""
                />
            </div>
        </div>
        </div>
    </>
    );
}

export default Step1;