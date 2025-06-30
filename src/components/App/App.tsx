import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import GalleryLogo from '../LogoSection/LogoSection';
import GalleryCard from '../Card/Card';
import GalleryWork from '../WorkSection/WorkSection';

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <GalleryLogo />
      <GalleryCard />
      <GalleryWork />
    </>
  );
}
