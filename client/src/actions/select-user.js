export const selectUser = user => {
    console.log('User Clicked', user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}