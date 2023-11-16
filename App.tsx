import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import NewItem from './components/NewItem';
import Item from './components/Item';

export default function App() {

  interface Food {
    name: string;
    exp: string;
    hasExp: boolean;
  };

  const [items, setItems] = useState<Food[]>([]);

  useEffect(() => {
    console.log("testing")
  }, [])

  return (
    <ScrollView
      style={{
        padding: 10,
        backgroundColor: 'whitesmoke'
      }}
    >
      {items.map((item, i) => (
        <View key={i}>
          {Item(item.name, item.exp, item.hasExp, () => (
            setItems(items.filter((_, index) => index !== i))
            ))}
        </View>
      ))}

      {NewItem(items, setItems)}
      {/* <Calendar/> */}
    </ScrollView>
  )
}
