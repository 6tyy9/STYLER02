import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{uri: 'https://www.justahotels.com/wp-content/uploads/2023/09/Harsil-2048x1366.jpg'}}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Harshil</Text>
          <Text style={styles.cardLabel}>Uttrakhand</Text>
          <Text style={styles.cardDescription}>Harshil is a tourist place cum Army cantoanment Area situated on the banks of Alaknanda river. It is Very close to India-China border.Gangotri Dham is also very close to it.</Text>
           <Text style={styles.cardFooter}>520 km from Delhi</Text>
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
      marginVertical: 8,
      color: 'white'
    },
    card: {
      width: 380,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    cardElevated:{
      backgroundColor: 'white',
      elevation: 4,
      shadowOffset: {
        width: 1, 
        height: 1
      },
    },
    cardImage: {
      height: 180,
      marginBottom: 8,
      borderRadius: 6,
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,
    },
    cardTitle: {
      color: '#28932dff',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6,
    },
    cardDescription: {
      color: '#000000',
      fontSize: 12,
      marginBottom: 12,
      marginTop: 6,
    },
    cardFooter: {
      color: '#000000'
    }
})