import React, { useCallback, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAuth } from '../../../context/auth';

const SignInScreen = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSignIn = useCallback(async () => {
    setLoading(true);
    await signIn({ username, password });
    setLoading(false);
  }, [username, password, signIn]);

  return (
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
      <Button title="Sign in" disabled={isLoading} onPress={onSignIn} />
    </View>
  );
}

export default SignInScreen;
