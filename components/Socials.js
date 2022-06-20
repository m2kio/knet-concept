import Link from 'next/link'

const Socials = () => {
  return (
    <>
      <div className="flex space-x-4 justify-center">
        <Link href="#">
          <a>
            <img src="/socials/instagram.svg" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <img src="/socials/twitter.svg" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <img src="/socials/facebook.svg" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <img src="/socials/youtube.svg" />
          </a>
        </Link>
      </div>

      <div className="text-center mt-3">
        <p className="text-white">Knet Payment Gateway</p>
        <img src="/knet-logo.png" className="mx-auto" width="40" height="40" />
      </div>

      <div className="text-white text-sm text-center mt-4 underline">
        <Link href="https://github.com/m2kio/knet-concept" target="_blank">
          <a>Source Code</a>
        </Link>
      </div>
    </>
  )
}

export default Socials
