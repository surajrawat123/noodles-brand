export const CountryItem = (state=[],action) => {
    switch(action.type){
        case 'unique':
            return action.payload;
        default:
            return state;
    }
}