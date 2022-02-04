import { ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { StatBarActive, StatBarContainer } from './styles';

interface StatBarProps {
  size: number;
}

function StatBar({ size }: StatBarProps) {
  return (
    <StatBarContainer>
      <StatBarActive style={{ width: size }} />
    </StatBarContainer>
  );
}

export default StatBar;
