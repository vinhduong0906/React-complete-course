import MainNavigation from "../components/Layout/MainNavigation";
import { Fragment } from "react";
const ErrorPage = () => {
    return (
        <Fragment>
            <MainNavigation />
            <div style={{ textAlign: "center", fontSize: "2rem" }}>Page not found !</div>
        </Fragment>
    )
}
export default ErrorPage;