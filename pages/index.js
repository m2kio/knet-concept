import ConfirmBtns from '../components/ConfirmBtns'
import KnetDetails from '../components/KnetDetails'

import Merchant from '../components/Merchant'
import Socials from '../components/Socials'

export default function Home() {
  return (
    <>
      <div className="md:w-2/3 w-full mx-auto">
        <Merchant />
        <KnetDetails />
        <ConfirmBtns />
        <Socials />
      </div>
    </>
  )
}
