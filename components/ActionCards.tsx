import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWbesite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in React Native 0.71.
          </Text>  
        </View>
        <Image
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
        style={styles.cardImage}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    cardElevated:{},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 180,
    }
})