export const COLOR_FILTERING = 'color filtering'

export const colorFiltering = arr => {
  return {
    type: COLOR_FILTERING,
    payload: {
      colorFilter: arr,
    },
  }
}
