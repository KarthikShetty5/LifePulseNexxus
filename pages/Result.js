import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Result = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.centerText}>{data}</Text>
            </View>
            <TouchableOpacity style={styles.centerButton}>
                <Text style={styles.centerButtonText}>Appoint</Text>
            </TouchableOpacity>
            <View style={styles.centerContent}>

            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
                    <Text style={styles.buttonText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
                    <Text style={styles.buttonText}>Map</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        marginTop: 30,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    centerButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
        width: '100%',
        marginBottom: 60
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default Result;
