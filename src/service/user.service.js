import User from '../entity/user.entity.js';
import bcrypt from 'bcrypt';

class UserService {

    async register(first_name, email, password) {
        const candidate = await User.findOne({email});
        if (candidate) {
            throw new Error("The user is already registered")
        }

        const hashPassword = await bcrypt.hash(password, 4)

        return await User.create({first_name, email, password: hashPassword})
    }
}

export default new UserService;