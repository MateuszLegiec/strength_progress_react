import React from "react";
import avatar from '../../images/my_account_retina.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAt,
    faPhone
} from "@fortawesome/free-solid-svg-icons"
import {
    faGithub,
    faGoogle,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const FindUs = () => {
        return (
            <section id="findUs" className="text-center">
                <LogoBar/>
                <MembersContainer/>
            </section>
        )
    };

const LogoBar = () => {
        return (
            <section id="logoBar" className="shadow-lg">
                <a href={"#TODO"}><FontAwesomeIcon icon={faFacebook}/></a>
                <a href={"#TODO"}><FontAwesomeIcon icon={faGoogle}/></a>
                <a href={"#TODO"}><FontAwesomeIcon icon={faInstagram}/></a>
                <a href={"#TODO"}><FontAwesomeIcon icon={faGithub}/></a>
                <a href="mailto:strength.progress@gmail.com"><FontAwesomeIcon icon={faAt}/></a>
                <a href="tel:123-456-789"><FontAwesomeIcon icon={faPhone}/></a>
            </section>
        )
    };

const MembersContainer = () => {
        return (
            <section>
                <h1>Meet our team</h1>
                <article id="team" className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <figure className="avatar columnCenter shadow-lg">
                                <img src={avatar} alt="Programmer 1"/><br/>
                                <figcaption> Mateusz Legiec</figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <figure className="avatar columnCenter shadow-lg">
                                <img src={avatar} alt="Programmer 2"/><br/>
                                <figcaption> Michal Zadrag</figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <figure className="avatar columnCenter shadow-lg">
                                <img src={avatar} alt="Programmer 3"/><br/>
                                <figcaption> Michal Pawlas</figcaption>
                            </figure>
                        </div>
                    </div>
                </article>
            </section>
        )
    };
export default FindUs;