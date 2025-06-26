import React from 'react';
import '../App/App.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import GalleryLogo from '../LogoSection/LogoSection';
import GalleryCard from '../Card/Card';
import GalleryWork from '../WorkSection/WorkSection';
import GalleryClient from '../ClientSection/ClientSection';
import Footer from '../Footer/Footer';

export default function App() {
    return (
        <>
            <Navigation />
            <Header />
            <GalleryLogo />
            <GalleryCard />
            <GalleryWork />
            <GalleryClient />
            <Footer />
        </>
    );
}
