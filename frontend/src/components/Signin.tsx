import { useState } from "react";
import Form from "./Form";
import { getToken } from "../services/apiCalls";
import { UseLoginStore } from "../store/UseLoginStore";

interface SigninProps {
    onChangeTab: () => void;
}
const Signin = ({ onChangeTab }: SigninProps) => {
    const [form, setForm] = useState({});
    const { toggleLogin } = UseLoginStore();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const onSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        const success = await getToken(
            "http://localhost:3000/auth/login",
            form,
        );
        if (success) toggleLogin(true);
    };

    return (
        <>
            <Form onChange={onChange} onSubmit={onSubmit} recieveName={false} />
            <p>
                Don't have an account{" "}
                <span>
                    <a onClick={onChangeTab}>Sign up</a>
                </span>
            </p>
        </>
    );
};

export default Signin;
