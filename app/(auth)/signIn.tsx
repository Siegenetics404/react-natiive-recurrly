import { View, Text } from 'react-native';
import React from 'react';
import {Link} from "expo-router";

const signIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
        <Link href="/(auth)/signUp">Create Account</Link>
        <Link href="/(tabs)/index">home</Link>
    </View>
  );
};

export default signIn;