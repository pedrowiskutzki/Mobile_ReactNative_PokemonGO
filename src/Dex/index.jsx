import { View, TouchableOpacity, Text, TextInput, Image, FlatList, StatusBar, Button } from "react-native";
import { styles } from "./styles";
import vaporeon from "../assets/Dex/vaporeon.png"

export const Dex = () => {
    return (
        <View style={styles.containerBackground}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="black"
            />
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>TAGS </Text>
                    <Text>POKÉMON </Text>
                    <Text>OVOS </Text>
                </View>
                <View style={styles.titleCont}>
                     <Text>264/300</Text>
                    <Text>12/12</Text> 
                </View>
                <TextInput style={styles.input} placeholder="Procurar" placeholderTextColor="#22df11" />
                <View style={styles.card}>
                <Text>PC <Text>2476</Text></Text>
                <Image source={vaporeon} style={styles.image} />
                <Text>Vaporeon</Text>
                </View>
                
            </View>
        </View >

    );
}