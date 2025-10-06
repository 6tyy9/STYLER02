import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts=[
    {
        uid:1,
        name:'Shivanshu Rawat',
        status:'Available',
        imageUrl:'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
        uid:2,
        name:'User2',
        status:'Available',
        imageUrl:'https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294775_640.png'
    },
    {
        uid:3,
        name:'User3',
        status:'Available',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivBOjSZsusiTyWCGhwNZAnHrgxlceMmLhQA&s'
    },
    {
        uid:4,
        name:'User4',
        status:'Available',
        imageUrl:'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622034.jpg?semt=ais_hybrid&w=740&q=80'
    }
 ];
    return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#f3dff5'
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60 /2,
        marginRight:14,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus:{
        fontSize:12,
    },
})