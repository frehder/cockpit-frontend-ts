export const baguetteboxClass = 'project-content';

export const baguetteboxOptions = {
    noScrollbars: true,
    async: true,
    overlayBackgroundColor: 'var(--color-neutral-900)',
    captions: (element: HTMLElement): string | null => {
        const pElement = element.querySelector('p');
        if (!!pElement?.textContent) return pElement.textContent;

        const imageElement = element.querySelector('img');
        if (!!imageElement?.alt) return imageElement.alt;

        return '';
    },
};
