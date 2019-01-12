export default function (state = null, action) {
    switch (action.type) {
        case "INPUT_SEARCH":
            return action.payload;
            break;
    }
    return state;
}