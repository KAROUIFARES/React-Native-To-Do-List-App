import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListScreen from './screens/TodoListScreen';

const Stack = createStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" component={TodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
