import { globalArticleStateProps } from "@/hooks/useArticleReducer";
import { article, cartArticle } from "@/types/articles";

interface articleAction {
  type: string;
  payload: globalArticleStateProps | string | string[] | article | article[] | boolean | void;
}

export const ARTICLE_ACTION_TYPES = {
  UPDATE_STATE: 'UPDATE_STATE',
  UPDATE_ARTICLES: 'UPDATE_ARTICLES', 
  SET_ORDER: 'SET_ORDER',
  SET_FILTERS: 'SET_FILTERS',
  UPDATE_CART: 'UPDATE_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  UPDATE_FAVS: 'UPDATE_FAVS',
  ADD_TO_FAVS: 'ADD_TO_FAVS',
  REMOVE_FROM_FAVS: 'REMOVE_FROM_FAVS',
  UPDATE_LOADING_STATE: 'UPDATE_LOADING_STATE'
}

export const articlesReducer = (currentState:globalArticleStateProps,action:articleAction):globalArticleStateProps => {
  const { type, payload } = action;
  switch (type) {
    case ARTICLE_ACTION_TYPES.UPDATE_STATE:
      return (payload as globalArticleStateProps)
    case ARTICLE_ACTION_TYPES.UPDATE_ARTICLES:
      return {...currentState, state: {...currentState.state, articles: (payload as article[])}}
    case ARTICLE_ACTION_TYPES.SET_ORDER:
      return {...currentState, state: {...currentState.state, order: (payload as string)}}
    case ARTICLE_ACTION_TYPES.SET_FILTERS:
      return {...currentState, state: {...currentState.state, filters: (payload as string[])}}
    case ARTICLE_ACTION_TYPES.UPDATE_CART:
      return {...currentState, state: {...currentState.state, cart: (payload as cartArticle[])}}
    case ARTICLE_ACTION_TYPES.ADD_TO_CART: {
      const newCartList:cartArticle[] = [...currentState.state.cart]
      const {id} = payload as article
      const articleIndex = newCartList.findIndex(article => article.id === id)
      if(articleIndex === -1) { 
        newCartList.push({...payload as article,amount:1} as cartArticle)
      } else {
        newCartList[articleIndex] = {...newCartList[articleIndex], amount:newCartList[articleIndex].amount + 1 }
      }
      window.localStorage.setItem('cart',JSON.stringify(newCartList))
      return {...currentState, state: {...currentState.state, cart: newCartList}}
    }
    case ARTICLE_ACTION_TYPES.REMOVE_FROM_CART: {
      const newCartList:cartArticle[] = currentState.state.cart.filter(article => article.id !== (payload as cartArticle).id)
      window.localStorage.setItem('cart',JSON.stringify(newCartList))
      return {...currentState, state: {...currentState.state, cart: newCartList}}
    }
    case ARTICLE_ACTION_TYPES.CLEAR_CART:
      return {...currentState, state: {...currentState.state, cart: []}}
    case ARTICLE_ACTION_TYPES.UPDATE_FAVS:
      return {...currentState, state: {...currentState.state, favs: (payload as article[])}}
    case ARTICLE_ACTION_TYPES.ADD_TO_FAVS: {
      const newFavsList:article[] = [...currentState.state.favs]
      const {id} = payload as article
      const isInFavs = newFavsList.find(article => article.id === id)
      if(!isInFavs) newFavsList.push(payload as article)
      window.localStorage.setItem('favs',JSON.stringify(newFavsList))
      return isInFavs ? currentState : {...currentState, state: {...currentState.state, favs: newFavsList}}
    }
    case ARTICLE_ACTION_TYPES.REMOVE_FROM_FAVS: {
      const newFavsList:article[] = currentState.state.favs.filter(article => article.id !== (payload as article).id)
      window.localStorage.setItem('favs',JSON.stringify(newFavsList))
    return {...currentState, state: {...currentState.state, favs: newFavsList}}
    }
    case ARTICLE_ACTION_TYPES.UPDATE_LOADING_STATE:
      return {...currentState, state: {...currentState.state, loading: (payload as boolean)}}
    default:
      return currentState;
  }
}