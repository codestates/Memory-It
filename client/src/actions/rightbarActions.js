export const LOADING_INDICATOR = 'loading indicator'

export const setLoadingIndicator = () => {
  return {
    type: LOADING_INDICATOR,
    payload: {
      rightBar: LOADING_INDICATOR,
    },
  }
}
