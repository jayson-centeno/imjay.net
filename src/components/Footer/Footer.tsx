﻿import * as React from "react"
import { Link } from 'react-router-dom';

export class Footer extends React.Component<any, any> {

    public render() {
        return <div>
            <div className='footer margin-bottom-120 margin-top-50'>

                <div className='container'>
                    <div className="row">
                        <div className="col-sm-5 margin-top-10">
                            <h3 className="logo-text">Thank you for stopping by!<span className="blinker" /></h3>

                            <div className="row margin-top-30">

                                <div className="col-sm-12">

                                    <span className="title">
                                        STAY CONNECTED
                                    </span>

                                    <ul id="connected" className="margin-top-20">
                                        <li>
                                            <a className="link" ><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                            <a className="link"><i className="fa fa-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a className="link"><i className="fa fa-google-plus" /></a>
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
                                            <a className="link">Tools</a>
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
                            @2018-2019 <span className="highlight">www.imjay.net</span>. All Rights Reserved
                        </div>
                        <div className="col-sm-7">
                            Powered by <span className="highlight">.Net Core, API, NodeJs, Typescript, Reactjs, Sql Server</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}