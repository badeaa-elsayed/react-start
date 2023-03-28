import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './../Components/Navbar/Navbar';
import Footer from './../Components/Footer/Footer';

export default class Layout extends Component {
    render() {
        return <>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </>
    }
}
