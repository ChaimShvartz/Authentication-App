import { addUser, getUserByEmail } from "../repositories/usersRepo.js";
import { hashPassword, verifyPassword } from "../services/authServices.js";

export const register = async (req, res) => {
    let { username, email, password } = req.body;
    username = username.trim();
    email = email.trim();
    password = password.trim();

    if (!(username && email && password))
        throw Object.assign(new Error(), {
            status: 400,
            message: "Name & email & password are required",
        });
    if (await getUserByEmail(email))
        throw Object.assign(new Error(), {
            status: 409,
            message: "Enail already exists",
        });

    const hashedPassword = await hashPassword(password);
    await addUser({ username, email, password: hashedPassword });
    res.status(201).json({
        success: true,
        message: "User registed successfully",
    });
};
export const login = async (req, res) => {
    let { password, email } = req.body;
    if (!(email && password))
        throw Object.assign(new Error(), {
            status: 400,
            message: "Email & password are required",
        });
    email = email.trim();
    password = password.trim();
    const token = await verifyPassword(email, password);
    res.status(201).json({ success: true, token });
};
