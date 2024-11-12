// styles/searchBarStyles.ts
import { StyleSheet } from 'react-native';

export const searchBarStyles = StyleSheet.create({
    // Container barra de pesquisa e os ícones
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 40,
        marginBottom: 10,
        backgroundColor: '#FFFFFF1A',
    },

    // Estilo do ícone de mensagem
    mailIcon: {
        marginRight: 10,
    },

    // Estilo da barra de pesquisa
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 5,
        flex: 1,
        borderRadius: 5,
    },

    // Estilo do campo de texto
    input: {
        flex: 1,
        marginLeft: 5,
    },

    // Estilo os ícones dentro da barra de pesquisa
    iconTransparent: {
        padding: 5,
    },

    // Estilo para o ícone de coração
    heartIcon: {
        marginLeft: 10,
    },
});
