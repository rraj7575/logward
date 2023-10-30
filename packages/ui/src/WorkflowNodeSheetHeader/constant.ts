export const WorkflowEnvironments = Object.freeze({
  PRODUCTION: 'production',
  STAGING: 'staging',
});

export type WorkflowEnvironment = Lowercase<keyof typeof WorkflowEnvironments>;
