import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        return (
            <View>
                <Text>LOGIN SCREEN</Text>
                <TextInput
                    type='Outlined'
                    label="Username"
                    onChangeText={(value) => this.setState({ username: value })}
                />
                <TextInput
                    type='Outlined'
                    label="Password"
                    onChangeText={(value) => this.setState({ password: value })}
                    secureTextEntry
                />
                <Button
                    mode="contained"
                    onPress={() => this.props.navigation.navigate('drawer-nav')}
                >LOGIN</Button>
            </View>
        );
    }
}



export default LoginScreen;