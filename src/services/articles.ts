import { article } from '@/types/articles'
import Papa from 'papaparse'

export const getArticles = async ():Promise<article[]> => {
  const response = await fetch(<string>process.env.NEXT_PUBLIC_ARTICLES_ENDPOINT)
  const data = await response.text()
  const parsed = await new Promise<article[]>((resolve, reject) => {
    Papa.parse<article>(data,{
      header:true,
      complete: (result) => resolve(result.data),
      error:reject})
  })
  console.log(parsed)
  return parsed
}
