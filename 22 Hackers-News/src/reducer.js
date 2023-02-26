import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      }
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      }
    case HANDLE_PAGE:
      let newPage
      if (action.payload == 'inc') {
        newPage = (1 + state.page) % state.nbPages
      } else if (action.payload == 'dec') {
        newPage = (state.page + state.nbPages - 1) % state.nbPages
      }
      return {
        ...state,
        page: newPage,
      }

    default:
      throw new Error(`no mathcing " ${action.type} " action type`)
  }
}
export default reducer
