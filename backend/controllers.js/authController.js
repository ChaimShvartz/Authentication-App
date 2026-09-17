import { addUser, getUserByEmail } from "../repositories/usersRepo.js";
import { hashPassword } from "../services/authServices.js";

export const register = async (req, res) => {
    let { username, email, password } = req.body;
    username = username.trim();
    email = email.trim();
    password = password.trim();

    if (!(username && email && password))
        throw Object.assign(new Error(), {
            status: 400,
            message: "Name & enail & password are required",
        });
    if (await getUserByEmail(email))
        throw Object.assign(new Error(), {
            status: 409,
            message: "Enail already exists",
        });

    const hashedPassword =await hashPassword(password);
    await addUser({ username, email, password: hashedPassword });
    res.status(201).json({
        success: true,
        message: "User registed successfully",
    });
};
export const login = () => {};
