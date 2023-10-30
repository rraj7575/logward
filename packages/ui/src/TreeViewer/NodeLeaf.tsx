import { Inline } from '@bedrock-layout/inline';
import _isUndefined from 'lodash/isUndefined';

import { Typography } from '../Typography';
import { LeafNodeStyled } from './NodeLeaf.styled';

export type NodeLeafProps = {
  title: string;
  onClick: () => void;
  dataType?: string;
  nodeImageExists?: boolean;
};

export function NodeLeaf({
  title,
  onClick,
  dataType,
  nodeImageExists = false,
}: NodeLeafProps) {
  return (
    <LeafNodeStyled
      onClick={onClick}
      padding={[0, 0, '0.4rem', nodeImageExists ? '3.2rem' : '2.2rem']}
    >
      <Inline stretch="start">
        <Typography name="secondarySmallDark">{title}</Typography>

        {!_isUndefined(dataType) && (
          <Typography name="secondaryXs">{dataType}</Typography>
        )}
      </Inline>
    </LeafNodeStyled>
  );
}
