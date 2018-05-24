import {Section} from "cx/widgets";

export default (
    <cx>
        <h2 putInto="header">About</h2>

        <div style="padding: 1rem">
            <p>Your app is now running. Let's check it out.</p>
            <h3>Routing</h3>
            <p ws>
                Navigate through the pages to see if all pages load correctly.
                Bear in mind that routing is done completely client-side. No
                server calls are made to load pages. This is ok for smaller
                apps. If your app gets big and slow, you should consider
                <a
                    href="https://webpack.js.org/guides/code-splitting/"
                    target="_blank"
                >
                    Code Splitting
                </a>.
            </p>

            <h3>Hot Module Replacement (HMR)</h3>
            <p ws>
                This app is using the webpack development server which offers hot
                module replacement. If you change the source code the
                browser will automatically update the page without
                refreshing.
            </p>

            <h3>Next Steps</h3>
            <p ws>
                If you haven't done so already, you should check out CxJS on
                <a href="https://github.com/codaxy/cxjs" target="_blank">
                    GitHub
                </a> and get familiar with the
                <a href="https://cxjs.io/docs" target="_blank">
                    CxJS documentation
                </a>. If you encounter any problems you can
                <a href="https://cxjs.io">contact support</a>,
                ask a question on
                <a
                    href="http://stackoverflow.com/questions/tagged/cxjs"
                    target="_blank"
                >
                    StackOverflow
                </a>
                or report
                <a href="https://github.com/codaxy/cxjs/issues">
                    a bug at GitHub
                </a>.
            </p>
        </div>
    </cx>
);
