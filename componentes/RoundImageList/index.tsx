// RoundImageList.tsx
import React from 'react';
import { View, Image, Text } from 'react-native';
import { roundImageListStyles } from './roundImageListStyles';

const roundImages = [
    { id: '1', src: require('../../assets/L1.jpeg'), label: 'Feminino' },
    { id: '2', src: require('../../assets/L2.jpeg'), label: 'Curvas' },
    { id: '3', src: require('../../assets/L3.jpeg'), label: 'Infantil' },
    { id: '4', src: require('../../assets/L4.jpeg'), label: 'Masculina' },
    { id: '5', src: require('../../assets/L5.jpeg'), label: 'Esportiva' },
    { id: '7', src: require('../../assets/L7.jpeg'), label: 'Casa e Decoração' },
    { id: '8', src: require('../../assets/L8.jpeg'), label: 'Beleza e Saúde' },
    { id: '10', src: require('../../assets/L10.jpeg'), label: 'Calçados' },
];

const RoundImageList: React.FC = () => {
    return (
        <View style={roundImageListStyles.roundImageContainer}>
            {roundImages.map((item) => (
                <View key={item.id} style={{ alignItems: 'center' }}>
                    <Image source={item.src} style={roundImageListStyles.roundImage} />
                    <Text style={roundImageListStyles.imageLabel}>{item.label}</Text>
                </View>
            ))}
        </View>
    );
};

export default RoundImageList;
