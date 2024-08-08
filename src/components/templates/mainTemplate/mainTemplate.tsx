import React from "react";
import { Header } from "../../organisms/header/header";
import { Footer } from "../../organisms/footer/footer";
import "./mainTemplate.css";
interface MainTemplateProps {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <div className="mainTemplate">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
