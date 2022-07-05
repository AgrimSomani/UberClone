import React from 'react';
import {Text, View, Image } from 'react-native'
import styles from './styles';

const FoodCard = props => {
    const {name,source} = props;
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

export default FoodCard;