import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';


const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const userData = {
            name: username,
            email: "karthikshetty@gmail.com",
            mobile: "9591142542",
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
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('SignUp')} >
                    <Text style={styles.buttonlogin}>Dont have account ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Text style={styles.goBackText}>Back to Welcome Screen</Text>
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
    login: {
        paddingLeft: 150,
        paddingTop: 20
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
        fontWeight: 'bold',
        color: '#ffffff',
        textDecorationLine: 'underline',
    },
});

export default Login;
