import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getProjects } from '../../store/projects/slices';
import { getHomepage } from '../../store/homepage/slices';
import { ExternalRoute, ScrollToTop } from '../../utils/router';
import FullscreenLoader from '../FullscreenLoader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Legal from '../Legal';
import Contact from '../Contact';
import SingleProject from '../SingleProject';
import Homepage from '../Homepage';
import Error from '../Error';

const App = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [ready, setReady] = React.useState<boolean>(false);
    const headerNavigationItems = {
        home: { link: '/', label: 'Home' },
        // contact: { link: '/kontakt', label: 'Kontakt' },
    };

    const boot = async () => {
        try {
            dispatch(getProjects());
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
                {/*
                <Route
                    path="/bachelorarbeit"
                    component={() =>
                        ExternalRoute('https://florianrehder.de/portfolio/bachelorarbeit-projekt-ortslinien')
                    }
                />
                */}
                <Route path="/bachelorarbeit" component={() => ExternalRoute('/')} />
                <Route exact path="/impressum" render={(props) => <Legal block="imprint" {...props} />} />
                <Route exact path="/datenschutz" render={(props) => <Legal block="privacy-policy" {...props} />} />
                {/*
                <Route exact path="/kontakt" component={Contact} />
                <Route
                    exact
                    path="/portfolio/website-mein-pferd"
                    component={() => ExternalRoute('/portfolio/website-jtsv')}
                />
                <Route
                    exact
                    path="/portfolio/website-tennismagazin"
                    component={() => ExternalRoute('/portfolio/website-jtsv')}
                />
                <Route path="/portfolio/:projectSlug" component={SingleProject} />
                <Route path="/portfolio" component={() => ExternalRoute('/')} />
                */}
                <Route exact path="/kontakt" component={() => ExternalRoute('/')} />
                <Route exact path="/portfolio/website-mein-pferd" component={() => ExternalRoute('/')} />
                <Route exact path="/portfolio/website-tennismagazin" component={() => ExternalRoute('/')} />
                <Route exact path="/portfolio/:projectSlug" component={() => ExternalRoute('/')} />
                <Route exact path="/portfolio" component={() => ExternalRoute('/')} />
                <Route exact path="/" component={Homepage} />
                <Route
                    path="*"
                    render={(props) => <Error headline="Fehler 404" text="Seite nicht gefunden." {...props} />}
                />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
