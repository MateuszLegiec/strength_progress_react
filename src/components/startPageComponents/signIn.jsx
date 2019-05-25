import React, {Component} from "react";
import Modal from 'react-modal'
import ModalContent from "./modalContent";
import LoginForm from "./loginForm";

Modal.setAppElement('#root');

const customStyles = {
    content : {
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        marginTop             : '260px',
        transform             : 'translate(-50%, -50%)'
    }
};

class SignIn extends Component {

    constructor(){
        super();

        this.state = {
            isModalActive:false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return <section id="login">
            <h1>STRENGTH PROGRESS</h1>
            <h4 className="text-white">Everything you should know about progress in your main lifts</h4>
            <LoginForm onSignIn={this.props.onSignIn}/>
            <button id="forgotPasswordButton" className="text-dark btn btn-link text-left" onClick={this.openModal}>Forgot password?</button><br/><br/>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
            >
               <ModalContent/>
            </Modal>
        </section>;
    }

}
export default SignIn;