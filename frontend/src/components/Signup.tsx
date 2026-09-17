import React, { useState, type PropsWithChildren } from "react";
import Form from "./Form";
import { getToken } from "../services/apiCalls";
import { UseLoginStore } from "../store/UseLoginStore";

interface SignUpProps {
    onChangeTab: () => void;
    children: PropsWithChildren;
}
const Signup = ({ children, onChangeTab }: SignUpProps) => {
    const [form, setForm] = useState({});
    const { toggleLogin } = UseLoginStore();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const onSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        const success = await getToken("http://localhost:3000/auth/register", form);
        if(success) toggleLogin(true);
    };

    const token = localStorage.getItem("token");
    if (token) return children.children;

    return (
        <>
            <Form onChange={onChange} onSubmit={onSubmit} />
            <p>
                Do you have an account?{" "}
                <span>
                    <a onClick={onChangeTab}>Log in</a>
                </span>
            </p>
        </>
    );
};

export default Signup;
