import React from "react";
import { View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Title } from 'react-native-paper';
import styles from './styles';

const Secao = ({ hasTopBorder }) => {
    return (
        <View style={styles.container}>
            {hasTopBorder && <View style={styles.borderTop} />}
            <Title style={styles.secaoTitle}>Nome da Seção</Title>

            <FlatList
                style={styles.lista}
                horizontal
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                        <ImageBackground data
                            style={[styles.capa, { marginRight: 10, marginLeft: index == 0 ? 20 : 0 }]}
                            source={{
                                uri: 'https://i.imgur.com/EJyDFeY.jpg'
                            }}>
                            <Image resizeMode="contain" style={styles.logo} source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />
                        </ImageBackground>

                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default Secao;