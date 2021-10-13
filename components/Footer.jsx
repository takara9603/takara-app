import Image from 'next/image'

const Footer = (props) => {
    return (
        <footer className="py-9 text-white bg-header-black">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <p className="text-xs uppercase text-center">Created by <span className="text-sm ml-4 font-bold">高良　路奈</span></p>
          <div className="w-16 py-4 mx-auto md:py-8 xl:w-24 hover:opacity-75">
            <Image src="/images/logo_white.png" alt="fwywd white Logo" className="object-contain" width={64} height={77} />
          </div>
          <div className="flex justify-center gap-x-3">
            <a href="#" target="_blank" className="hover:opacity-75">
              <Image src="/images/twitter.png" alt="twitter Logo" className="h-3 object-contain" width={12} height={12} />
            </a>
            <a href="#" target="_blank" className="hover:opacity-75">
              <Image src="/images/facebook.png" alt="twitter Logo" className="h-3 object-contain" width={12} height={12} />
            </a>
          </div>
          <p className="mt-6 text-xs uppercase text-center">© 2021 Takara</p>
        </div>
      </footer>
    )
};

export default Footer;