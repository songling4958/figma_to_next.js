import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainBoard from '../components/Content/MainBoard';

function Home(props) {
    return (
        <>
            <Header/>
            <MainBoard/>
            <Footer/>
        </>
    );
}

export default Home;