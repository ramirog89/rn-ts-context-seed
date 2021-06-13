import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

import Layout from '../../common/Layout';

const HomeScreen = () => {
  return (
    <Layout>
      <Card>
        <CardItem header>
          <Text style={{ fontWeight: 'bold' }}>Example Base App</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              This repository it provides a base implementation.
              It provides the core architecture conventions.
              Uses context as state management, react router for having multiple screens, NativeBase as Component library and it has the minimal setup for authentication flow using a secure storage to save the token, Toasts for handle errors, and loading scenarios, and tests for each scenario
              Anything else is up to you.
            </Text>
          </Body>
        </CardItem>
      </Card>
    </Layout>
  );
}

export default HomeScreen;
