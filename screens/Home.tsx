import { useState, useEffect } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import Item from "../components/Item";
import NewItem from "../components/NewItem";
// import {API, graphqlOperation} from 'aws-amplify';
// import { generateClient } from 'aws-amplify/api';
// import { getItemsByUser, getUser, listUsers, getItem, listItems } from "../src/graphql/queries";
// import { Amplify } from "aws-amplify";
// import  awsmobile from "../src/aws-exports";
export default function Home() {
    interface Food {
        name: string;
        exp: string;
        hasExp: boolean;
      };
    
    const [items, setItems] = useState<Food[]>([]);
    // const client = generateClient();
    // Amplify.configure(awsmobile);

    // const test = async () => {
    //     const result = await client.graphql({
    //         query: getItemsByUser,
    //         variables: {
    //             pk:'UID1',            
    //         }
    //     })
    //     console.log(result);
    // }

    useEffect(() => {
        console.log("testing")
        // test();
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