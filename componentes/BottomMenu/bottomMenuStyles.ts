// bottomMenuStyles.ts
import { StyleSheet } from 'react-native';

export const bottomMenuStyles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',

        paddingHorizontal: 20,
        marginBottom: 10,
    },
    menuItem: {
        alignItems: 'center',
        width: 60,
    },
    menuText: {
        fontSize: 10,
        textAlign: 'center',
    },
    centerImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 50,
    },
    centerImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
});
