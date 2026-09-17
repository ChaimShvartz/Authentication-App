import UseFetch from "../hooks/UseFetch";
import { getUserProfile, type UserProfileType } from "../services/apiCalls";
import { UseLoginStore } from "../store/UseLoginStore";

const UserProfilePage = () => {
    const { data, error, loading } = UseFetch<UserProfileType>({
        func: getUserProfile,
    });
    const { toggleLogin } = UseLoginStore();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Network error</p>;

    return (
        <>
            <h3>{data?.username}</h3>
            <h4>{data?.email}</h4>
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    toggleLogin(false);
                }}
            >
                Log out
            </button>
        </>
    );
};

export default UserProfilePage;
