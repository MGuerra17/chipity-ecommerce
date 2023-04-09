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
      const newCartList:cartArticle[] = [...currentState.state.cart, payload as cartArticle]
      // const articleIndex = newFavsList.findIndex(article => article.id === id)
      // articleIndex !== -1 ? newFavsList[articleIndex] = {...newFavsList[articleIndex], amount:newFavsList[articleIndex].a } : newFavsList.push(payload as article)

      return {...currentState, state: {...currentState.state, cart: newCartList}}
    }
    case ARTICLE_ACTION_TYPES.REMOVE_FROM_CART: {
      const newCartList:cartArticle[] = currentState.state.cart.filter(article => article.id !== (payload as cartArticle).id)
      return {...currentState, state: {...currentState.state, cart: newCartList}}
    }
    case ARTICLE_ACTION_TYPES.CLEAR_CART:
      return {...currentState, state: {...currentState.state, cart: []}}
    case ARTICLE_ACTION_TYPES.UPDATE_FAVS:
      return {...currentState, state: {...currentState.state, favs: (payload as article[])}}
    case ARTICLE_ACTION_TYPES.ADD_TO_FAVS: {
      const favsList:article[] = [...currentState.state.favs]
      const {id} = payload as article
      const article = favsList.find(article => article.id === id)
    return article ? currentState : {...currentState, state: {...currentState.state, favs: [...favsList, payload as article]}}
    }
    case ARTICLE_ACTION_TYPES.REMOVE_FROM_FAVS: {
      const newFavsList:article[] = currentState.state.favs.filter(article => article.id !== (payload as article).id)
    return {...currentState, state: {...currentState.state, favs: newFavsList}}
    }
    case ARTICLE_ACTION_TYPES.UPDATE_LOADING_STATE:
      return {...currentState, state: {...currentState.state, loading: (payload as boolean)}}
    default:
      return currentState;
  }
}