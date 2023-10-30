import { Inline } from '@bedrock-layout/inline';
import { PadBox } from '@bedrock-layout/padbox';
import { Stack } from '@bedrock-layout/stack';
import { AnimatePresence, motion } from 'framer-motion';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import _isUndefined from 'lodash/isUndefined';
import { ReactNode } from 'react';
import { GoTriangleRight } from 'react-icons/go';

import { Image } from '../Image';
import { Typography } from '../Typography';
import { NodeStyled } from './Node.styled';

export type NodeProps = {
  depth: number;
  nodeValue: Record<string, any>;
  children: ReactNode;
  expandedNodes: Record<string, boolean>;
  parentNodeClickHandler: (id: string) => void;
  searchInput: string;
  title?: string;
  hideChevronIcon?: boolean;
};

export function Node({
  depth,
  nodeValue,
  title,
  searchInput,
  children,
  expandedNodes,
  parentNodeClickHandler,
  hideChevronIcon = false,
}: NodeProps) {
  const rotationVariants = {
    initial: { rotate: '90deg', transition: { duration: 0 } },
    twist: { rotate: '90deg', transition: { duration: 0.25 } },
    untwist: { rotate: 0 },
  };

  const areChildrenVisible: boolean =
    _isUndefined(expandedNodes[nodeValue.id]) ||
    expandedNodes[nodeValue.id] ||
    searchInput.length > 0;

  const hasNodeImage = !_isNil(nodeValue.image) && !_isEmpty(nodeValue.image);

  return (
    <AnimatePresence>
      <PadBox padding={[0, 0, 0, 20 * depth]}>
        <Stack gutter={!hasNodeImage ? 0 : '1rem'}>
          {!_isUndefined(title) && (
            <Inline
              gutter={10}
              align="center"
              onClick={() => {
                parentNodeClickHandler(nodeValue.id);
              }}
            >
              {!hideChevronIcon && (
                <motion.div
                  variants={rotationVariants}
                  initial="initial"
                  animate={areChildrenVisible ? 'twist' : 'untwist'}
                >
                  <GoTriangleRight size={12} />
                </motion.div>
              )}

              {!_isNil(nodeValue.image) && !_isEmpty(nodeValue.image) && (
                <Image src={nodeValue.image} alt="minus" size="small" round />
              )}

              <NodeStyled>
                <Typography>{title}</Typography>
              </NodeStyled>
            </Inline>
          )}

          {areChildrenVisible && <motion.div>{children}</motion.div>}
        </Stack>
      </PadBox>
    </AnimatePresence>
  );
}
