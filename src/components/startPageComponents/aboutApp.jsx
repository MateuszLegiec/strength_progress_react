import React from "react";
import graph from '../../images/arrowGraph.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDumbbell,
    faTv,
    faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons"

const About = () => {
        return (
            <div id="about">
                <Visualisation/>
                <Description/>
            </div>
        )
    };

const Visualisation = () => {
    return (
        <article className="container">
            <div className="row">
                <div className="col-sm-6 text-left">
                    <h1>Welcome to Strength Progress</h1>
                </div>
                <div className="col-sm-6 text-center">
                    <img src={graph} alt="graph"/>
                </div>
            </div>
        </article>
    )
};

const Description = () => {
    return (
        <article className="container">
            <div className="row row-eq-height text-center">
                <div className="col-md-4 col-sm-12">
                    <div className="columnCenter infoCol shadow-lg">
                        <FontAwesomeIcon icon={faTv} className="text-success"/>
                        <p>Provides clear, eye-catching and easy-to-use graphical interface also
                            available in mobile browsers that you can try out today</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="columnCenter infoCol shadow-lg">
                        <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="text-success"/>
                        <p>Enables transparent tracking of your training results, using charts of
                            theoretical one maximum repetition and training volume</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="columnCenter infoCol shadow-lg">
                        <FontAwesomeIcon icon={faDumbbell} className="text-success"/>
                        <p>Built to give you awareness of the importance of choosing the right training
                            load, number of repetitions, and series</p>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default About;