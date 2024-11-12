// OffersSection.tsx
import React from 'react';
import { View, Image, Text } from 'react-native';
import { offersSectionStyles } from './offersSectionStyles';

const OffersSection: React.FC = () => {
    return (
        <View style={offersSectionStyles.offersContainer}>
            <Text style={offersSectionStyles.offersTitle}>Super Ofertas</Text>
            <View style={offersSectionStyles.offersImageContainer}>
                <View style={offersSectionStyles.offerItemContainer}>
                    <Image source={require('../../assets/S1.jpg')} style={offersSectionStyles.offerImage} />
                    <View style={offersSectionStyles.offerTextContainer}>
                        <Text style={offersSectionStyles.offerPrice}>R$ 49,99</Text>
                    </View>
                </View>
                <View style={offersSectionStyles.offerItemContainer}>
                    <Image source={require('../../assets/S2.jpg')} style={offersSectionStyles.offerImage} />
                    <View style={offersSectionStyles.offerTextContainer}>
                        <Text style={offersSectionStyles.offerPrice}>R$ 99,99</Text>
                    </View>
                </View>
                <View style={offersSectionStyles.offerItemContainer}>
                    <Image source={require('../../assets/S3.jpg')} style={offersSectionStyles.offerImage} />
                    <View style={offersSectionStyles.offerTextContainer}>
                        <Text style={offersSectionStyles.offerPrice}>R$ 79,99</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default OffersSection;
