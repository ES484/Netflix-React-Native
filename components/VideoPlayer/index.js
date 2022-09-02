import { StyleSheet, Text, View } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import styles from './style';


const VideoPlayer =({episode})=> {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    useEffect(()=>{
        if(!video){return;}
        else{
            (async ()=>{
                await video?.current?.unloadAsync();
                await video?.current?.loadAsync(
                    {uri: episode.video},
                    {},
                    false
                );
            })();
        }
    },[episode])
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}
export default VideoPlayer;
