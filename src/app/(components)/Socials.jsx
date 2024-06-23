import Link from "next/link";



import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Youtube from '../public/youtube.svg'
import Telegram from '../public/telegram.svg'
import WhatsApp from '../public/whatsapp.svg'
import Image from "next/image";



const Socials = () => {
  return <div className="flex items-center gap-x-8 text-lg">

    <Link href={'https://www.facebook.com/people/Iglesia-Crs/pfbid0nVgFj3VshYopKHuyFM9RkPdcCD1pVYQagixqGi6udg2S4RrybCzZCPE9Mif8FoPvl/?mibextid=ZbWKwL'} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Facebook} width={10} height={10} alt="" /> </Link>

    <Link href={'https://www.instagram.com/iglesiacrsalta/?igsh=MWwydzV4Y3ByZ2x1Zw%3D%3D'} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Instagram} width={20} height={20} alt="" /> </Link>
    <Link href={'https://www.youtube.com/@iglesiacrs3122?si=ZRpKedU98XWFXgUW'} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Youtube} width={20} height={20} alt="" /> </Link>
    <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Telegram} width={20} height={20} alt="" /> </Link>
    <Link rel="noopener noreferrer"
      target="_blank"
      href="https://wa.me/+543876148398?text=Escribenos para poder orar por ti" className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={WhatsApp} width={20} height={20} alt="" /> </Link>
  </div>;
};

export default Socials;
