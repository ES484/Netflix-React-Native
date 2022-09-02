import {Text, FlatList, Image, Pressable} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../assets/globalStyles/globalStyle';
const HomeScreen = ({category}) =>{
    const navigation = useNavigation();
    const onPressCategory = (movie) =>{
        navigation.navigate('MovieDetailsScreen', {id: movie.id})
    }
    return (
        <>
        <Text style={[styles.title,globalStyle.white,globalStyle.mediumFontSize]}>{category.title}</Text>
        <FlatList
            data={category.movies}
            renderItem={({item})=>(
                <Pressable onPress={()=>{onPressCategory(item)}}>
                    <Image style={[styles.image, globalStyle.borderRadius10]} source={{uri: item.poster}} />
                </Pressable>
            )}
            keyExtractor={item=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
        </>
    )
}
export default HomeScreen;