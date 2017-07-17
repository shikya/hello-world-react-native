import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Album } from './Album'

export class AlbumList extends React.Component{
    render(){
        return (
            <View>
                <Album></Album>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AlbumList:{
    }
});