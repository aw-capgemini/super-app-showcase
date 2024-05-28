import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';

import {decrement, increment} from './counterSlice';
import {Button, Text, View} from 'react-native';

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const onPressIncrement = () => {
    console.log('zxc', count);
    dispatch(increment());
  };

  const onPressDecrement = () => {
    console.log('zxc', count);
    dispatch(decrement());
  };
  // omit rendering logic
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HELLO! {count}</Text>
      <Button onPress={onPressIncrement} title="Increment" />
      <Button onPress={onPressDecrement} title="Decrement" />
    </View>
  );
}
