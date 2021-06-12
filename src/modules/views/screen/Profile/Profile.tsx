import React from 'react';
import { Text, View } from 'react-native';
import Layout from '../../common/Layout';

import { styles } from './styles';

const ProfileScreen = () => {
  return (
    <Layout>
      <View>
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionTitle,
            ]}>
              Aca va mi perfil
          </Text>
        </View>
      </View>
    </Layout>
  );
}

export default ProfileScreen;
