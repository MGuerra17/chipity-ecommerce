import { createContext, useContext } from "react";
import { article, cartArticle } from "@/types/articles";
import useArticleReducer, { globalArticleStateProps} from "@/hooks/useArticleReducer";

export interface articlesInfo {
  articles: article[];
  order: string;
  filters: string[];
  cart: cartArticle[];
  favs: article[];
  loading: boolean;
} 

interface articleProviderProps {
  children: JSX.Element
}

const initialArticleState:articlesInfo = {
  articles: [],
  order: 'publicationDate',
  filters: [],
  cart: [],
  favs: [],
  loading: false
}

export const initialGlobalArticleState:globalArticleStateProps = {
  state: initialArticleState,
  updateState: () => {return undefined},
  updateArticles: () => {return undefined},
  setOrder: () => {return undefined},
  setFilters: () => {return undefined},
  updateCart: () => {return undefined},
  addToCart: () => {return undefined},
  removeFromCart: () => {return undefined},
  clearCart: () => {return undefined},
  updateFavs: () => {return undefined},
  addToFavs: () => {return undefined},
  removeFromFavs: () => {return undefined},
  updateLoadingState: () => {return undefined}
}

export const articlesContext = createContext<globalArticleStateProps>(initialGlobalArticleState)

export const useArticleContext = ():globalArticleStateProps => useContext(articlesContext)

export function ArticlesContextProvider ({children}:articleProviderProps):JSX.Element {
  const state = useArticleReducer()
  return (
    <articlesContext.Provider 
      value={state}>
        {children}
    </articlesContext.Provider>
  )
}