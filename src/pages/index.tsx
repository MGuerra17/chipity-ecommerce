import FilterSideBar from "@/components/filterSideBar";
import FilterMenuToggler from "@/components/filterSideBar/FilterMenuToggler";
import Searcher from "@/components/searcher";
import Head from "next/head";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  const toggleShow = (): void => {
    setShowFilterMenu(!showFilterMenu);
  };

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
      <FilterSideBar show={showFilterMenu} setShow={toggleShow} />
      <main className="w-full bg-white grid place-items-center px-5 md:px-10 mt-4">
        <div className="w-full flex justify-between items-center">
          <h5 className="font-semibold text-lg hidden md:inline-block">4 articulos</h5>
          <div className="flex items-center justify-between text-xs w-full md:w-fit">
            <div className="flex items-center md:w-fit">
              <label htmlFor="orderBy" className=" text-neutral-500 mr-2">
                Ordenar por:
              </label>
              <select name="orderBy" id="orderBy" className="mr-4 bg-transparent">
                <option value="publicationDate">Fecha de publicacion</option>
                <option value="lowPrice">Menor precio</option>
                <option value="hightPrice">Mayor precio</option>
              </select>
            </div>

            <FilterMenuToggler setShow={toggleShow} />
          </div>
        </div>
      </main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js" />
    </>
  );
}
