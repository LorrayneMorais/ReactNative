// styles/trendsSectionStyles.ts
import { StyleSheet } from 'react-native';

export const trendsSectionStyles = StyleSheet.create({
    trendsContainer: {
        paddingHorizontal: 20,
        marginBottom: 5,
        backgroundColor: '#f0f0f0',
    },
    trendsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    trendsImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    trendItemContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    trendImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    trendLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
});
