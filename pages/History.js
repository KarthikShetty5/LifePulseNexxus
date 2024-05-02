import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HistoryPage = ({ navigation }) => {
    const historyData = [
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
    ];

    const navigateToDetail = (disease, cureDescription) => {
        navigation.navigate('Description', {
            disease,
            cureDescription,
        });
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {historyData.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigateToDetail(item.title, item.description)}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
        paddingTop: 20,
    },
    card: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        paddingLeft: 20,
        paddingTop: 20,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 2,          // Added border width
        borderColor: 'black',   // Added border color
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
    },
});

export default HistoryPage;
