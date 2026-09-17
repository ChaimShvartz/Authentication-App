import { useCallback, useState, type PropsWithChildren } from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import { UseLoginStore } from "../store/UseLoginStore";

type MethodType = "signup" | "signin";
const OpeningPage = (children: PropsWithChildren) => {
    const [tab, setTab] = useState<MethodType>("signup");
    const { login } = UseLoginStore();

    const toggleTab = useCallback(
        () => setTab((prev) => (prev === "signin" ? "signup" : "signin")),
        [],
    );
    if (login) return children.children;

    return (
        <>
            {tab === "signup" ? (
                <Signup onChangeTab={toggleTab}/>
            ) : (
                <Signin onChangeTab={toggleTab}/>
            )}
        </>
    );
};

export default OpeningPage;
