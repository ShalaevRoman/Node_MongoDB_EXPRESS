import loginUserSchema from "../zodSchema/loginUserSchema.js"

function loginValidate (req, res, next) {
    const {email, password} = req.body;

    const loginValidate = loginUserSchema.parse({
        email,
        password,
    })

    next();
}

export default loginValidate;