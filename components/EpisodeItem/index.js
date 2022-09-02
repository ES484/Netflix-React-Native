import { View, Text, Image, Pressable } from "react-native";
import {Feather} from '@expo/vector-icons';
import styles from './style';
import globalStyle from "../../assets/globalStyles/globalStyle";

const EpisodeItem = ({episode, onPress}) =>{
    return(
        <Pressable style={styles.episodeContainer} onPress={()=>onPress(episode)}>
            <View style={globalStyle.flexRow}>
                <View style={globalStyle.flexRow}>
                    <Image style={styles.image} source={{uri: episode.poster}}/>
                    <View>
                        <Text style={[globalStyle.white, globalStyle.mediumFontSize]}>{episode.title}</Text>
                        <Text style={globalStyle.gray}>{episode.duration}</Text>
                    </View>
                </View>
                <Feather name="download" size={20} color="#FFF" />
            </View>
            <Text style={styles.white}>{episode.plot}</Text>
        </Pressable>
    )
}
export default EpisodeItem;