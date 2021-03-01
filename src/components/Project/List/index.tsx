import React from 'react';
import * as Styled from './styles';
import { TProjects } from '../../../store/projects/types';
import Tile from '../Tile';

interface IListProps {
    header: {
        headline: string;
        content: string;
    };
    projects: TProjects;
}

const List = ({ header, projects }: IListProps): React.ReactElement => {
    const entries = Object.entries(projects);
    const tiles = entries.map(([slug, project]) => <Tile key={slug} project={project} />);

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Headline>{header.headline}</Styled.Headline>
                <Styled.Subline>{header.content}</Styled.Subline>
            </Styled.Header>
            <Styled.Tiles>
                {tiles}
            </Styled.Tiles>
        </Styled.Container>
    );
};

export default List;
