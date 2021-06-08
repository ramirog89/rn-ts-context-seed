import React from 'react';
import { View, Text } from 'react-native';
import { useGeneral } from "../../../context/general/provider";

import { styles } from './styles';

const ToastList = () => {
  const { state } = useGeneral();

  return (
    <View style={styles.container}>
      {state.toastList.map((toast, index) => (
        <View style={[styles.toast, styles[toast.type]]} key={index}>
          <Text>{toast.message}</Text>
        </View>
      ))}
    </View>
  );
}

export default ToastList;
