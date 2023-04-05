import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getArticles } from '@/services/articles'
import { article } from '@/types/articles'

export default function Home():JSX.Element {
  const [articles,setArticles] = useState<article[]>([])

  useEffect(() => {
    getArticles().then(result => setArticles(result))
  },[])

  return (
    <>
      <main className='text-white font-bold grid place-items-center h-screen'>
        <ul>
          {
            articles.map(({titulo, imagen}:article,index:number) => {
              return ( <div key={index} className=' bg-neutral-700 p-3 flex flex-col'>
                <li>{titulo}</li>
                <Image src={imagen} alt={titulo} width={100} height={100}></Image>
              </div> )
            })
          }
        </ul>
      </main>
    </>
  )
}
