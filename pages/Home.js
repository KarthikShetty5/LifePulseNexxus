import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomePage = ({ navigation }) => {
    const [selectedValue1, setSelectedValue1] = useState('option1');
    const [selectedValue2, setSelectedValue2] = useState('option1');
    const [selectedValue3, setSelectedValue3] = useState('option1');
    const [selectedValue4, setSelectedValue4] = useState('option1');
    const [selectedValue5, setSelectedValue5] = useState('option1');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        navigation.navigate('Result', { data: "yourData" })
        try {
            const response = await fetch('http://192.168.193.81:5000/predict/naive', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "s1": selectedValue1,
                    "s2": selectedValue2,
                    "s3": selectedValue3,
                    "s4": selectedValue4,
                    "s5": selectedValue5
                }),
            });
            console.log(response)
            console.log("hwrere")
            setData(json);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setError(error);
            setLoading(false);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/bg.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.heading}>Select Symptoms</Text>
                <Picker
                    selectedValue={selectedValue1}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                >
                    <Picker.Item label="back_pain" value="back_pain" />
                    <Picker.Item label="red_sore_around_nose" value="red_sore_around_nose" />
                    <Picker.Item label="constipation" value="constipation" />
                    <Picker.Item label="abdominal_pain" value="abdominal_pain" />
                    <Picker.Item label="mild_fever" value="mild_fever" />
                    <Picker.Item label="yellow_urine" value="yellow_urine" />
                    <Picker.Item label="yellowing_of_eyes" value="yellowing_of_eyes" />
                </Picker>
                <View style={styles.separator} />
                <Picker
                    selectedValue={selectedValue2}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                >
                    <Picker.Item label="acute_liver_failure" value="acute_liver_failure" />
                    <Picker.Item label="fluid_overload" value="fluid_overload" />
                    <Picker.Item label="painful_walking" value="painful_walking" />
                    <Picker.Item label="swelling_of_stomach" value="swelling_of_stomach" />
                    <Picker.Item label="swelled_lymph_nodes" value="swelled_lymph_nodes" />
                    <Picker.Item label="malaise" value="malaise" />
                    <Picker.Item label="blurred_and_distorted_vision" value="blurred_and_distorted_vision" />
                </Picker>
                <View style={styles.separator} />
                <Picker
                    selectedValue={selectedValue3}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                >
                    <Picker.Item label="throat_irritation" value="throat_irritation" />
                    <Picker.Item label="redness_of_eyes" value="redness_of_eyes" />
                    <Picker.Item label="runny_nose" value="runny_nose" />
                    <Picker.Item label="chest_pain" value="chest_pain" />
                    <Picker.Item label="fast_heart_rate" value="fast_heart_rate" />
                    <Picker.Item label="neck_pain" value="neck_pain" />
                    <Picker.Item label="cramps" value="cramps" />
                </Picker>
                <View style={styles.separator} />
                <Picker
                    selectedValue={selectedValue4}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
                >
                    <Picker.Item label="dizziness" value="dizziness" />
                    <Picker.Item label="swollen_legs" value="swollen_legs" />
                    <Picker.Item label="puffy_face_and_eyes" value="puffy_face_and_eyes" />
                    <Picker.Item label="knee_pain" value="knee_pain" />
                    <Picker.Item label="muscle_weakness" value="muscle_weakness" />
                    <Picker.Item label="swelling_joints" value="swelling_joints" />
                    <Picker.Item label="visual_disturbances" value="visual_disturbances" />
                </Picker>
                <View style={styles.separator} />
                <Picker
                    selectedValue={selectedValue5}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)}
                >
                    <Picker.Item label="loss_of_balance" value="loss_of_balance" />
                    <Picker.Item label="loss_of_smell" value="loss_of_smell" />
                    <Picker.Item label="muscle_pain" value="muscle_pain" />
                    <Picker.Item label="red_spots_over_body" value="red_spots_over_body" />
                    <Picker.Item label="watering_from_eyes" value="watering_from_eyes" />
                    <Picker.Item label="lack_of_concentration" value="lack_of_concentration" />
                    <Picker.Item label="stomach_bleeding" value="stomach_bleeding" />
                </Picker>
                <TouchableOpacity onPress={() => {
                    setLoading(true);
                    fetchData();
                }} style={styles.button}>
                    <Text style={styles.text}>{loading ? "Loading" : "Search"}</Text>
                </TouchableOpacity>
            </View>
            <Text>Data: {JSON.stringify(data)}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 200,
        marginBottom: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to make text readable
    },
    dropdown: {
        height: 80,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        marginTop: 40,
        backgroundColor: 'blue',
        height: 40,
        width: 80,
        borderRadius: 30,
        padding: 8
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
});

export default HomePage;
