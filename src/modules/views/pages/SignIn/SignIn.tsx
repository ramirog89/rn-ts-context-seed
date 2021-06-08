import React, { useCallback, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAuth } from '../../../context/auth';
import Layout from '../../common/Layout';


const SignInScreen = () => {
  const { signIn } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSignIn = useCallback(() => {
    signIn(username, password);
  }, [username, password, signIn]);

  return (
    <Layout>
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={onSignIn} />
      </View>
    </Layout>
  );
}

export default SignInScreen;
