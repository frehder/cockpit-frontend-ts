import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default App;
