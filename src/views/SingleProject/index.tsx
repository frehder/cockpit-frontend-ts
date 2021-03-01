import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IUrlParams } from '../../types/router';
import * as Styled from './styles';
import { Status } from '../../types/store';
import { selectProject, selectStatus } from '../../store/projects/selectors';
import Spinner from '../../components/Spinner';
import Hero from '../../components/Project/Hero';
import Info from '../../components/Project/Info';

const SingleProject = (): React.ReactElement => {
    const status = useSelector(selectStatus);
    const { projectSlug } = useParams<IUrlParams>();
    const project = useSelector(selectProject(projectSlug));
    const {
        info_meta,
        info_text,
        info_feature_list,
        header_headline,
        header_headline_color,
        header_background_color,
        header_image,
    } = project;

    if (status !== Status.LOADED) return <Spinner />;

    return (
        <Styled.Container>
            <Hero
                headline={header_headline}
                colorscheme={header_headline_color}
                bgcolor={header_background_color}
                image={header_image}
            />
            <Info headline={info_meta} content={info_text} features={info_feature_list} />
        </Styled.Container>
    );
};

export default SingleProject;
