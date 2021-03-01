import React from 'react';
import FullscreenLoader from '../FullscreenLoader';
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

    if (!ready) return <FullscreenLoader />;

    return (
    );
};

export default App;
