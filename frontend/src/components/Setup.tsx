

function Setup() {
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
          <div className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4">
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

      <FooterButtons onNext={console.log} onBack={() => { }} onReset={() => { }}></FooterButtons>

    </>
  )
}

export default Setup;


const FooterButtons = ({ onNext, onBack, onReset }: any) => {
  return (
    <div className="flex justify-around  sticky bottom-0 bg-white py-3">
      <button
        onClick={onReset}
        className="mx-2 rounded-full border hover:bg-black text-black hover:text-white font-semibold py-2 px-4"
      >
        Reset
      </button>
      <span>
        {/* <button
          onClick={onBack}
          className="mx-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 "
        >
          Back
        </button> */}
        <button
          onClick={onNext}
          className="mx-2 rounded-full border bg-black hover:bg-white text-white hover:text-black font-semibold py-2 px-4 "
        >
          Next &rarr;
        </button>
      </span>
    </div>
  );
};
