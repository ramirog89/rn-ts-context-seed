import React from 'react';
import { Text, View } from 'react-native';

import Layout from '../../common/Layout';

import { styles } from './styles';

const ProfileScreen = () => {
  return (
    <Layout showBack={true}>
      <View>
        <View style={styles.sectionContainer}>
          <Text
            style={styles.sectionTitle}>
              Profile Screen
          </Text>
        </View>
      </View>
    </Layout>
  );
}

export default ProfileScreen;
