import Footer from "../../components/Footer/Footer";
import Form from "../../components/LoginForm/Form";
import Header from "../../components/Header/Header";
import "./login.css";

export default function Login () {
    return (

    <div className="page-container">
        
        <Header 
            headerText="Login"
            text="Welcome back!" 
            subtext="Please login to continue"
        />

        <Form />

        <Footer 
            accountsSignText="Or continue with Social Accounts"
            linkTo='/CreateAccount'
            noAccountText="Don't have an account?"
            createOrLoginNowText="Create Now"
        />

    </div>
    )
}