import User from '../entity/user.entity.js';
import bcrypt from 'bcrypt';

import TokenService from './token.service.js';

class AuthService {

    async login(email, password) {
        const candidate = await User.findOne({email});

        if (!candidate) {
            return new Error('The user is not found')
        }

        const comparePassword = await bcrypt.compare(password, candidate.password);

        if(!comparePassword) {
            throw new Error('The password is incorrect');
        }

        const tokens = await TokenService.generateToken(candidate._id);
        await TokenService.saveRefreshToken(tokens.refreshToken, candidate._id);

        return {
            tokens
        }
    }
}

export default new AuthService;