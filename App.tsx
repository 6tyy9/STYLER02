import { View, Text, ScrollView } from 'react-native'

import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App