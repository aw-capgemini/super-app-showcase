import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';

import {Provider} from 'react-redux';
import {Counter} from '../features/counter/Counter';
import {store} from '../app/store';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <Text>HEY</Text>
      </SafeAreaView>
    </Provider>
  );

  // return (
  //   <ErrorBoundary name="AuthProvider">
  //     <React.Suspense fallback={<SplashScreen />}>
  //       <AuthProvider>
  //         {(authData: {isSignout: boolean; isLoading: boolean}) => {
  //           if (authData.isLoading) {
  //             return <SplashScreen />;
  //           }

  //           if (authData.isSignout) {
  //             return (
  //               <React.Suspense fallback={<SplashScreen />}>
  //                 <SignInScreen />
  //               </React.Suspense>
  //             );
  //           }

  //           return (
  //             <NavigationContainer
  //               onReady={() => RNBootSplash.hide({fade: true, duration: 500})}>
  //               <MainNavigator />
  //             </NavigationContainer>
  //           );
  //         }}
  //       </AuthProvider>
  //     </React.Suspense>
  //   </ErrorBoundary>
  // );
};

export default App;
