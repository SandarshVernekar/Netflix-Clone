import React from 'react';
import {View, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const Player = () => {
  const videoSource =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

  return (
    <View style={styles.trailerContainer}>
      <VideoPlayer
        source={{uri: videoSource}}
        disableBack={true}
        toggleResizeModeOnFullscreen={false}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trailerContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default Player;
