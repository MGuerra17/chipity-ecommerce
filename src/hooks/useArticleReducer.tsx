import { articlesInfo, initialGlobalArticleState } from "@/contexts/articlesContext";
import { ARTICLE_ACTION_TYPES, articlesReducer } from "@/reducers/articlesReducer";
import { article } from "@/types/articles";
import { useEffect, useReducer } from "react";

export interface globalArticleStateProps {
  state: articlesInfo;
  updateState(newState:globalArticleStateProps):void;
  updateArticles(newArticlesList:article[]):void;
  setOrder(newOrder:string):void;
  setFilters(newFilters:string[]):void;
  updateCart(newCartList:article[]):void;
  addToCart(cartItem:article):void;
  removeFromCart(cartItem:article):void;
  clearCart():void;
  updateFavs(newFavsList:article[]):void;
  addToFavs(favItem:article):void;
  removeFromFavs(favItem:article):void;
  updateLoadingState(newLoadingState:boolean):void;
} 

export default function useArticleReducer ():globalArticleStateProps {
  const [state,dispatch] = useReducer(articlesReducer, initialGlobalArticleState)

  useEffect(() => {
    const newCartList = JSON.parse(window?.localStorage?.getItem('cart') as string || '[]')
    const newFavsList = JSON.parse(window?.localStorage?.getItem('favs') as string || '[]')
    updateState({ ...state, state: {...state.state, cart: newCartList, favs: newFavsList }})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const updateState = (newState:globalArticleStateProps):void => dispatch({
    type: ARTICLE_ACTION_TYPES.UPDATE_STATE,
    payload: newState
  })

  const updateArticles = (newArticlesList:article[]):void => dispatch({
    type: ARTICLE_ACTION_TYPES.UPDATE_ARTICLES,
    payload: newArticlesList
  })

  const setOrder = (newOrder:string):void => dispatch({
    type: ARTICLE_ACTION_TYPES.SET_ORDER,
    payload: newOrder
  })

  const setFilters = (newfilters:string[]):void => dispatch({
    type: ARTICLE_ACTION_TYPES.SET_FILTERS,
    payload: newfilters
  })

  const updateCart = (newCartList:article[]):void => dispatch({
    type: ARTICLE_ACTION_TYPES.UPDATE_CART,
    payload: newCartList
  })

  const addToCart = (cartItem:article):void => dispatch({
    type: ARTICLE_ACTION_TYPES.ADD_TO_CART,
    payload: cartItem
  })

  const removeFromCart = (cartItem:article):void => dispatch({
    type: ARTICLE_ACTION_TYPES.REMOVE_FROM_CART,
    payload: cartItem
  })

  const clearCart = ():void => dispatch({
    type: ARTICLE_ACTION_TYPES.CLEAR_CART,
    payload: undefined
  })

  const updateFavs = (newFavsList:article[]):void => dispatch({
    type: ARTICLE_ACTION_TYPES.UPDATE_FAVS,
    payload: newFavsList
  })

  const addToFavs = (favsItem:article):void => {
    dispatch({
    type: ARTICLE_ACTION_TYPES.ADD_TO_FAVS,
    payload: favsItem
  })}

  const removeFromFavs = (favsItem:article):void => dispatch({
    type: ARTICLE_ACTION_TYPES.REMOVE_FROM_FAVS,
    payload: favsItem
  })

  const updateLoadingState = (newLoadingState:boolean):void => dispatch({
    type: ARTICLE_ACTION_TYPES.UPDATE_LOADING_STATE,
    payload: newLoadingState
  })

  return {
    state: state.state,
    updateState,
    updateArticles,
    setOrder,
    setFilters,
    updateCart,
    addToCart,
    removeFromCart,
    clearCart,
    updateFavs,
    addToFavs,
    removeFromFavs,
    updateLoadingState
  }
}