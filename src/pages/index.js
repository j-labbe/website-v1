import React from 'react';
import '../assets/styles/css/style.css';
import Layout from '../components/layout';
import About from '../components/sections/about';
import Hero from '../components/sections/hero';
import AlertBar from '../components/alertbar';
import Contact from '../components/sections/contact';

const IndexPage = ({ location }) => {
    return (
        <div className="fillHeight">
            <AlertBar />
            <Layout location={location}>
                <Hero />
                <About />
                <Contact />
            </Layout>
        </div>
    );
};

export default IndexPage;