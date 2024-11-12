// SearchBar.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { searchBarStyles } from './searchBarStyles';

const SearchBar: React.FC = () => {
    return (
        <View style={searchBarStyles.searchContainer}>
            {/* Ícone de mensagem à esquerda */}
            <TouchableOpacity style={searchBarStyles.mailIcon}>
                <Ionicons name="mail-outline" size={24} color="black" />
            </TouchableOpacity>

            {/* Barra de pesquisa com o ícone da câmera */}
            <View style={searchBarStyles.searchBar}>
                <TextInput style={searchBarStyles.input} placeholder="Pesquisar" />
                <TouchableOpacity style={searchBarStyles.iconTransparent}>
                    <Ionicons name="camera" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Ícone de coração à direita */}
            <TouchableOpacity style={searchBarStyles.heartIcon}>
                <FontAwesome name="heart" size={20} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;
