import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        // Ação de login (validar email)
        console.log('Email:', email);
    };

    const handleGoogleLogin = () => {
        console.log('Login com Google');
    };

    const handleFacebookLogin = () => {
        console.log('Login com Facebook');
    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
            <Text style={styles.header}>🔒Seus dados estão protegidos.</Text>

            <View style={styles.containercoupon}>
                <Text style={styles.coupon}>🎟 R$12 OFF na sua primeira compra</Text>
            </View>

            <Text style={styles.inputLabel}>E-mail ou número de telefone</Text>
            <TextInput
                style={styles.input}
                placeholder=""  // Não exibe nada dentro da caixa
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>CONTINUAR</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPassword}>OU</Text>

            {/* Botões de login com Google e Facebook */}
            <View style={styles.socialLoginContainer}>
                <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                    <View style={styles.socialButtonContent}>
                        <Image source={require('./assets/logoGoogle.png')} style={styles.socialIcon} />
                        <Text style={styles.socialButtonText}>Entrar com Google</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
                    <View style={styles.socialButtonContent}>
                        <Image source={require('./assets/favicon.png')} style={styles.socialIcon} />
                        <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Botão para selecionar país - ilustração */}
            <TouchableOpacity style={styles.countryButton}>
                <View style={styles.countryButtonContent}>
                    <Image source={require('./assets/locationIcon.png')} style={styles.countryIcon} />
                    <Text style={styles.countryButtonText}>Brasil </Text>
                    <Image source={require('./assets/setaBaixo.png')} style={styles.countryIcon} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;