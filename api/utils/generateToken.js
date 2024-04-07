import jwt from 'jsonwebtoken'

export const genTokenAndSetCookie = (id, res) => {
    // To convert Mongo Object ID to string
    if (id.toString() === "" || id.toString() === null)
        return "Error in token generation"
    try {
        const token = jwt.sign(id.toString(), process.env.JWT_KEY)
        res
            .cookie("jwt", token, {
                httpOnly: true, maxAge: 1 * 60 * 60 * 1000,//ms
                httpOnly: true,
                sameSite: 'None',
            })
        return
    } catch (error) {
        return "Error"
    }
}