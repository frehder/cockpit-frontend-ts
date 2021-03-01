import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getHomepage } from '../../store/homepage/slices';
import { ExternalRoute, ScrollToTop } from '../../utils/router';
import FullscreenLoader from '../FullscreenLoader';
import Header from '../../components/Header';
import Homepage from '../Homepage';
const App = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [ready, setReady] = React.useState<boolean>(false);
    const headerNavigationItems = {
        home: { link: '/', label: 'Home' },
        contact: { link: '/kontakt', label: 'Kontakt' },
    };

    const boot = async () => {
        try {
            dispatch(getHomepage());
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
            <ScrollToTop />
            <Header navigationItems={headerNavigationItems} />
            <Switch>
                <Route path="/cv" component={() => ExternalRoute('https://cv.florianrehder.de')} />
                <Route
                    path="/bachelorarbeit"
                    component={() =>
                        ExternalRoute('https://florianrehder.de/portfolio/bachelorarbeit-projekt-ortslinien')
                    }
                />
                <Route exact path="/" component={Homepage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
