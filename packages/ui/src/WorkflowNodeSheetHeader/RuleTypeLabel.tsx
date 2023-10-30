import { ThemeProvider } from 'styled-components';

import { Typography } from '../Typography';
import { RuleTypeContainer } from './RuleTypeLabel.styled';

export const RuleType = {
  simpleRule: 'SimpleRule',
  ruleset: 'Ruleset',
  decisionTable: 'DecisionTable',
};

export type RuleTypeLabelProps = {
  ruleType: keyof typeof RuleType;
};

export function RuleTypeLabel({ ruleType }: RuleTypeLabelProps) {
  return (
    <ThemeProvider theme={{ ruleType }}>
      <RuleTypeContainer padding={['0.6rem', '0.8rem']}>
        <Typography name="paragraphSmall">{RuleType[ruleType]}</Typography>
      </RuleTypeContainer>
    </ThemeProvider>
  );
}
