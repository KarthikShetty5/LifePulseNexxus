import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/life.jpg')} // Replace with your medical background image path
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to LifePulseNexus</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.subtitle}>Login to continue</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to make text readable
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', // White text color
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#ffffff', // White text color
    },
});

export default WelcomeScreen;
