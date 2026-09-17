import bcrypt from "bcrypt";
import { getUserByEmail } from "../repositories/usersRepo.js";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

export const verifyPassword = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user)
        throw Object.assign(new Error(), {
            status: 401,
            message: "Email or password are incorrect",
        });
        
    const { username, password: hashedPassword } = user;
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch)
        throw Object.assign(new Error(), {
            status: 401,
            message: "Email or password are incorrect",
        });
    return generateToken({ username, email });
};

export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET);
};

export const verifyToken = (token) => {
    const { username, email } = jwt.verify(token, JWT_SECRET);
    return { username, email };
};
