import { TooltipReact } from '../TooltipReact';
import { Typography } from '../Typography';
import {
  EnvironmentButton,
  EnvironmentContainer,
} from './EnvironmentActionsContainer.styled';
import { WorkflowEnvironment, WorkflowEnvironments } from './constant';

export type EnvironmentActionsContainerProps = {
  active: WorkflowEnvironment;
  getActive: (environment: WorkflowEnvironment) => void;
  stageTooltip?: string;
  prodTooltip?: string;
};

export function EnvironmentActionsContainer({
  active,
  getActive,
  stageTooltip = '',
  prodTooltip = '',
}: EnvironmentActionsContainerProps) {
  return (
    <EnvironmentContainer justify="center" gutter={0} align="stretch">
      <EnvironmentButton
        type="button"
        $active={active === WorkflowEnvironments.STAGING}
        onClick={() => {
          getActive(WorkflowEnvironments.STAGING);
        }}
      >
        <TooltipReact
          id="staging-rules"
          launcher={<Typography>Staging</Typography>}
          placement="bottom-start"
        >
          <Typography>{stageTooltip}</Typography>
        </TooltipReact>
      </EnvironmentButton>

      <EnvironmentButton
        type="button"
        $active={active === WorkflowEnvironments.PRODUCTION}
        onClick={() => {
          getActive(WorkflowEnvironments.PRODUCTION);
        }}
      >
        <TooltipReact
          id="production-rules"
          launcher={<Typography>Production</Typography>}
          placement="bottom-start"
        >
          <Typography>{prodTooltip}</Typography>
        </TooltipReact>
      </EnvironmentButton>
    </EnvironmentContainer>
  );
}
