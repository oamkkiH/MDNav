import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AppBar = ({ title, canGoBack }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      {canGoBack && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
      {!canGoBack && (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      )}
    </Appbar.Header>
  );
};

export default AppBar;
