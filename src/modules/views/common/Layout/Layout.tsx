import React from 'react';
import { Container, Header, Content, Left, Body, Button, Title, Right, Icon } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';

interface ILayoutProps {
  children: React.ReactNode;
  showBack: boolean;
}

const Layout = ({ children, showBack = true }: ILayoutProps) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <Header>
        <Left>
          {!showBack && route.name !== 'Home' && (
            <Button onPress={() => navigation.goBack()} transparent>
              <Icon name='arrow-back' />
            </Button>
          )}
        </Left>
        <Body>
          <Title>{route.name}</Title>
        </Body>
        <Right>
          <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Layout;
