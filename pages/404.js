import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";

// useEffect(() => {
//   const timer = setTimeout(() => {
//     window.location.href = "/";
//   }, 5000);
// }, [])

export default function NotFound() {
  return (
    <div className="text-center my-10">
        <h1 className="font-bold text-3xl my-10">Page Not Found</h1>
        <Image src={"/vecteezy_illustration-vector-graphic-cartoon-character-of-not-connected_6584738.jpg"} width={800} height={500} />
        <br/>
        <Link  href="/">
        <button className="text-center text-3xl bg-blue-500 font-bold mt-10 p-5 rounded-xl ">Go To Home Page</button>
        </Link>
    </div>
  )
}

