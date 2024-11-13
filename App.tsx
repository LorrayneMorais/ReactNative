// App.tsx
import React from 'react';
import { View } from 'react-native';
import SearchBar from './componentes/SearchBar';
import { Carousel } from './componentes/Carroussel';
import RoundImageList from './componentes/RoundImageList';
import OffersSection from './componentes/OffersSection';
import TrendsSection from './componentes/TrendsSection';
import BottomMenu from './componentes/BottomMenu/BottomMenu';
import { styles } from './styles';

const App: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            <Carousel />
            <RoundImageList />
            <OffersSection />
            <TrendsSection />
            <BottomMenu />
        </View>
    );
};

export default App;