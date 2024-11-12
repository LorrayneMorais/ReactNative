// App.tsx
import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './componentes/SearchBar';
import { Carousel } from './componentes/Carroussel';
import RoundImageList from './componentes/RoundImageList';
import OffersSection from './componentes/OffersSection';
import TrendsSection from './componentes/TrendsSection';
import { styles } from './styles1';

const App: React.FC = () => {
    return (
        <View>
            <SearchBar />
            <Carousel />
            <RoundImageList />
            <OffersSection />
            <TrendsSection />
        </View>
    );
};

export default App;
