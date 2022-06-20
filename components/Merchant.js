const Merchant = () => {
  return (
    <>
      <div className="card">
        <img
          src="/boubyan-logo.png"
          width="150"
          height="150"
          className="mx-auto mb-8"
        ></img>

        <div className="card-item">
          <p>Merchant</p>
          <p className="col-span-2">
            somecompany general trading and contracting company
          </p>
        </div>

        <div className="card-item">
          <p>Amount</p>
          <p className="col-span-2">20 KD</p>
        </div>
      </div>
    </>
  )
}

export default Merchant
