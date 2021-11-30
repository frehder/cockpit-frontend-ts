import React from 'react';

const useTitle = (newTitle?: string | undefined): string => {
    const initialTitle = 'Florian Rehder - Webdesign und Frontend-Entwicklung';
    const [title, setTitle] = React.useState<string>(initialTitle);

    React.useEffect(() => {
        const t = !!newTitle ? `${newTitle} - ${initialTitle}` : initialTitle;
        setTitle(t);
        document.title = t;
    }, [newTitle]);

    return title;
};

export default useTitle;
