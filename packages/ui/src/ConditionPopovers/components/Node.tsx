import { Inline } from '@bedrock-layout/inline';
import { PadBox } from '@bedrock-layout/padbox';
import { AnimatePresence, motion } from 'framer-motion';
import _isNil from 'lodash/isNil';
import _isUndefined from 'lodash/isUndefined';
import { ReactNode } from 'react';
import { GoTriangleRight } from 'react-icons/go';

import { TooltipReact } from '../../TooltipReact';
import { Typography } from '../../Typography';
import { NodeStyled } from './Node.styled';

export type NodeProps = {
  depth: number;
  nodeValue: Record<string, any>;
  children: ReactNode;
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  searchInput: string;
  title?: string;
  tooltip?: ReactNode;
};

export const Node = ({
  depth,
  nodeValue,
  title,
  searchInput,
  children,
  expandedNodes,
  tooltip,
  parentNodeClickHandler,
}: NodeProps) => {
  const rotationVariants = {
    initial: { rotate: '90deg', transition: { duration: 0 } },
    twist: { rotate: '90deg', transition: { duration: 0.25 } },
    untwist: { rotate: 0 },
  };

  const areChildrenVisible: boolean =
    _isUndefined(expandedNodes[nodeValue.id]) ||
    expandedNodes[nodeValue.id] ||
    searchInput.length > 0;

  return (
    <AnimatePresence>
      <PadBox padding={[0, 0, 0, 20 * depth]}>
        {!_isUndefined(title) && (
          <Inline
            gutter={10}
            align="center"
            onClick={() => {
              parentNodeClickHandler(nodeValue.id);
            }}
          >
            <motion.div
              variants={rotationVariants}
              initial="initial"
              animate={areChildrenVisible ? 'twist' : 'untwist'}
            >
              <GoTriangleRight size={12} />
            </motion.div>

            <NodeStyled align="center" gutter={8}>
              <Typography>{title}</Typography>
              {!_isNil(tooltip) && (
                <TooltipReact id={`tree-${nodeValue.id as string}`}>
                  {tooltip}
                </TooltipReact>
              )}
            </NodeStyled>
          </Inline>
        )}

        {!_isNil(nodeValue.footer) && nodeValue.footer}

        {areChildrenVisible && <motion.div>{children}</motion.div>}
      </PadBox>
    </AnimatePresence>
  );
};
