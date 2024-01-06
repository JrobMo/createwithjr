import React from "react";
import NavLayout from './components/NavLayout';
import Basic from './components/Basic';

const Home = () => {
    return (
      <>
      <NavLayout
        logoText="Create With JR"
        homeLink='Home'
        aboutLink='About'
        statementLink='Contact'
      />
      <Basic>
        



      </Basic>
      </>
      );
    };

export default Home;