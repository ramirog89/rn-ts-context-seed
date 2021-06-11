import React from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles';

interface IProfileSceenProps {
  navigation: any;
}

const ProfileScreen = ({ navigation }: IProfileSceenProps) => {
  const navigateHome = () => {
    navigation.navigate('Home');
  }
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
          ]}>
            Aca va mi perfil
            <Button onPress={navigateHome} title="Go back home" />
        </Text>
      </View>
    </View>
  );
}

export default ProfileScreen;
