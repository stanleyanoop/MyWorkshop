export const loginAction = (userName: string, isLoggedIn: boolean) => {
    return {
        type: LOGIN_ACTION,
        loginData: {
            login: userName,
            isLoggedIn: isLoggedIn
        }
    }
} 

export const LOGIN_ACTION: string = 'LOGIN';