import Image from "next/image"
import Link from "next/link"


export default function Hero() {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
            <Image src={"/undraw_home_cinema_l7yl.png"} width={200} height={200} layout="responsive" />
        </div>
        <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to Movie App</h1>
        <p className="text-gray-500">Produce Film feature, Television and Game.</p>
        <Link href="/contact">
            <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">Contact Us!</button>
        </Link>
    </div>
  )
}

