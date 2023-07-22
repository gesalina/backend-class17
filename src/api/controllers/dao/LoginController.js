import {loginModel} from '../../models/login.model.js';

class LoginController {
    constructor(){
        this.error = "";
    }
    getUsers = async() => {
        const user = await loginModel.find().lean();
        return user;
    }
    registerUser = async(email, password) => {
        const register = await loginModel.create({
            user: email,
            password: password
        })
        return register
    }
    loginUser = async(email,password) => {
        const auth = await loginModel.find({username: email});
        if(auth.password === password){
            return auth;
        }
        return this.error = {error: 'User not validate'};
    }
}

export default LoginController