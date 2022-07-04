import registerUserSchema from "../zodSchema/registerUserSchema.js"

function registerValidate (req, res, next) {
    const {first_name, email, password} = req.body;

    const registerUser = registerUserSchema.parse({
        first_name,
        email,
        password,
    })

    next();
}

export default registerValidate;