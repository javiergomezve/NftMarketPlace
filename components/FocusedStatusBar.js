import { StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar
                barStyle="light-content"
                animated={true}
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </SafeAreaView>
    </View>
);

const FocusedStatusBar = props => {
    const isFocused = useIsFocused();

    // return isFocused ? <StatusBar animated={true} {...props} /> : null;
    return isFocused ? <MyStatusBar {...props} /> : null;
};

export default FocusedStatusBar;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },

    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});
