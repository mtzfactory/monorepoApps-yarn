import { Container, Description, Image } from '@monorepo-apps/ui';
import * as React from 'react';
import type { ColorValue, TextStyle, ViewStyle } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';

const emotionLogo = 'https://cdn.rawgit.com/emotion-js/emotion/main/emotion.png';

const safeAreaViewStyle: ViewStyle = {
  backgroundColor: '#00f0f0',
  flex: 1,
};
const marginTopAuto: ViewStyle = { marginTop: 'auto' };
const text: TextStyle = { fontSize: 45, fontWeight: 'bold' };

const setBackgroundColor = (color: ColorValue) => ({ backgroundColor: color });
const setForegroundColor = (color: ColorValue) => ({ color });
const setFlexDisplay = (value: number) => ({ flex: value });
const setPadding = (value: number) => ({ padding: value });
const setMargin = (value: number) => ({ margin: value });

export const App = () => (
  <SafeAreaView style={safeAreaViewStyle}>
    <View style={[setPadding(8), setBackgroundColor('plum'), setFlexDisplay(1)]}>
      <Text style={setForegroundColor('red')}>Hola</Text>
      <View>
        <Text>Lorem ipsum</Text>
        <Text>En un lugar de la Mancha</Text>
        <Text>de cuyo nombre no quiero acordarme</Text>
      </View>
      <Container style={[setBackgroundColor('yellow'), setPadding(8), marginTopAuto]}>
        <Description color="red" style={[setPadding(10), setBackgroundColor('gold')]}>
          Esto es una descripción
        </Description>
        <Container style={[setMargin(10), setBackgroundColor('#d23456')]}>
          <Description>Hola muy buenas</Description>
          <Description color="black" style={text}>
            Cómo están ustedes!
          </Description>
          <Image
            source={{
              height: 150,
              uri: emotionLogo,
              width: 150,
            }}
          />
        </Container>
      </Container>
    </View>
  </SafeAreaView>
);
