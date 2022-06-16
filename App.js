import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Details from './screens/Details';
import Home from './screens/Home';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Platform.OS === 'android' ? 'transparent' : '#fff',
    },
};

const App = () => {
    const [loaded] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) return null;

    return (
        // <View style={{ flex: 1 }}>
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
        // </View>
    );
};

export default App;
