import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Status } from '../../types/store';
import { getHomepage } from '../../store/homepage/slices';
import { selectBlock, selectStatus } from '../../store/homepage/selectors';
import FullscreenLoader from '../FullscreenLoader';

const Homepage = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [ready, setReady] = React.useState<boolean>(false);
    const pageStatus = useSelector(selectStatus);
    React.useEffect(() => {
        setReady(pageStatus === Status.LOADED);
        if (pageStatus !== Status.LOADED) dispatch(getHomepage);
    }, [pageStatus]);

    if (!ready) return <FullscreenLoader />;

    return (
        <section>
            <p>views/Homepage</p>
        </section>
    );
};

export default Homepage;
