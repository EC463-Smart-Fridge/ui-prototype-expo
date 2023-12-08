import { Button, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from "react";

export default function Scan() {
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef(null);

    const pickImage = async () => {
        // Existing image picker logic
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            setImage(photo.uri);
        }
    };

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    if (!permission?.granted) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <Button title="Grant Permission" onPress={() => requestPermission()} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={cameraRef} type={type}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text>Flip Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text>Take Picture</Text>
                    </TouchableOpacity>
                </View>
            </Camera>

            {image && <Image source={{ uri: image }} style={styles.previewImage} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        width: '100%',
        height: '70%' // Adjust as needed
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around'
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    previewImage: {
        width: 200,
        height: 200
    }
});