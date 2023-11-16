import { View, Text } from "react-native";

export default function About() {
    return (
        <View>
            <Text>
                The frontend of the mobile application is developed using the React Native framework and TypeScript. It is run via the Expo platform, which utilizes Metro internally to bundle the application. Currently, the application is able to display a list of items on its main screen. Each item also displays a name and an optional expiration date and can individually be deleted. Users can currently add items by manually typing a name and optionally input a date, which prompts a calendar widget to appear on the screen. For development and testing, the application can be initiated on the host machine via the “expo start command”, which will display a QR code on the terminal. A mobile device can then scan the QR code to run the React Native application on the Expo Go runtime.
            </Text>
        </View>
    )
}