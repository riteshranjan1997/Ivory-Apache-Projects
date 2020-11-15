
export const FILTER_STAR_RATINGS=" FILTER_STAR_RATINGS"
export const SORT_DATA_BY ="SORT_DATA_BY"


export const filterStarRatings=(payload)=>({  
    type:FILTER_STAR_RATINGS,
    payload
})

export const sortDataBy=(payload)=>({
   type:SORT_DATA_BY,
    payload
})

