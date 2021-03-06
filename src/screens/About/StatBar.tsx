import React from 'react';
import { Color } from '../../@types/pokemon';
import theme from '../../styles/theme';
import { StatBarActive, StatBarContainer } from './styles';

interface StatBarProps {
  size: number;
  color: Color;
}

function StatBar({ size, color }: StatBarProps) {
  return (
    <StatBarContainer>
      <StatBarActive style={{ width: size, backgroundColor: theme.color.type[color] }} />
    </StatBarContainer>
  );
}

export default StatBar;
