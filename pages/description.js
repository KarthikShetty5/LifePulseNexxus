import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Description = ({ route }) => {
    const { disease, desc, hospital, amount } = route.params;

    return (
        <ImageBackground
            source={require('../assets/hist.jpg')}
            style={styles.background}
            resizeMode="cover"
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{disease}</Text>
                <Text style={styles.description}>Description: {desc}</Text>
                <Text style={styles.description}>Hospital: {hospital}</Text>
                <Text style={styles.amount}>Amount: ${amount}</Text>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        opacity: 0.6,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
        textAlign: 'center',
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 10,
        textAlign: 'center',
    },
});


export default Description;
