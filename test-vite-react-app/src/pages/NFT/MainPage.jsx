import React from "react";
import { Main, TemplatePage } from "../../styles/styled";
import { Header } from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import { Footer } from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

const MainPage = () => {
    return (
        <TemplatePage>
            <Header /> 
            <Main>
                <Content /> 
                <Banner />
            </Main>
            <Footer />
        </TemplatePage>
)};

export default MainPage;