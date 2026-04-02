import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMap, FiMaximize, FiSettings, FiShare } from "react-icons/fi";

type SearchCardProps = {
  name: string;
  category: string;
  price: number;
  totalPrice: number;
  image: string;
  url: string;
};

export default function Search_Card({
  name,
  category,
  price,
  totalPrice,
  image,
  url,
}: SearchCardProps) {
  return (
    <section className="w-full max-w-7xl flex flex-col lg:flex-row h-auto lg:h-96 hover:bg-[#00e55e]/50 transition-all duration-500 bg-neutral-100 text-neutral-800 font-thin">
      
      <div className="p-10 h-full flex justify-center items-center">
        <Image src={image} alt={name} width={500} height={500} />
      </div>

      <div className="w-full h-full flex flex-col justify-between text-[10px] md:text-xs gap-4 p-10">
        
        <div className="flex flex-row justify-between items-start md:p-4">
          <span className="flex flex-col">
            <p>{name}</p>
            <p>{category}</p>
          </span>

          <span className="hidden md:flex flex-row gap-4 items-end text-neutral-500/50">
            <FiMaximize className="hover:text-indigo-500 cursor-pointer" />
            <FiMap className="hover:text-indigo-500 cursor-pointer" />
            <FiShare className="hover:text-indigo-500 cursor-pointer" />
          </span>
        </div>

        <p className="w-full h-2 border-b border-t border-neutral-500/50"></p>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          
          <span className="md:p-4">
            <p>COP $ {price.toLocaleString()}</p>
            <p>Tarifa por 4 días: {totalPrice.toLocaleString()}</p>
          </span>

          <span className="flex flex-row gap-2">
            <Link href={url} className="w-full flex gap-4 items-center hover:bg-indigo-500 hover:text-white p-2 md:p-4 border">
              Reservar
              <FiHeart className="hidden md:flex" />
            </Link>

            <Link href={url} className="w-full flex gap-4 items-center hover:bg-indigo-500 hover:text-white p-2 md:p-4 border">
              Ver más
              <FiSettings className="hidden md:flex" />
            </Link>
          </span>
        </div>

      </div>
    </section>
  );
}
