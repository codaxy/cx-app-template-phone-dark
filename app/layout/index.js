import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";
import FooterNav from "./FooterNav";
import "./fa-icons";

export default (
    <cx>
        <div controller={Controller} class="layout">
            <header className="header">
                <ContentPlaceholder name="header">
                    <h2>Default Header</h2>
                </ContentPlaceholder>
            </header>
            <main class="main">
                <ContentPlaceholder />
            </main>
            <footer className="footer">
                <ContentPlaceholder name="footer">
                    <FooterNav />
                </ContentPlaceholder>
            </footer>
        </div>
    </cx>
);
