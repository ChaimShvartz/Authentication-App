import { useCallback, useState, type PropsWithChildren } from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

type MethodType = "signup" | "signin";
const OpeningPage = (children: PropsWithChildren) => {
    const [tab, setTab] = useState<MethodType>("signup");
    const toggleTab = useCallback(
        () => () => setTab((prev) => (prev === "signin" ? "signup" : "signin")),
        [],
    );

    return (
        <>
            {tab === "signup" ? (
                <Signup onChangeTab={toggleTab}>{children}</Signup>
            ) : (
                <Signin onChangeTab={toggleTab}>{children}</Signin>
            )}
        </>
    );
};

export default OpeningPage;
