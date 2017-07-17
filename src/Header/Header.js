import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Header extends React.Component{
    render(){
        return (
            <View style={style.Header}>
                <Text style={style.TextStyle}>{this.props.headerText}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    Header:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset:{
                width: 0,
                height: 2
            },
        elevation: 2,
        shadowOpacity: 0.2,
        position: 'relative',
        paddingTop: 20,
        marginBottom: 10
    },
    TextStyle:{
        fontSize: 20,
    }
})