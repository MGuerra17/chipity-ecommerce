import Head from "next/head";
import { ChangeEvent, useState } from "react";
import Article from "@/components/article";
import FilterSideBar from "@/components/filterSideBar";
import ItemsController from "@/components/itemsController";
import Searcher from "@/components/searcher";
import { useArticleContext } from "@/contexts/articlesContext";
import { article, cartArticle } from "@/types/articles";
// import { GetStaticProps, InferGetStaticPropsType } from "next";
// import { getArticles } from "@/services/articles";
import ItemModal from "@/components/itemModal";

const articlesTest:article[] = [
  {
    id: 1,
    titulo: 'Collar medalla griega',
    descripcion: 'Collar con moneda griega antigua de dos caras, y 3 bolitas abajo de la moneda. Viene con una cadena ancha de 3-4mm apróx, o cadena trenzada delgada. Greek Medallion.',
    categoria: 'Collares',
    subcategoria1: '',
    subcategoria2: '',
    precio: 30000,
    descuento: 0,
    imagen: 'https://anikjewelry.co/wp-content/uploads/2021/07/DSC_0192-1-scaled.jpeg?v=42983b05e2f2',
    recomendaciones: ''
  },
  {
    id: 2,
    titulo: 'Collar de zafiro',
    descripcion: 'Dale vida a tu ropa con este collar',
    categoria: 'Collares',
    subcategoria1: 'descuento',
    subcategoria2: '',
    precio: 63000,
    descuento: 10,
    imagen: 'https://anikjewelry.co/wp-content/uploads/2021/11/Anillo-infinity-diamantes-mini-anik_jewelry-scaled.jpeg?v=42983b05e2f2',
    recomendaciones: 'Comprar limpiador,Aplicar los mejores productos'
  },
  {
    id: 3,
    titulo: 'Anillo alma diamante',
    descripcion: 'El Anillo ALMA nació de una historia de amor. Creamos una joya que simbolizara la libertad y el amor de una pareja, donde vemos plasmado esa unión del compromiso como algo simbólico en los tres aros entrelazados. Los 3 aros entrelazados representan el amor, la esperanza y la eternidad.',
    categoria: 'Anillos',
    subcategoria1: '',
    subcategoria2: '',
    precio: 40000,
    descuento: 0,
    imagen: 'https://anikjewelry.co/wp-content/uploads/2021/06/Anillo-Alma-Diamante-Dorado_Anik-Jewelry-1-scaled.jpeg?v=42983b05e2f2',
    recomendaciones: ''
  },
  {
    id: 4,
    titulo: 'Argolla matrimonio 3mm',
    descripcion: 'Argolla de 3mm para hombre o mujer hecha en oro 18K, incluye grabado por dentro.',
    categoria: 'Argollas',
    subcategoria1: 'nuevo',
    subcategoria2: 'descuento',
    precio: 23000,
    descuento: 5,
    imagen: 'https://anikjewelry.co/wp-content/uploads/2021/10/DSC_0245-1-scaled.jpeg?v=42983b05e2f2',
    recomendaciones: 'No guardar en lugar humedo,Ideal para ocasiones especiales'
  },
  {
    id: 5,
    titulo: 'Candonga diamantes mini',
    descripcion: 'Candonga en Oro Blanco 18K con diamantes alrededor de toda la candonga. Ancho de la candonga de 1,2mm – 1,5mm.',
    categoria: 'Anillos',
    subcategoria1: 'nuevo',
    subcategoria2: 'tendencia',
    precio: 7000,
    descuento: 0,
    imagen: 'https://anikjewelry.co/wp-content/uploads/2022/07/DSC_0519-2-scaled.jpeg?v=42983b05e2f2',
    recomendaciones: ''
  }
]

export default function Home(): JSX.Element {
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')
  const [currentArticle, setCurrentArticle] = useState<article|null>(null);
  const {state} = useArticleContext()

  const handleUpdateSearch = (e:ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const toggleShowFilterMenu = (): void => {
    setShowFilterMenu(!showFilterMenu);
  };

  const newArticlesList = articlesTest.filter(article => {
    const noSearch = !search
    const noFilter = state.filters.length === 0
    const titleIncludesSearch = article.titulo.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
    const filterIncludesCategory = state.filters.includes(article.categoria)
    return ((noSearch || titleIncludesSearch) && (noFilter || filterIncludesCategory)) 
  }).sort((a,b) => {
    if(state.order === 'publicationDate') {
      return b.id - a.id
    } else {
      const aRealPrice = a.descuento ? ((100 - a.descuento) / 100) * a.precio : a.precio
      const bRealPrice = b.descuento ? ((100 - b.descuento) / 100) * b.precio : b.precio
      return state.order === 'lowPrice' ? aRealPrice - bRealPrice : bRealPrice - aRealPrice
    }
  })

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
      <Searcher search={search} updateSearch={handleUpdateSearch} />
      <ItemsController search={search} articlesAmount={newArticlesList.length} setShowFilterMenu={toggleShowFilterMenu} />
      <FilterSideBar show={showFilterMenu} setShow={toggleShowFilterMenu} />
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 gap-x-4 justify-evenly mx-auto max-w-screen-2xl w-max mt-10">
        {
          newArticlesList.map((article:article) => {
            const cartIndex = state.cart.findIndex((cartArticle:cartArticle) => cartArticle.id === article.id)
            const favsIndex = state.favs.findIndex((favArticle:article) => favArticle.id === article.id)
            return (
              <Article 
                key={article.id} 
                id={article.id}
                image={article.imagen}
                title={article.titulo} 
                price={article.precio} 
                discount={article.descuento} 
                isInCart={cartIndex !== -1} 
                isInFavs={favsIndex !== -1} 
                categorie1={article.subcategoria1} 
                categorie2={article.subcategoria2} 
                articleSetter={setCurrentArticle}
                data={article}
              />
                
            )
          })
        }
      <ItemModal article={currentArticle as article} />
      </div>

    </>
  );
}

// export const getStaticProps:GetStaticProps = async () => {
//   const articles:article[] = await getArticles()

//   return {
//     props: {
//       articles      
//     },
//   }
// }