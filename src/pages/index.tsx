import Head from "next/head";
import { useEffect, useState } from "react";
import Article from "@/components/article";
import FilterSideBar from "@/components/filterSideBar";
import ItemsController from "@/components/itemsController";
import Searcher from "@/components/searcher";
import { useArticleContext } from "@/contexts/articlesContext";

export default function Home(): JSX.Element {
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const toggleShowFilterMenu = (): void => {
    setShowFilterMenu(!showFilterMenu);
  };
  const {state} = useArticleContext()
  console.log(state)
  return (
    <>
      <Head>
        <title>Chipity - Tienda de accesorios</title>
        <meta
          name="description"
          content="Tienda de accesorios femeninos en Barranquilla Colombia. Encuentra anillos, argollas, collares, joyeros y mas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searcher />
      <ItemsController articlesAmount={28} setShowFilterMenu={toggleShowFilterMenu} />
      <FilterSideBar show={showFilterMenu} setShow={toggleShowFilterMenu} />
      <button onClick={() => console.log('hola')}>Hola</button>
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 gap-x-4 justify-evenly mx-auto max-w-screen-2xl w-max mt-10">
        <Article title="Anillo de diamantes delgado" price={20000} discount={10} isInCart={false} isInFavs={true} categorie1="" categorie2="nuevo" />
        <Article title="Anillo de diamantes delgado" price={5000} discount={12} isInCart={true} isInFavs={false} categorie1="" categorie2="combo" />
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js" />
    </>
  );
}
