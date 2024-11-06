/**
 * @format
 */

import { SafeAreaView, StyleSheet, Text } from 'react-native';
import {name as appName} from './app.json';
import DashboardScreen from './src/screens/DashboardScreen';
import Fnprofile1 from './src/screens/Fnprofile1';
import Fnprofile2 from './src/screens/Fnprofile2';
import Fnprofile3 from './src/screens/Fnprofile3';
import HomeScreen123 from './src/screens/HomeScreen123';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

/*AppRegistry.registerComponent(appName, () => App);*/

const App = () => {
    return (
        <SafeAreaView style={style.root}>
            <Fnprofile1 />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default Fnprofile1;