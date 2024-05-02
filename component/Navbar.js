import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Navbar = ({ title, navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.navbar}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'white',
        height: 40,
        flexDirection: 'row', // arrange children horizontally
        justifyContent: 'space-between', // space items apart
        alignItems: 'center', // center items vertically
        paddingHorizontal: 10, // add horizontal padding
        elevation: 3, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOffset: { width: 0, height: 2 }, // for shadow on iOS
        shadowOpacity: 0.3, // for shadow on iOS
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Navbar;
