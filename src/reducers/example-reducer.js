let initialState = {
    count: 0
};

export default function ExampleReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return { count: state.count + 1 };
    
        default:
            return state;
    }
}