import type { PropsWithChildren } from "react";

interface SigninProps {
    onChangeTab: () => void;
    children: PropsWithChildren;
}
const Signin = ({ children, onChangeTab }: SigninProps) => {
    return <>{children.children}</>;
};

export default Signin;
