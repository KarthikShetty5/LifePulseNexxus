import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';


const SignUp = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSignUp = () => {
        const userData = {
            name: username,
            email: email,
            mobile: mobile,
            password: password
        }
        axios.post('http:// 192.168.193.81:5001/register', userData).then(res => console.log(res.data)).catch(e => console.log(e));
    };

    return (
        <ImageBackground
            source={require('../assets/medicalbg.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.title}>SignUp</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    secureTextEntry
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    secureTextEntry
                    value={mobile}
                    onChangeText={setMobile}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Text style={styles.goBackText}>Already have an Account ?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
    input: {
        width: 300,
        height: 40,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
        marginBottom: 20,
        color: '#ffffff',
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    goBack: {
        marginTop: 20,
    },
    goBackText: {
        fontSize: 16,
        paddingLeft: 90
    },
});

export default SignUp;
