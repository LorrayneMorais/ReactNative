// styles/carouselStyles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const carouselStyles = StyleSheet.create({
    carouselContainer: {
        height: 160,
        alignItems: 'center',
        marginBottom: 10,
    },
    carouselImageContainer: {
        width: width,
        alignItems: 'center',
    },
    carouselImage: {
        height: 160,
        width: width * 0.9,
    },
});
