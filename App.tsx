import { View, Text, ScrollView } from 'react-native'

import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ContactList/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App