import { createGlobalStyle } from 'styled-components';
import { Baguettebox } from '../vendor/baguettebox.styles';
import { bp } from '../utils/styles';

export const GlobalStyle = createGlobalStyle`
    :root {
        /* COLOR */
        --color-lightest: #ffffff;

        --color-base-900: hsl(207, 75%, 14%);
        --color-base-800: hsl(207, 80%, 35%);
        --color-base-700: hsl(207, 85%, 42%);
        --color-base-500: hsl(207, 95%, 49%);
        --color-base-300: hsl(207, 85%, 70%);
        --color-base-100: hsl(207, 75%, 91%);

        --color-neutral-900: hsl(240, 1%, 18%);
        --color-neutral-700: hsl(236, 8%, 44%);
        --color-neutral-500: hsl(232, 16%, 70%);
        --color-neutral-300: hsl(228, 24%, 96%);
        --color-neutral-100: hsl(228, 71%, 99%);

        --color-success-900: hsl(155, 67%, 30%);
        --color-success-700: hsl(155, 67%, 45%);
        --color-success-500: hsl(155, 67%, 60%);
        --color-success-300: hsl(155, 67%, 75%);
        --color-success-100: hsl(155, 67%, 95%);

        --color-warning-900: hsl(50, 57%, 50%);
        --color-warning-700: hsl(50, 72%, 60%);
        --color-warning-500: hsl(50, 87%, 70%);
        --color-warning-300: hsl(50, 87%, 80%);
        --color-warning-100: hsl(50, 87%, 90%);

        --color-error-900: hsl(335, 72%, 30%);
        --color-error-700: hsl(335, 72%, 40%);
        --color-error-500: hsl(335, 72%, 50%);
        --color-error-300: hsl(335, 72%, 75%);
        --color-error-100: hsl(335, 72%, 90%);

        --color-info-900: hsl(190, 77%, 30%);
        --color-info-700: hsl(190, 77%, 45%);
        --color-info-500: hsl(190, 77%, 60%);
        --color-info-300: hsl(190, 77%, 75%);
        --color-info-100: hsl(190, 77%, 90%);

        /* GRID */
        --boundary: 1440px;
        --grid-gap: 10px;
        --grid-6: calc(((var(--boundary) / 12) * 6) - (var(--space-regular) * 2));
        --grid-8: calc(((var(--boundary) / 12) * 8) - (var(--space-regular) * 2));
        --grid-10: calc(((var(--boundary) / 12) * 10) - (var(--space-regular) * 2));
        --grid-12: calc(var(--boundary) - (var(--space-regular) * 2));

        /* SPACE */
        --space-base: 5px;
        --space-small: var(--space-base);
        --space-regular: calc(2 * var(--space-base));
        --space-medium: calc(4 * var(--space-base));
        --space-large: calc(8 * var(--space-base));

        /* FONT */
        --font-size-base: 16px;

        --font-weight-regular: 400;
        --font-weight-bold: 700;
        --font-weight-headline: 700;

        --font-size-headline-hero: calc(var(--font-size-base) * 1.75);
        --font-size-headline-large: calc(var(--font-size-base) * 1.5);
        --font-size-headline-medium: calc(var(--font-size-base) * 1.25);
        --font-size-headline-small: calc(var(--font-size-base) * 1.125);
        --font-size-text-hero: calc(var(--font-size-base) * 1.25);
        --font-size-text-large: calc(var(--font-size-base) * 1.125);
        --font-size-text-baseline: var(--font-size-base);
        --font-size-text-small: calc(var(--font-size-base) * 0.875);

        --font-family-headline: 'Open Sans Condensed', Helvetica, Arial, sans-serif;
        --font-family-regular: 'Open Sans', Helvetica, Arial, sans-serif;

        --font-line-height: 1.5em;

        /* BORDER-RADIUS */
        --radius-default: 4px;

        /* TRANSITION */
        --transition-default: all .2s ease-in-out;

        /* SHADOW */
        --shadow-default: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
        --shadow-dark: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px var(--color-base-900);
    }

    @media ${bp()} {
        :root {
            /* GRID */
            --grid-gap: 20px;

            /* SPACE */
            --space-base: 10px;

            /* FONT */
            --font-size-headline-hero: calc(var(--font-size-base) * 3);
            --font-size-headline-large: calc(var(--font-size-base) * 1.75);
            --font-size-headline-medium: calc(var(--font-size-base) * 1.5);
            --font-size-headline-small: calc(var(--font-size-base) * 1.25);
            --font-size-text-hero: calc(var(--font-size-base) * 1.5);

            /* BORDER-RADIUS */
            --radius-default: 8px;
        }
    }

    /* CORE STYLES */
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        color: var(--color-neutral-900);
        font: var(--font-weight-regular) var(--font-size-text-baseline)/var(--font-line-height) var(--font-family-regular);
        background-color: var(--color-lightest);
    }

    p {
        margin: 0 0 var(--space-small);
    }

    a {
        color: var(--color-base-900);
        text-decoration: none;
        transition: var(--transition-default);

        &:hover, &:focus {
            color: var(--color-base-700);
            transition: var(--transition-default);
        }
    }

    h1, h2, h3, h4 {
        margin: 0;
        font-weight: var(--font-weight-headline);
        line-height: 1.3em;
    }

    ul, ol {
        list-style-type: none;
    }

    figure {
        margin: 0;
    }

    ${Baguettebox}
`;
