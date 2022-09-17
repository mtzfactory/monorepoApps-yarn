import type * as React from 'react';
import { Image } from 'react-native';

interface Props extends React.ComponentPropsWithoutRef<typeof Image> {}

export default function Desciption(props: Props) {
  return <Image {...props} />;
}
