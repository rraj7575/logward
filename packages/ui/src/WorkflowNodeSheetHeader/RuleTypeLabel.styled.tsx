import { PadBox } from '@bedrock-layout/padbox';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const ruleTypeCss = theme('ruleType', {
  simpleRule: css`
    color: var(--color-jazzberryJam);
    background-color: var(--color-amour);
  `,
  ruleset: css`
    color: var(--color-darkCerulean);
    background-color: var(--color-whiteIce);
  `,
  decisionTable: css`
    color: var(--color-blueGem);
    background-color: var(--color-quartz);
  `,
});

export const RuleTypeContainer = styled(PadBox)`
  border-radius: 0.5rem;

  ${ruleTypeCss};
`;
