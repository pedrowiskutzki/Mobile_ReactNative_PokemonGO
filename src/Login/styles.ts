import { ImageBackground, Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1 ,
    },
    imageBackground:{
    resizeMode: "cover",
    width:"100%",
    height:"100%",
    },
    image: {
        width: 330, 
        height: 120,
        marginHorizontal:35,
        marginTop: 90,
    },
    button: {
        backgroundColor:'#3DD94C',
        padding: 20,
        paddingVertical:10,
        paddingHorizontal:13,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal:90,
    },
    title: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 90,
        marginHorizontal:70,
        marginBottom:10,
    },
    input: {
        backgroundColor:'rgba(0,0,0,0)',
        color: '#fff',
        fontSize: 16,
        padding: 10,
        paddingHorizontal:15,
        marginHorizontal:70,
        marginTop: 10,
        borderWidth:2,
        borderColor: '#fff',
    },
    text:{
        alignSelf:"center",
        marginTop: 15,
        color: '#3DD94C'
    },
    textButton:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    iconExit:{
        width: 60, 
        height: 60,
        marginHorizontal:175,
        marginTop: 20,
    },
    
})