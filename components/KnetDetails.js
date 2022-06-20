const KnetDetails = () => {
  return (
    <>
      <div className="card">
        <div className="card-item">
          <p>Select Your Bank</p>
          <select className="input col-span-2">
            <option value="0">--Select a Bank--</option>
            <option value="1">BOUBYAN</option>
            <option value="2">NBK</option>
            <option value="3">KFH</option>
          </select>
        </div>

        <div className="card-item">
          <p>Card Number</p>
          <div className="col-span-2 flex">
            <select className="input md:w-3/12">
              <option value="0">000000</option>
              <option value="1">111111</option>
              <option value="2">222222</option>
            </select>
            <input type="text" className="input w-full grow" />
          </div>
        </div>

        <div className="card-item">
          <p>Expiration Date</p>
          <div className="col-span-2 flex">
            <select className="input w-16">
              <option value="0">Day</option>
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
            </select>
            <select className="input grow">
              <option value="0">Month</option>
              <option value="0">22</option>
              <option value="1">23</option>
              <option value="2">24</option>
            </select>
          </div>
        </div>

        <div className="card-item">
          <p>PIN</p>
          <input type="password" className="col-span-2 input" />
        </div>
      </div>
    </>
  )
}

export default KnetDetails
