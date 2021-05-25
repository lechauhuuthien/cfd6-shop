import React from 'react';
import AboutDemoracy from './components/AboutDemoracy';
import AboutFeatures from './components/AboutFeatures';
import AboutImages from './components/AboutImages';
import AboutReview from './components/AboutReview';
import AboutSlogan from './components/AboutSlogan';
import AboutSocial from './components/AboutSocial';
import AboutStory from './components/AboutStory';
import AboutWelcome from './components/AboutWelcome';

function AboutPage() {
    return (
        <>
            <AboutWelcome />
            <AboutStory />
            <AboutDemoracy />
            <AboutStory isReverse/>
            <AboutSlogan />
            <AboutImages />
            <AboutReview />
            <AboutSocial />
            <AboutFeatures />
        </>
    );
}

export default AboutPage;