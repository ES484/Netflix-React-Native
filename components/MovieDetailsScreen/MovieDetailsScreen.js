import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import { useState } from 'react';
import movie from '../../assets/data/movie';
import { MaterialIcons, Entypo, Feather, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import styles from './style';
import EpisodeItem from '../EpisodeItem';
import {Picker} from '@react-native-picker/picker';
import VideoPlayer from '../VideoPlayer';
import globalStyle from '../../assets/globalStyles/globalStyle';

const MovieDetailsScreen = () =>{
    const season = movie.seasons.items[0]
    const [currentSeason, setSeason] = useState(season);
    const [currentEpisode, setEpisode] = useState(season.episodes.items[0]);
    return (
        <ScrollView style={styles.container}>
            <VideoPlayer episode={currentEpisode}/>
            <Text style={[styles.title, globalStyle.white]}>{movie.title}</Text>
            <View style={[styles.info, globalStyle.flexRow]}>
                <Text style={styles.match}>99% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                    <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.seasonsNo}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={36} color="#FFF" />
            </View>
            <Pressable style={styles.playButton}>
                <Text style={styles.playButtonText}>
                    <Entypo name="controller-play" size={16} color="black" />
                    Play
                    </Text>
            </Pressable>
            <Pressable style={[globalStyle.flexRow, styles.downloadButton]}>
                <Text style={[styles.downloadButtonText, globalStyle.white]}>
                    <Feather name="download" size={16} color="#FFF" />
                    {" "}
                    Download
                </Text>
            </Pressable>
            <Text style={[styles.plot, globalStyle.white]}>{movie.plot}</Text>
            <Text style={styles.cast}>Cast: {movie.cast}</Text>
            <Text style={styles.cast}>Creator: {movie.creator}</Text>
            <View style={[styles.icons, globalStyle.flexRow]}>
                <View>
                    <AntDesign name="plus" size={24} color="#FFF" />
                    <Text style={styles.iconsText}>My List</Text>
                </View>
                <View>
                    <Feather name="thumbs-up" size={24} color="#FFF" />
                    <Text style={styles.iconsText}></Text>
                </View>
                <View>
                <FontAwesome name="send-o" size={24} color="#FFF" />
                    <Text style={styles.iconsText}></Text>
                </View>
            </View> 
            <Picker
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) =>
                    setSeason(movie.seasons.items[itemIndex])
                }
                style={[styles.seasonPicker, globalStyle.white]}
                dropdownIconColor={'#FFF'}
                >
                {movie.seasons.items.map((item)=><Picker.Item key={item.id} label={item.name} value={item.name} />)}
            </Picker>           
            {currentSeason.episodes.items.map((item)=><EpisodeItem key={item.id} episode={item} onPress={(episode)=>{setEpisode(episode)}}/>)}
        </ScrollView>
    )
}
export default MovieDetailsScreen;