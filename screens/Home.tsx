import { useState, useEffect } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import Item from "../components/Item";
import NewItem from "../components/NewItem";

export default function Home() {
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
        <StatusBar/>
        {items.map((item, i) => (
        <View key={i}>
            {Item(item.name, item.exp, item.hasExp, () => (
            setItems(items.filter((_, index) => index !== i))
            ))}
        </View>
        ))}

        {NewItem(items, setItems)}
    </ScrollView>
    )
}