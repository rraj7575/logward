import { Inline } from '@bedrock-layout/inline';
import { Stack } from '@bedrock-layout/stack';
import _isNil from 'lodash/isNil';
import { ReactNode, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { IconButton } from '../Button';
import { TooltipReact } from '../TooltipReact';
import { Typography } from '../Typography';
import { Name } from '../Typography/Typography';
import { ContainerStyled } from './Expander.styled';

export type FontWeight = 400 | 700 | 900;

export type ExpanderProps = {
  title: string | ReactNode;
  children: ReactNode;
  collapsed?: boolean;
  fontWeight?: FontWeight;
  onClick?: () => void;
  name?: Name;
  as?: any;
  tooltip?: string;
};

export function Expander({
  title,
  children,
  collapsed,
  fontWeight,
  onClick,
  as,
  name = 'heading3',
  tooltip,
}: ExpanderProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed ?? false);

  return (
    <Stack gutter={16} as={!_isNil(as) ? as : 'div'}>
      <Inline
        justify="start"
        align="center"
        stretch={1}
        onClick={() =>
          typeof onClick === 'function'
            ? onClick()
            : setIsCollapsed(!isCollapsed)
        }
      >
        <Inline gutter={8} align="center">
          <Typography fontWeight={fontWeight} name={name}>
            {title}
          </Typography>

          {!_isNil(tooltip) && (
            <TooltipReact id="tooltipExpander">
              <Typography>{tooltip}</Typography>
            </TooltipReact>
          )}
        </Inline>

        <Inline justify="end">
          <IconButton type="button">
            {isCollapsed ? (
              <BiChevronDown size={24} />
            ) : (
              <BiChevronUp size={24} />
            )}
          </IconButton>
        </Inline>
      </Inline>

      <ContainerStyled $isCollapsed={isCollapsed}>{children}</ContainerStyled>
    </Stack>
  );
}
