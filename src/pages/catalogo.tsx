import Head from "next/head";
import { ChangeEvent, useState } from "react";
import Article from "@/components/article";
import FilterSideBar from "@/components/filterSideBar";
import ItemsController from "@/components/itemsController";
import Searcher from "@/components/searcher";
import { useArticleContext } from "@/contexts/articlesContext";
import { article, cartArticle } from "@/types/articles";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getArticles } from "@/services/articles";

const articlesTest:article[] = [
  {
    id: 1,
    titulo: 'Anillo diamante',
    descripcion: 'Hermoso anillo con forma de alma, decorado con diamante',
    categoria: 'Anillos',
    subcategoria1: 'combo',
    subcategoria2: '',
    precio: 30000,
    descuento: 0,
    imagen: 'https://res.cloudinary.com/dtp9alejv/image/upload/v1680066797/zcquqlmwycwxddaabd2o.png'
  },
  {
    id: 2,
    titulo: 'Collar de zafiro',
    descripcion: 'Dale vida a tu ropa con este collar',
    categoria: 'Collares',
    subcategoria1: 'descuento',
    subcategoria2: 'combo',
    precio: 63000,
    descuento: 10,
    imagen: 'https://res.cloudinary.com/dtp9alejv/image/upload/v1679120254/rqtncdgjdstpdrd0nzm1.png'
  },
  {
    id: 3,
    titulo: 'Anillo diamante 2',
    descripcion: 'Hermoso anillo con forma de alma, decorado con diamante',
    categoria: 'Anillos',
    subcategoria1: '',
    subcategoria2: 'nuevo',
    precio: 40000,
    descuento: 0,
    imagen: 'https://res.cloudinary.com/dtp9alejv/image/upload/v1680066797/zcquqlmwycwxddaabd2o.png'
  },
  {
    id: 4,
    titulo: 'Collar de zafiro2',
    descripcion: 'Dale vida a tu ropa con este collar',
    categoria: 'Collares',
    subcategoria1: 'descuento',
    subcategoria2: 'combo',
    precio: 23000,
    descuento: 5,
    imagen: 'https://res.cloudinary.com/dtp9alejv/image/upload/v1679120254/rqtncdgjdstpdrd0nzm1.png'
  },
  {
    id: 5,
    titulo: 'Anillo diamante 23',
    descripcion: 'Hermoso anillo con forma de alma, decorado con diamante',
    categoria: 'Anillos',
    subcategoria1: '',
    subcategoria2: 'nuevo',
    precio: 7000,
    descuento: 0,
    imagen: 'https://res.cloudinary.com/dtp9alejv/image/upload/v1680066797/zcquqlmwycwxddaabd2o.png'
  }
]

export default function Home({articles}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')
  const {state} = useArticleContext()
  console.log(state.cart)
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
                data={article}
                />
                
            )
          })
        }
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