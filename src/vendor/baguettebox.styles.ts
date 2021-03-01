import { css, keyframes } from 'styled-components';
import { bp } from '../utils/styles';

const bounceFromRight = keyframes`
    0% {
        margin-left: 0;
    }
    50% {
        margin-left: -30px;
    }
    100% {
        margin-left: 0;
    }
`;

const bounceFromLeft = keyframes`
    0% {
        margin-left: 0;
    }
    50% {
        margin-left: 30px;
    }
    100% {
        margin-left: 0;
    }
`;

const spinnerBounce = keyframes`
    0%, 100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
`;

export const Baguettebox = css`
    #baguetteBox-overlay {
        display: none;
        overflow: hidden;
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        opacity: 0;
        transition: var(--transition-default);

        &.visible {
            background-color: var(--color-neutral-700);
            opacity: 1;
            transition: var(--transition-default);
        }

        .full-image {
            position: relative;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    }

    #baguetteBox-slider {
        position: absolute;
        z-index: 1100;
        top: 0;
        /* right: 0; // dont add this! bringt slides viewport durcheinander! */
        /* bottom: 0; // dont add this! bringt slides viewport durcheinander! */
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        white-space: nowrap; /* important! die slides werden so in einer reihe ausgelegt und er schiebt den viewport hin und her */
        transition: left 0.4s ease;
        transition: left 0.4s ease, transform 0.4s ease;

        &.bounce-from-right {
            animation: ${bounceFromRight} 0.4s ease-out;
        }

        &.bounce-from-left {
            animation: ${bounceFromLeft} 0.4s ease-out;
        }

        figure {
            padding: var(--space-large) 3px;

            img {
                display: block;
                margin-right: auto;
                margin-left: auto;
                max-height: calc(100vh - (2 * 3px + var(--font-size-text-small)));
            }

            figcaption {
                position: absolute;
                z-index: 1300;
                right: 0;
                bottom: 0;
                left: 0;
                padding: var(--space-small);
                color: var(--color-lightest);
                font-size: var(--font-size-text-small);
                text-align: center;
                background-color: var(--color-neutral-900);
                white-space: pre-wrap;
            }
        }
    }

    @media ${bp(992)} {
        #baguetteBox-slider figure {
            padding: var(--space-medium);

            img {
                max-height: calc(100vh - (2 * var(--space-medium) + var(--font-size-text-small)));
            }
        }
    }

    .baguetteBox-button {
        position: absolute;
        z-index: 1500;
        background-color: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;

        svg g,
        svg polyline {
            stroke: var(--color-neutral-300);
            transition: var(--transition-default);
        }

        &:hover {
            svg g,
            svg polyline {
                stroke: var(--color-base-700);
                transition: var(--transition-default);
            }
        }
    }

    #close-button {
        top: var(--space-small);
        right: var(--space-small);
    }

    #previous-button,
    #next-button {
        top: 50%;
        transform: translateY(-50%);
    }

    #previous-button {
        left: var(--space-small);
    }

    #next-button {
        right: var(--space-small);
    }

    .baguetteBox-spinner {
        position: absolute;
        z-index: 1300;
        top: 50%;
        left: 50%;
        display: inline-block;
        margin-top: -20px;
        margin-left: -20px;
        width: 40px;
        height: 40px;
    }

    .baguetteBox-double-bounce1,
    .baguetteBox-double-bounce2 {
        position: absolute;
        z-index: 1400;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: ${spinnerBounce} 2s infinite ease-in-out;
    }

    .baguetteBox-double-bounce1 {
        background-color: var(--color-neutral-100);
    }

    .baguetteBox-double-bounce2 {
        animation-delay: -1s;
        background-color: var(--color-neutral-300);
    }
`;
