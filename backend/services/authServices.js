import bcrypt from "bcrypt";
import { getUserByEmail } from "../repositories/usersRepo.js";
import jwt from 'jsonwebtoken'

const {JWT_SECRET} = process.env

export const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

export const verifyPassword = async (email, password) => {
    const { id, password: hashedPassword } = await getUserByEmail(email);
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch)
        throw Object.assign(new Error(), {
            status: 401,
            message: "Email or password are incorrect",
        });
    return jwt.sign({id, email}, JWT_SECRET)
};
