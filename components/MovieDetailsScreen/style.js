import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    },
    image: {
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    info: {       
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    match:{
        color: '#00aa00',
        fontSize: 18
    },
    year: {
        color: '#757575',
        fontSize: 18
    },
    ageContainer: {
        backgroundColor: '#e6e119',
        borderRadius: 5,
        paddingHorizontal: 3,
        paddingVertical: 2
    },
    age: {
        borderRadius: 10,
        fontSize: 18
    },
    seasonsNo: {
        color: '#757575',
        fontSize: 18
    },
    playButton: {
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    playButtonText: {
        fontSize: 16,
        fontWeight: '600'
    },
    downloadButton: {
        backgroundColor: "#2b2b2b",
        flexDirection:'column',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    downloadButtonText: {
        fontSize: 16
    },
    downloadIcon: {
        marginRight: 10
    },
    plot: {
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 20,
        padding: 10
    },
    cast: {
        color: '#757575',
        padding: 5
    },
    icons: {
        width: '60%',
        padding: 10
    },
    iconsText: {
        color: '#757575',
        paddingVertical: 5
    },
    seasonPicker: {
        width: 200
    }
});
export default styles;