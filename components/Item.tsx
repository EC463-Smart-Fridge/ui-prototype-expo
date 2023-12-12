import React from 'react'
import { Text, View, Pressable , StyleSheet} from "react-native"
interface Props {
    name: string;
    exp: string;
    hasExp: boolean;
    category: string;
    calories: number;
    quantity: number;
    handler: (item:any)=>void;
}

const Item = ({name, exp, hasExp, category, calories, quantity, handler}: Props) => {
    return (
        <View 
            style={styles.container}
        >
            <View style={styles.info}>                
                <Text style={styles.input}>
                    {name}
                </Text>
                {hasExp && 
                    <Text style={styles.date}>
                        Expires: {exp}
                    </Text>
                }
                {category != '' && 
                    <Text style={styles.category}>
                        Category: {category}
                    </Text>
                }
                {(quantity != 0) && 
                    <Text style={styles.quantity}>
                        Quantity: {quantity}
                    </Text>
                }
                {calories != 0 && 
                    <Text style={styles.calories}>
                        Calories: {calories}
                    </Text>
                }
            </View>
            

            <Pressable 
                onPress={handler}
                style={{width: 50,
                    height: '100%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    alignItems: 'center',
                    paddingVertical: 'auto',
                    marginVertical: 'auto',
                }} 
            >
                <Text
                    style={{
                        textAlignVertical: 'center',
                        marginVertical: 'auto',
                        paddingVertical: 'auto',
                        verticalAlign: 'middle',
                    }}
                >
                    X
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'lightgray',
        opacity: 0.5, 
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginVertical: 2,
    },
    input: {
        height: '100%',
        textAlignVertical: 'center',
        fontSize: 20,
        flexGrow: 1,       
    },
    quantity: {
    },
    date: {
    },
    category: {
   
    },
    calories: {
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 1,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 18,
        marginVertical: 3,
    },
    label: {
        paddingRight: 8,
    }
})

export default Item
