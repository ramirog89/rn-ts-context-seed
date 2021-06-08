import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface IHomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
          ]}>
            Aca va un texto cualquiera editado
        </Text>
        <Button onPress={() => navigation.navigate('Profile')} title="ir al Perfil" />
      </View>
    </View>
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
