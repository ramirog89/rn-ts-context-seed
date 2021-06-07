import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface IProfileSceenProps {
  navigation: any;
}

const ProfileScreen = ({ navigation }: IProfileSceenProps) => {
  return (
    <View>
        <View style={styles.sectionContainer}>
            <Text
            style={[
              styles.sectionTitle,
            ]}>
                Aca va mi perfil
                <Button onPress={() => navigation.goBack()} title="Go back home" />
          </Text>
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

export default ProfileScreen;
