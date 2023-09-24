import React, {useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

export const VideoPlayerScreen = ({videoSource}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: videoSource,
        }}
        controls={true}
        ref={videoRef}
        style={styles.video}
        resizeMode="contain"
        paused={!isPlaying}
        onEnd={() => setIsPlaying(false)}
        onLoad={() => setIsPlaying(true)}
      />
      <TouchableOpacity onPress={togglePlayPause} style={styles.playButton}>
        <View style={styles.playButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12}, {translateY: -12}],
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderColor: 'transparent',
    borderLeftColor: 'white',
  },
});
