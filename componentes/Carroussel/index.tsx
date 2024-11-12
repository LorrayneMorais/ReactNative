// Carousel.tsx
import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';
import { carouselStyles } from './carrousselStyles';

const carouselImages = [
    { id: '1', src: require('../../assets/1.jpg') },
    { id: '2', src: require('../../assets/2.jpeg') },
    { id: '3', src: require('../../assets/3.jpg') },
    { id: '4', src: require('../../assets/4.jpg') },
];

const { width } = Dimensions.get('window');

export const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const onScroll = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <FlatList
            ref={flatListRef}
            data={carouselImages}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={onScroll}
            renderItem={({ item }) => (
                <View style={carouselStyles.carouselImageContainer}>
                    <Image source={item.src} style={carouselStyles.carouselImage} />
                </View>
            )}
            contentContainerStyle={carouselStyles.carouselContainer}
        />
    );
};


