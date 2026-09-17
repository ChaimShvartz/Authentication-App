import { getUserByEmail } from "../repositories/usersRepo.js";

export const getUserProfile = async (req, res) => {
    const { email } = req.user;
    const {password, ...rest} = await getUserByEmail(email);
    res.json({ success: true, data: rest });
};
