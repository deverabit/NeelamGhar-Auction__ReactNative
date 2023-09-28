import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const IMAGES = [
  { key: '1', source: require('./../../assets/maxim-hopman-Hin-rzhOdWs-unsplash.jpg') },
  { key: '2', source: require('./../../assets/daniel-korpai-hbTKIbuMmBI-unsplash.jpg') },
  { key: '3', source: require('../../assets/iphone.jpg') },

];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null)
  
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        ref={scrollRef}
      >
        {IMAGES.map((item, index) => (
          <Image
            key={item.key}
            source={item.source}
            style={styles.image}
          />
        ))}
      </ScrollView>
     {/* // <Text style={styles.text}>{`Image ${currentIndex + 1} of ${IMAGES.length}`}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: 350,
    height: 220,
    borderRadius:50,
    marginRight:6
  },
  text: {
    marginTop: 6,
    fontSize: 18,
  },
});

export default ImageCarousel;
