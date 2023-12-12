import React from 'react'
import { Text, View, Pressable , StyleSheet} from "react-native"

// interface Food {
//     name: string;
//     exp: string;
//     hasExp: boolean;
//     category: string;
//     calories: number;
//     quantity: number;
// };
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

{/* const Item = ({name, exp, hasExp, handler}: Props) => {
    return (
        <View 
            style={{
                width: '100%',
                height: 64,
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignContent: 'center',
                // paddingVertical: 'auto',
                paddingLeft: 10,
                marginBottom: 10
            }}
        >
            <Text
                style={{
                    // height: '100%',
                    textAlignVertical: 'center',
                    marginVertical: 'auto',
                    fontSize: 20,
                }}
            >
                {name}
            </Text>
            <View style={{flexGrow: 1,}}></View>
            <Text
                style={{
                    height: '100%',
                    textAlignVertical: 'center',
                    fontSize: 20,
                    paddingRight: 2,
                    marginVertical: 'auto',
                }}
            >
                {hasExp ? exp : ''}
            </Text>
            <Pressable 
                onPress={handler}
                style={{
                    width: 50,
                    // height: '100%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    alignItems: 'center'
                    
                }} 
            >
                <Text
                    style={{
                        textAlignVertical: 'center',
                        // height: '100%',
                        marginVertical: 'auto',
                    }}
                >
                    X
                </Text>
            </Pressable>
        </View>
    )
}

export default Item; */}