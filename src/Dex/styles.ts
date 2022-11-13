import { CameraRoll, ImageBackground, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        backgroundColor: 'red',
    },
    container: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginRight: 12,
        paddingBottom: 500,
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 40,
        marginTop: 30,
    },
    titleCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 163,
        marginTop: 5,
        marginRight:40,
    },
    input: {
        backgroundColor: "#252b53",
        color: '#fff',
        borderRadius: 40,
        fontSize: 16,
        padding: 10,
        paddingHorizontal: 140,
        marginHorizontal: 20,
        marginTop: 30,

    },
    card:{
        backgroundColor:'green',
        paddingVertical:20,
        paddingHorizontal:20,
        marginTop:10,
        marginLeft:0,
        marginRight:250,
    },
    image:{
        width:100,
        height:100
    },



})