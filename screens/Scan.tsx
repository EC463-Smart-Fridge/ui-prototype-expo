import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanType, setScanType] = useState("barcode")
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
      setScanned(true);
        setBarcodeData(`Bar code with type ${type} and data ${data} has been scanned!`);
      setTimeout(() => setScanned(false), 3000); // 3 seconds delay
    }
    // console.log("scanning")
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        <View style={styles.scanTypes}>
            <Pressable 
                onPress={() => setScanType("barcode")}
                style={[styles.scanType, scanType == "barcode" ?  {backgroundColor: 'skyblue'} : {}]}>
                <Text>Barcode</Text>
            </Pressable>
            <Pressable 
                onPress={() => setScanType("image")}
                style={[styles.scanType, scanType == "image" ? {backgroundColor: 'skyblue'} : {}]}>
                <Text>Image</Text>
            </Pressable>
            <Pressable 
                onPress={() => setScanType("receipt")}
                style={[styles.scanType, scanType == "receipt" ? {backgroundColor: 'skyblue'} : {}]}>
                <Text>Receipt</Text>
            </Pressable>
        </View>
        {scanType == "barcode" && <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.scanner}
        />}
      {/* <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.scanner}
      /> */}
      <View style={styles.outputWrapper}>
            <Text style={styles.barcodeOutput}>{barcodeData}</Text>
      </View>
      {/* <View>
            <Pressable 
                onPress={() => setBarcodeData(null)}
                style={styles.scanType}>
                <Text>Clear</Text>
            </Pressable>

      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scanner: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scanTypes: {
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  scanType:{
    width: '30%',
    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
        width: 8,
        height: 8,
    },
    elevation: 5,

    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    textAlignVertical: 'center',
    height: '100%'
  },
  barcodeOutput: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: {
            width: 8,
            height: 8,
        },
        elevation: 5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
  },
  outputWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
  },
});