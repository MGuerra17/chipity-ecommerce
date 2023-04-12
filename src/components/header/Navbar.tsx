import Image from "next/image"
import IconNotification from "./IconNotification"
import { useArticleContext } from "@/contexts/articlesContext"
import { useState } from "react";
import CartSideBar from "../cartSideBar";
import FavsSideBar from "../favsSideBar";

export default function Navbar():JSX.Element {
  const {state} = useArticleContext()
  const [showCartMenu, setShowCartMenu] = useState<boolean>(false);
  const [showFavsMenu, setShowFavsMenu] = useState<boolean>(false);

  const handleToggleCartMenu = ():void => {
    setShowCartMenu(!showCartMenu)
  }

  const handleToggleFavsMenu = ():void => {
    setShowFavsMenu(!showFavsMenu)
  }


  return (
    <nav className="bg-white border-gray-200 px-4 md:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl h-11">
            <a href="/" className="flex items-center">
                <Image src="/chipity-logo.svg" width={100} height={26} alt="Chipity Logo" />
            </a>
            <div className="flex items-center lg:order-2 gap-x-4">
                <IconNotification 
                title="Favorites" 
                icon="https://icongr.am/fontawesome/heart-o.svg?size=30&color=currentColor" 
                notificationsAmount={state.favs.length} 
                clickHandler={handleToggleFavsMenu} 
                />
                <IconNotification 
                title="Shopping bag" 
                icon="https://icongr.am/fontawesome/shopping-bag.svg?size=30&color=currentColor" 
                notificationsAmount={state.cart.length} 
                clickHandler={handleToggleCartMenu} 
                />
            </div>
            
        </div>
        <CartSideBar show={showCartMenu} setShow={handleToggleCartMenu} />
        <FavsSideBar show={showFavsMenu} setShow={handleToggleFavsMenu} />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js" />
    </nav>
)
}