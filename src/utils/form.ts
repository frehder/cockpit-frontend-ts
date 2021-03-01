export const getCaptchaValue = (): number => Math.floor(Math.random() * 10);

export const getCaptchaString = (first: number, second: number): string => {
    const map = ['Null', 'Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun'];
    return `${map[first]} plus ${map[second]} ist`;
};
