import Footer from "../../components/Footer/Footer";
import Form from "../../components/CreateAccountForm/Form";
import Header from "../../components/Header/Header";
import "./createAccount.css";

export default function CreateAccount() {
    return (
        <div className="page-container-create-account">
            <Header 
                headerText="Create Account"
                text="Enter your information below or continue" 
                subtext="with social media account"
            />

            <Form />

            <Footer 
                accountsSignText="Or Register with Social Accounts"
                linkTo='/'
                noAccountText="Already have an account?"
                createOrLoginNowText="Login Now"
            />
        </div>
    )
}