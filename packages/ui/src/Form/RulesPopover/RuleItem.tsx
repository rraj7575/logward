import { Inline } from '@bedrock-layout/inline';
import _isEmpty from 'lodash/isEmpty';

import { Typography } from '../../Typography';
import { RuleItemStyled } from './RuleItem.styled';
import { SimpleDropDownModel } from './RulesPopover';

export type RuleItemProps = {
  onClick: (id: string) => void;
  rule: SimpleDropDownModel;
};

export function RuleItem({ onClick, rule }: RuleItemProps) {
  return (
    <Inline
      onClick={() => onClick(rule.id)}
      stretch="start"
      as={RuleItemStyled}
      padding={[3, 12]}
    >
      <Typography>{rule.name}</Typography>
      {!_isEmpty(rule.type) && (
        <Typography name="secondaryXs">{rule.type}</Typography>
      )}
    </Inline>
  );
}
