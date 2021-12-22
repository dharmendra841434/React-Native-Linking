import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CustumBtn = (props) => {
    return (
        <TouchableOpacity style={{ ...props.styles, ...styles.btn }} onPress={props.onPress}>
            <Text style={{ color: props.color, fontWeight: 'bold' }}>{props.title}</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5

    }
})


export default CustumBtn;
