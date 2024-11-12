import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 40,
        marginTop: 40,
    },

    logo: {
        width: 150,
        height: 40,
    },

    header: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#229a00',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '90%',
    },

    containercoupon: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    coupon: {
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        padding: 12,
        borderRadius: 8,
        fontWeight: 'bold',
        width: '100%',
        fontSize: 14,
        color: '#ff1d00',
    },

    inputLabel: {
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
        alignSelf: 'flex-start',
        width: '90%',
    },

    input: {
        width: '100%',
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    loginButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    forgotPassword: {
        marginTop: 10,
        color: '#000',
        fontSize: 10,
        textAlign: 'center',
        width: '100%',
    },

    signupButton: {
        marginTop: 20,
    },

    signupText: {
        color: '#000',
        fontSize: 10,
        textAlign: 'center',
        width: '100%',
    },

    socialLoginContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },

    socialButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f4f4f4',
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    socialButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    socialIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },

    socialButtonText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },

    protectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    protectionText: {
        fontSize: 12,
        color: '#777',
        marginLeft: 5,
    },

    // Estilo para o botão de seleção de país
    countryButton: {
        width: '50%',
        padding: 15,
        backgroundColor: '#f4f4f4',
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },

    countryButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    countryIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },

    countryButtonText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default styles;