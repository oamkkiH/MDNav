import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppBar = ({ back, title }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default AppBar;
