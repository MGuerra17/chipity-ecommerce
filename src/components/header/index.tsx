import ContactInfo from "./ContactInfo"
import Navbar from "./Navbar"

export default function Header():JSX.Element {
  return (
    <header>
      <ContactInfo />
      <Navbar />
    </header>
  )
}