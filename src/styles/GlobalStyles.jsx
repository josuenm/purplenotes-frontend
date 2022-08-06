import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --purple-100: #5100ff;
        --purple-90: #3900b3;
        --purple-80: #2c008a;
        --text-gray: #3b3b3b;
        --disabled: #aaa;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 991.98px) {
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        outline: none;
    }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`;
