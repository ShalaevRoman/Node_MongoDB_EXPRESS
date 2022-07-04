import jwt from 'jsonwebtoken';
import TokenEntity from '../entity/token.entity.js'

class TokenService {

    async generateToken(payload) {
        const accessToken = jwt.sign({payload}, 'someKey', {expiresIn: '10m'});
        const refreshToken = jwt.sign({payload}, 'someKey', {expiresIn: '15d'});

        return {
            accessToken,
            refreshToken
        };
    };

    async saveRefreshToken(refreshToken, id) {
        const token = await TokenEntity.findOne({userId: id});

        if(!token){
            await TokenEntity.create({userId: id, refreshToken});
        };

        token.refreshToken = refreshToken;
        await token.save();
    };
};

export default new TokenService;