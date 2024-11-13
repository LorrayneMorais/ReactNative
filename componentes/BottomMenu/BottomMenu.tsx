// BottomMenu.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { bottomMenuStyles } from './bottomMenuStyles';

const BottomMenu: React.FC = () => {
    return (
        <View style={bottomMenuStyles.menuContainer}>
            {/* Ícone Loja */}
            <TouchableOpacity style={bottomMenuStyles.menuItem}>
                <Ionicons name="home-outline" size={24} color="black" />
                <Text style={bottomMenuStyles.menuText}>Loja</Text>
            </TouchableOpacity>

            {/* Ícone Categorias */}
            <TouchableOpacity style={bottomMenuStyles.menuItem}>
                <Ionicons name="search-outline" size={24} color="black" />
                <Text style={bottomMenuStyles.menuText}>Categorias</Text>
            </TouchableOpacity>

            {/* Imagem Central */}
            <View style={bottomMenuStyles.centerImageContainer}>
                <Image source={require('../../assets/tendencias.png')} style={bottomMenuStyles.centerImage} />
            </View>

            {/* Ícone Carrinho */}
            <TouchableOpacity style={bottomMenuStyles.menuItem}>
                <Ionicons name="cart-outline" size={24} color="black" />
                <Text style={bottomMenuStyles.menuText}>Carrinho</Text>
            </TouchableOpacity>

            {/* Ícone Perfil */}
            <TouchableOpacity style={bottomMenuStyles.menuItem}>
                <FontAwesome name="user-o" size={24} color="black" />
                <Text style={bottomMenuStyles.menuText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomMenu;
