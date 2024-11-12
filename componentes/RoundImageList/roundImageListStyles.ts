// styles/roundImageListStyles.ts
import { StyleSheet } from 'react-native';

export const roundImageListStyles = StyleSheet.create({
    roundImageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: '#f0f0f0',
    },
    roundImage: {
        width: 80,
        height: 80,
        borderRadius: 30,
        margin: 5,
    },
    imageLabel: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 7,
    },
});
