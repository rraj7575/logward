import { Inline } from '@bedrock-layout/inline';
import _isUndefined from 'lodash/isUndefined';

import { Typography } from '../../Typography';
import { LeafNodeStyled } from './NodeLeaf.styled';

export type NodeLeafProps = {
  title: string;
  onClick: () => void;
  dataType?: string;
};

export const NodeLeaf = ({ title, onClick, dataType }: NodeLeafProps) => {
  return (
    <LeafNodeStyled onClick={onClick} padding={[0, 0, 0, 22]}>
      <Inline stretch="start">
        <Typography name="secondarySmallDark">{title}</Typography>

        {!_isUndefined(dataType) && (
          <Typography name="secondaryXs">{dataType}</Typography>
        )}
      </Inline>
    </LeafNodeStyled>
  );
};
