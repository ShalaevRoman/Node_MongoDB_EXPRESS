import {Router} from 'express';

import UserService from '../service/user.service.js'
import AuthService from '../service/auth.service.js'

import registerValidate from '../common/middleweares/registerValidate.js'
import loginValidate from '../common/middleweares/loginValidate.js'

const router = Router();

router.get('/auth/login', async (req, res) => {
    res.render('loginPage', {
        title: 'Login',
    })
});

router.post('/auth/login', loginValidate, async (req, res) => {
    const {email, password} = req.body;

    const user = await AuthService.login(email, password);
    res.cookie("RefreshToken", user.tokens.refreshToken, {httpOnly: true, maxAge:15*24*60*60});
    res.setHeader('AccessToken', user.tokens.accessToken)

    res.send(user.tokens.accessToken)
});

//=====================================================================

router.post('/auth/register', registerValidate, async (req, res) => {
    const {first_name, email, password} = req.body;

    await UserService.register(first_name, email, password);

    res.redirect('/auth/login');
});

router.get('/auth/register', async (req, res) => {
    res.render('registerPage', {
        title: 'Register'
    })

});


export default router;