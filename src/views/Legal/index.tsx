import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from '../../hooks/useTitle';
import { Status } from '../../types/store';
import { selectBlock, selectStatus } from '../../store/legal/selectors';
import { getLegal } from '../../store/legal/slices';
import FullscreenLoader from '../FullscreenLoader';
import TextContent from '../../components/Page/TextContent';

interface ILegalProps {
    block: 'imprint' | 'privacy-policy';
}

const Legal = ({ block }: ILegalProps): React.ReactElement => {
    const dispatch = useDispatch();
    const [ready, setReady] = React.useState<boolean>(false);
    const pageStatus = useSelector(selectStatus);
    const legal = useSelector(selectBlock(block));

    useTitle(legal.headline);

    React.useEffect(() => {
        setReady(pageStatus === Status.LOADED);
        if (pageStatus !== Status.LOADED) dispatch(getLegal());
    }, [pageStatus]);

    if (!ready) return <FullscreenLoader />;

    return <TextContent headline={legal.headline} content={legal.content} />;
};

export default Legal;
