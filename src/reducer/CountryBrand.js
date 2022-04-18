export const CountryBrand = (state = [], action) => {
    switch (action.type) {
        case 'Myanmar':
            return action.payload;
        case 'Singapore':
            return action.payload;
        case 'SG':
            return action.payload;
        case 'Taiwan':
            return action.payload;
        case 'China':
            return action.payload;
        case 'Malaysia':
            return action.payload;
        case 'JPN':
            return action.payload;
        case 'Thailand':
            return action.payload;
        case 'Japan':
            return action.payload;
        case 'South korea':
            return action.payload;
        case 'USA':
            return action.payload;
        case 'Indonesia':
            return action.payload;
        case 'Hong kong':
            return action.payload;
        default:
            return state;
    }
}