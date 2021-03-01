import React from 'react';
const App = (): React.ReactElement => {
    const [ready, setReady] = React.useState<boolean>(false);

    const boot = async () => {
        try {
        } catch (error) {
            console.error('app boot error:', error);
        } finally {
            setReady(true);
        }
    };

    React.useEffect(() => {
        boot();
    }, []);

    return (
    );
};

export default App;
