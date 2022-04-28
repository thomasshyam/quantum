import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Screen({ children }) {
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#FFA50066','#FFA50066','#FFA50055','#FFA50044','#FFFFFF']}
          start={{ x:0.7, y: 0.1, }}
          end={{ x: 1.4, y: 1.4 }}
        style={styles.linearContainer}
      />
      {children}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      opacity:0.9,
      height:'100%',
      
  },
  linearContainer: {
    height: 350,
    flex:0.9,
    opacity:0.3,
    width: '100%',
    // padding: 50,
  },
})

export default Screen;