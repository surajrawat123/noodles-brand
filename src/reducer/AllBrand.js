export const AllBrand = (state=[],action) =>{
    switch(action.type){
        case 'all-brand':
            return action.payload;
        default:
            return state;
    }
}