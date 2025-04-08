import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'


export default function Footer() {

    return (
        <div className=' bottom-0  w-[100%] bg-[#011F5B] py-9 z-20 '>
            
            <ul className="grid grid-flow-col grid-rows-1 grid-col-5 gap-y-7 py-2  justify-center lg:justify-evenly ">
                <li className="flex items-center  w-full h-max">
                    <FaFacebook className='h-max w-max min-h-8 mx-2 ' />
                  
                </li>
                <li className="flex items-center  w-[100%]">
                    <FaTwitter className='h-max w-max min-h-8 mx-2' />

                </li>
                <li className="flex items-center  w-[100%]">
                    <FaInstagram className='h-max w-max min-h-8 mx-2' />
                   
                </li>
                <li className="flex items-center  w-[100%]">
                    <FaLinkedin className='h-max w-max min-h-8 mx-2' />

                </li>
                <li className="flex items-center  w-[100%]">
                    <FaWhatsapp className='h-max w-max min-h-8 mx-2' />
                    
                </li>
            </ul>

        </div>
    )
}