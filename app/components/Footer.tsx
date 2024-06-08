import Image from 'next/image';
import get_app from '../../public/images/get_on_app.png';
import get_app2 from '../../public/images/get_on_play.png';
import qr from '../../public/images/qr.png'
import { LuSendHorizonal } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#030406] text-white pt-10 pb-14">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          <div className='pr-4'>
            <h2 className="mb-6 text-2xl font-semibold">Trendo</h2>
            <h3 className="mb-6 text-xl font-normal">Subscribe</h3>
            <ul className="text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Get 10% off your first order</a>
              </li>
              <li>
                <div className="relative max-w-md">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full py-2 pl-4 pr-10 text-gray-500 bg-transparent border-white border-2 rounded-sm outline-none"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                    <LuSendHorizonal className="w-6 h-6" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-normal">Support</h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">111 Sushil Thapa, Kathmandu, Nepal</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">trendo@gmail.com</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">+8812-1230-1233</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-normal">Account</h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">My Account</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Login / Register</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Cart</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Wishlist</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Shop</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-normal">Quick Link</h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms Of Use</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">FAQ</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Download App</h2>
            <h3 className='text-sm text-gray-400 mb-3'>Save 3$ with App New User Only</h3>
            <div className='flex flex-row items-center'>
              <div>
                <Image src={qr} alt='QR Code' className='w-20 h-auto'/>
              </div>
              <div>
              <Image src={get_app2} alt='get-app-from-app-store' className=' w-24 h-auto ml-2' />
              <Image src={get_app} alt='get-app-from-app-store' className=' w-24 h-auto ml-2' />
              </div>
            </div>
            <ul className="text-gray-300 font-medium mt-4">
              <li className="mb-4">
                <div className="hover:underline">
                  <span className="flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                      </svg>
                      <span className="sr-only">Discord community</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path d="M10 0C4.477 0 0 3.804 0 8.5c0 2.67 1.523 5.032 3.92 6.543.287.127.609.333.698.61.228.678.22.992.375 1.568.157.582.514 1.417 1.002 1.37.482-.048.775-.455 1.082-.838.327-.409.458-.567 1.02-.567.57 0 .724.2 1.02.566.31.388.61.797 1.08.84.494.046.852-.799 1.01-1.38.153-.576.147-.89.374-1.567.089-.278.41-.484.698-.61C18.477 13.532 20 11.17 20 8.5 20 3.804 15.523 0 10 0Zm-2.267 5.762c0-.613.497-1.11 1.11-1.11h2.314c.614 0 1.111.497 1.111 1.11v.334c0 .615-.497 1.111-1.11 1.111H8.843a1.11 1.11 0 0 1-1.11-1.11v-.335Zm6.202 5.846c-.143.19-.405.273-.64.17l-1.62-.697-1.62.697a.58.58 0 0 1-.64-.17.548.548 0 0 1-.099-.654l.891-1.533a3.067 3.067 0 0 1-1.36-2.573c0-.036.003-.071.007-.106.007-.057.062-.099.12-.092h3.99c.058-.007.113.035.12.092a3.07 3.07 0 0 1-.588 2.071 3.07 3.07 0 0 1-.77.693l.891 1.533c.14.244.107.556-.1.654Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Github account</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1.003a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.96 6.32a1.526 1.526 0 0 1-2.095-.585 2.542 2.542 0 0 0-4.69 0 1.526 1.526 0 0 1-2.68-.069A7 7 0 1 0 17 10a6.96 6.96 0 0 0-3.04-5.68ZM13.5 13a3.5 3.5 0 0 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Dribbble account</span>
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;