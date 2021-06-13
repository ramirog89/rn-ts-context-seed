import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import Layout from '../../common/Layout';

const HomeScreen = () => {
  return (
    <Layout>
      <Card>
        <CardItem header>
          <Text>NativeBase</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              Aplicacion de prueba
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>GeekyAnts</Text>
        </CardItem>
      </Card>
    </Layout>
  );
}

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
 });

export default HomeScreen;
