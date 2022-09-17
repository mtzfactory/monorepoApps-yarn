import type * as React from 'react';
import { View } from 'react-native';

interface Props extends React.ComponentProps<typeof View> {}

export default function Container(props: Props) {
  return <View {...props} />;
}
