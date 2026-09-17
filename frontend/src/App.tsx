import { BrowserRouter, Route, Routes } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import UserProfilePage from "./pages/UserProfilePage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<OpeningPage>{<UserProfilePage />}</OpeningPage>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
