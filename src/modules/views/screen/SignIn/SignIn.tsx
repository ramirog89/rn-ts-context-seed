import React, { useCallback, useState } from 'react';
import { Form, Item, Input, Button, Text, Icon, Container, Content } from 'native-base';

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
    <Container style={{ backgroundColor: '#546e7a' }}>
      <Content>
        <Form style={{ width: '95%', marginTop: '20%', marginBottom: '7%', }}>
          <Item>
            <Icon name="person" style={{ color: '#FFFFFF' }} />
            <Input
              style={{ color: '#FFFFFF' }}
              placeholderTextColor="#BBBBBB"
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </Item>
          <Item>
            <Icon name="key" style={{ color: '#FFFFFF' }} />
            <Input
              style={{ color: '#FFFFFF' }}
              placeholder="Password"
              placeholderTextColor="#BBBBBB"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Item>
        </Form>
        <Button style={{ marginTop: 15, backgroundColor: '#29434e' }} full disabled={isLoading} onPress={onSignIn}>
          <Text>Sign In</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default SignInScreen;
