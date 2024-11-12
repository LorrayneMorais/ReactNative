// styles/offersSectionStyles.ts
import { StyleSheet } from 'react-native';

export const offersSectionStyles = StyleSheet.create({
    offersContainer: {
        paddingHorizontal: 20,
    },
    offersTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    offersImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    offerItemContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    offerImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    offerTextContainer: {
        marginTop: 5,
    },
    offerPrice: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
