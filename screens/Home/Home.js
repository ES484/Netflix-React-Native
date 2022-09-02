import {View, StyleSheet, FlatList} from 'react-native';
import categories from '../../assets/data/categories';
import HomeScreen from '../../components/HomeScreen/HomeScreen';
import styles from './style';
const Home = () =>{
    
    return(
        <View style={styles.conatiner}>
            <FlatList
            data={categories.items}
            renderItem={({item})=>( <HomeScreen category={item} />)}
            />
        </View>
    )
}
export default Home;