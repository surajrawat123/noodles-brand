export const ImageBrand = (state=[],action) => {
    switch(action.type){
        case 'images':
            return action.payload;
        default:
            return state;
    }
}