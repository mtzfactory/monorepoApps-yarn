import type * as React from 'react';
import type { ColorValue } from 'react-native';
import { Text } from 'react-native';

interface Props extends React.ComponentPropsWithoutRef<typeof Text> {
  color?: ColorValue;
  size?: number;
}

export default function Desciption(props: Props) {
  const { color, size: fontSize, style, ...rest } = props;
  return <Text {...rest} style={[style, { color, fontSize }]} />;
}
