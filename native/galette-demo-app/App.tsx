import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import { errors } from '@galette/native'
const { actions: { reportError }, components: { ErrorWrapper }} = errors;

const store = createStore(errors.reducer);

export default function App() {
  return (
    <Provider store={store}>
      <ErrorWrapper style={styles.wrapper}>
        <View style={styles.container}>
          <Button title="Throw an error" onPress={() => { store.dispatch(reportError(new Error('Oh god.'))) }} />
        </View>
      </ErrorWrapper>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
