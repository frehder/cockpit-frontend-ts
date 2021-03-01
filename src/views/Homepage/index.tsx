import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Status } from '../../types/store';
import { getHomepage } from '../../store/homepage/slices';
import { selectBlock, selectStatus } from '../../store/homepage/selectors';
import { selectProjects } from '../../store/projects/selectors';
import FullscreenLoader from '../FullscreenLoader';
import Hero from '../../components/Homepage/Hero';
import Intro from '../../components/Homepage/Intro';
import Skillset from '../../components/Homepage/Skillset';
import List from '../../components/Project/List';

const Homepage = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [ready, setReady] = React.useState<boolean>(false);
    const pageStatus = useSelector(selectStatus);
    const hero = useSelector(selectBlock('hero'));
    const about = useSelector(selectBlock('about'));
    const skillsetDesign = useSelector(selectBlock('skillset-design'));
    const skillsetDevelopment = useSelector(selectBlock('skillset-development'));
    const portfolioHeader = useSelector(selectBlock('portfolio-header'));
    const projects = useSelector(selectProjects);

    React.useEffect(() => {
        setReady(pageStatus === Status.LOADED);
        if (pageStatus !== Status.LOADED) dispatch(getHomepage);
    }, [pageStatus]);

    if (!ready) return <FullscreenLoader />;

    return (
        <>
            <Hero headline={hero.headline} subline={hero.content} />
            <Intro headline={about.headline} content={about.content} />
            <Skillset design={skillsetDesign} development={skillsetDevelopment} />
            {!!projects && <List header={portfolioHeader} projects={projects} />}
        </>
    );
};

export default Homepage;
