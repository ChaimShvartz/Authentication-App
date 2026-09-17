
export interface UserProfileType {
    username: string;
    email: string;
}

export const getUserProfile = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
    });
    const { data, message } = await res.json();
    if (!res.ok) alert(message);
    return data as UserProfileType;
};

export const getToken = async (url: string, form: {}) => {
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
    });
    const { token, message } = await res.json();
    if (!res.ok) return alert(message);
    localStorage.setItem("token", token);
    return true
};
