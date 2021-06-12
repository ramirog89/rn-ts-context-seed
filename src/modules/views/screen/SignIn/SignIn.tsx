import React, { useCallback, useState } from 'react';
import { View, Button } from 'react-native';
import { Form, Item, Input } from 'native-base';

import { useAuth } from '../../../context/auth';

const SignInScreen = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  
  const onSignIn = useCallback(async () => {
    setLoading(true);
    try {
      await signIn({ username, password });
    } catch (e) {
      setLoading(false);
    }
  }, [username, password, signIn]);

  return (
    <View>

      <Form>
        <Item>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Item>
      </Form>
      <Button title="Sign in" disabled={isLoading} onPress={onSignIn} />
    </View>
  );
}

export default SignInScreen;
