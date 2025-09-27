import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cadElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cadElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cadElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cadElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cadElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cadElevated]}>
            <Text>🤡</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white'
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cadElevated:{
        backgroundColor:'lightblue',
        elevation:4,
        shadowOffset:{width:1, height:1},
        shadowColor:'#333',
    },
    container:{
        padding:8
    }
})