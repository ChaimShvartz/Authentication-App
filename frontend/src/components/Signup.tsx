import React, { useState, type PropsWithChildren } from "react";

interface SignUpProps {
    onChangeTab: () => void;
    children: PropsWithChildren;
}
const Signup = ({ children, onChangeTab }: SignUpProps) => {
    const [form, setForm] = useState({});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const onSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Name <input type="text" onChange={onChange} required />
                </label>
                <label>
                    Email <input type="email" onChange={onChange}required/>
                </label>
                <label>
                    Password <input type="password" onChange={onChange} required/>
                </label>
                <button type="submit">Submit</button>
            </form>
            {children.children}
        </>
    );
};

export default Signup;
