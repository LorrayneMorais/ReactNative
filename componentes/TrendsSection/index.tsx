// TrendsSection.tsx
import React from 'react';
import { View, Image, Text } from 'react-native';
import { trendsSectionStyles } from './trendsSectionStyles';

const TrendsSection: React.FC = () => {
    return (
        <View style={trendsSectionStyles.trendsContainer}>
            <Text style={trendsSectionStyles.trendsTitle}>Top Tendências</Text>
            <View style={trendsSectionStyles.trendsImageContainer}>
                <View style={trendsSectionStyles.trendItemContainer}>
                    <Image source={require('../../assets/T1.jpg')} style={trendsSectionStyles.trendImage} />
                </View>
                <View style={trendsSectionStyles.trendItemContainer}>
                    <Image source={require('../../assets/T2.jpg')} style={trendsSectionStyles.trendImage} />
                </View>
                <View style={trendsSectionStyles.trendItemContainer}>
                    <Image source={require('../../assets/T3.jpeg')} style={trendsSectionStyles.trendImage} />
                </View>
            </View>
        </View>
    );
};

export default TrendsSection;
