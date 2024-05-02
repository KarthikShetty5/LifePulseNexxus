import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = ({ route }) => {
    const { disease, cureDescription } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{disease}</Text>
            <Text style={styles.description}>{cureDescription}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
    },
});

export default Description;
