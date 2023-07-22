import { Router} from "express";
import LoginController from '../../controllers/dao/LoginController.js';

const router = Router();
const userController = new LoginController();

router.post('/login', async (request, response) => {
    let {user, password} = request.body;
    try {
        const authUser = await userController.loginUser(user,password);
        // VALIDAR USUARIO E REDIRIGIR
        if(authUser.error){
            return response.status(404).json({status:'error', error: 'No existe usuario'});
        }
        return response.redirect('/', authUser);
    } catch (error) {
        return response.status(404).json({status:'error', error: error});
    }
})
router.post('/register', async (request, response) => {
    let {user, password} = request.body;
    try {
        const authUser = await userController.loginUser(user,password);
        // VALIDAR USUARIO E REDIRIGIR
        if(authUser.error){
            return response.status(404).json({status:'error', error: 'No existe usuario'});
        }
        return response.redirect('/', authUser);
    } catch (error) {
        return response.status(404).json({status:'error', error: error});
    }
})
export default router;