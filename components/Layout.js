import Meta from "./Meta"
import Navbar from "./Navbar"


export default function Layout({ children }) {
  return (
    <div>
        <Meta />
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}
