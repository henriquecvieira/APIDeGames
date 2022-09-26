const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')


dotenv.config();

const generationToken = async (params) => {
    const token = jwt.sign(
        {
            id: params._id,
        },
        process.env.SECRET,
        { expiresIn: 86400 }
    )
    return token
}

module.exports = token;