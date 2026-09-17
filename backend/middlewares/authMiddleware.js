import { verifyToken } from "../services/authServices.js";

export const auth = async (req, _res, next) => {

    const { authorization } = req.headers;
    const parts = authorization.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer")
        throw Object.assign(new Error(), {
            status: 401,
            message: "Token format must be: 'Bearer <token>'",
        });
    const token = parts[1];
    try {
        req.user = verifyToken(token);
        next();
    } catch (error) {
        throw { ...error, status: 401 };
    }
};
