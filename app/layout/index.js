import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";
import FooterNav from "./FooterNav";
import "./fa-icons";

export default (
    <cx>
        <div controller={Controller} class="layout">
            <header className="header">
                <ContentPlaceholder name="header">
                    Header
                </ContentPlaceholder>
            </header>
            <main class="main" onMouseDownCapture="onMainClick">
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
