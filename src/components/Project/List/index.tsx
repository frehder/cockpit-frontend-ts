import React from 'react';
import * as Styled from './styles';
import { TProjects } from '../../../store/projects/types';
// import { sortByPublishDate } from '../../../utils/project';
import Special from '../Special';
// import Tile from '../Tile';

interface IListProps {
    header: {
        headline: string;
        content: string;
    };
    projects: TProjects;
}

const List = ({ header, projects }: IListProps): React.ReactElement => {
    // const entries = Object.entries(projects);
    // entries.sort(sortByPublishDate);
    // const tiles = entries.map(([slug, project]) => <Tile key={slug} project={project} />);

    return (
        <Styled.Container>
            {/*
            <Styled.Header>
                <Styled.Headline>{header.headline}</Styled.Headline>
                <Styled.Subline>{header.content}</Styled.Subline>
            </Styled.Header>
            */}
            <Styled.Tiles>
                <Special />
            {/*
                {tiles}
            */}
            </Styled.Tiles>
        </Styled.Container>
    );
};

export default List;
