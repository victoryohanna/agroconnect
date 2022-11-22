const AuthReducer = (state, action)=>{

    switch(action.type){
        case "LOGIN": {
            return {
                isLoggin : action.payload
            }
        }
        case 'LOGOUT':{
            return{
                isLogout: action.payload
            }
        }
        default:
            return state
    }
}

export default AuthReducer;