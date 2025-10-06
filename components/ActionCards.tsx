import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            This release includes Hermes 0.11.0, a new version of the JavaScript engine with improved performance, better debugging capabilities, and support for the latest ECMAScript features. It also brings TypeScript by default for new projects, continued progress on the new architecture (Fabric and TurboModules), and a host of developer experience improvements across platforms.
          </Text>
        </View>
        <View style={styles.footerContainer}>
         <TouchableOpacity
          onPress={() =>   openWbesite('https://reactnative.dev/blog/2023/03/13/version-0.71')}>
          <Text style={styles.socialLinks}>Read More</Text>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={() => openWbesite('https://reactnative.dev/blog/2023/03/13/version-0.71')}>
          <Text style={styles.socialLinks}>Follow me!!</Text>
         </TouchableOpacity>
        </View>
      </View>
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
    card: {
      width: 380,
      height: 360,
      borderRadius: 6,  
      marginHorizontal: 16,
      marginVertical: 12,
    },
    cardElevated:{
      backgroundColor: '#94C6F5',
      elevation: 3,
      shadowOffset: {
        width: 1, 
        height: 1
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,
    },
    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '600',
    },
    cardImage: {
        height: 190,        
    },
    bodyContainer: {
      padding: 10,
    },
    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    socialLinks: {
      fontSize: 16,
      color: 'black',
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 30,

    }
})