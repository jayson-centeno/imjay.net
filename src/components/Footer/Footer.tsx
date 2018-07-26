import * as React from "react"
import { Link } from 'react-router-dom';

export class Footer extends React.Component<any, any> {

    public getDate(): string {
        return new Date().getFullYear().toString();
    }

    public render() {
        return <div>
            <div className='footer margin-bottom-120 margin-top-50 animated fadeIn'>

                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5 margin-top-10">
                            <h3 className="logo-text">Thank you for stopping by!<span className="blinker" /></h3>

                            <div className="row margin-top-30">

                                <div className="col-sm-12">

                                    <span className="title">
                                        STAY CONNECTED
                                    </span>

                                    <ul className="margin-top-20 connected">
                                        <li>
                                            <a className="link" href="https://plus.google.com/u/0/101946906278881143505"><i className="fa fa-google-plus" /></a>
                                        </li>
                                        <li>
                                            <a className="link" href="https://github.com/jayson-centeno"><i className="fa fa-git" /></a>
                                        </li>
                                        <li>
                                            <a className="link" href="https://www.linkedin.com/in/jayson-centeno-54419717"><i className="fa fa-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a className="link" href="https://stackoverflow.com/users/1631816/jayson-centeno"><i className="fa fa-stack-overflow" /></a>
                                        </li>                                        
                                    </ul>

                                </div> 

                                <div className="col-sm-12 margin-top-30">
                                    <span className="title">
                                        <a className="link mail-to" href="mailTo:jaysword1@yahoo.com">jaysword1@yahoo.com</a> 
                                    </span>
                                </div> 

                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div className="row margin-top-30">
                                <div className="col-sm-12">
                                    <span className="title">
                                        EXPLORE
                                    </span>
                                    <ul id="explore" className="margin-top-10">
                                        <li>
                                            <Link className="link" to="/works">Works</Link>
                                        </li>
                                        <li>
                                            <a className="link">My Tools</a>
                                        </li>
                                        <li>
                                            <Link className="link" to="/">Publications</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link className="link" to="/contact">Say hello</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="row margin-top-30">
                                <div className="col-sm-12">
                                    <span className="title">
                                        LATEST BLOG POSTS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rights'>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5">
                            @{this.getDate()} <a  className="highlight" href="/">www.imjay.net</a>
                        </div>
                        <div className="col-sm-7">
                            Powered by <span className="highlight">.Net Core, API, NodeJs, Typescript, Reactjs, Sql</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}