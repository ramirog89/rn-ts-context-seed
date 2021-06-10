import React from 'react';
import { View, Text } from 'react-native';
import { useGeneral } from "../../../context/general/provider";

import { styles } from './styles';

const ToastList = () => {
  const { state } = useGeneral();

  return (
    <View style={styles.container}>
      {state.toastList.map((item) => (
        <View style={[styles.toast, styles?.[item.toast.type]]} key={item.id}>
          <Text>{item.toast.message}</Text>
        </View>
      ))}
    </View>
  );
}

export default ToastList;
