import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from '../../common/Layout';

const HomeScreen = () => {
  return (
    <Layout>
      <View>
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionTitle,
            ]}>
              Aca va un texto cualquiera editado sio
          </Text>
        </View>
      </View>
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
