import { View, Text, TextInput, Image, StatusBar, ScrollView, } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import healthBar from "../assets/DexImage/healthBar.png"
import buttonExit from '../assets/buttonExit.png';
import logoSearch from "../assets/logoSearch.png"
import vaporeon from "../assets/DexImage/Pokemons/Vaporeon.png"
import arcanine from "../assets/DexImage/Pokemons/Arcanine.png"
import roserade from "../assets/DexImage/Pokemons/Roserade.png"
import samurottShiny from "../assets/DexImage/Pokemons/SamurottShiny.png"
import flareon from "../assets/DexImage/Pokemons/Flareon.png"
import snorlax from "../assets/DexImage/Pokemons/Snorlax.png"
import jolteon from "../assets/DexImage/Pokemons/Jolteon.png"
import herecross from "../assets/DexImage/Pokemons/Heracross.png"
import ursasing from "../assets/DexImage/Pokemons/Ursaring.png"
import darmantian from "../assets/DexImage/Pokemons/Darmantian.png"
import venusaur from "../assets/DexImage/Pokemons/Venusaur.png"
import machamp from "../assets/DexImage/Pokemons/Machamp.png"

export const Dex = () => {
    return (
        <View style={styles.containerBackground}>
            <ScrollView>
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="black"
                />
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={{ color: '#768988' }}>TAGS </Text>
                        <Text style={{ color: '#2a3b3a' }}>POKÉMON </Text>
                        <Text style={{ color: '#768988' }}>OVOS </Text>
                    </View>
                    <View style={styles.titleCont}>
                        <Text style={{ fontSize: 12, color: '#2a3b3a' }}>264/300</Text>
                        <Text style={{ fontSize: 12, color: '#768988' }}>12/12</Text>
                    </View>
                    <TextInput style={styles.input} placeholder="Procurar" placeholderTextColor="#2a3b3a"
                        underlineColorAndroid="transparent"
                    />
                    <MaterialIcons
                        style={styles.iconePesquisar}
                        name="search"
                        color={"#555"}
                        size={25}
                    />
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2476</Text></Text>
                            <Image source={vaporeon} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Vaporeon</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2465</Text></Text>
                            <Image source={arcanine} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Arcanine</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2419</Text></Text>
                            <Image source={roserade} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Roserade</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2370</Text></Text>
                            <Image source={samurottShiny} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Samurott</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2321</Text></Text>
                            <Image source={flareon} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Flareon</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2286</Text></Text>
                            <Image source={snorlax} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Snorlax</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2156</Text></Text>
                            <Image source={jolteon} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Jolteon</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2123</Text></Text>
                            <Image source={herecross} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Heracross</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2115</Text></Text>
                            <Image source={ursasing} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Ursaring</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2034</Text></Text>
                            <Image source={darmantian} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Darmantian</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>1972</Text></Text>
                            <Image source={venusaur} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Venusaur</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>1889</Text></Text>
                            <Image source={machamp} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Machamp</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2476</Text></Text>
                            <Image source={vaporeon} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Vaporeon</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2465</Text></Text>
                            <Image source={arcanine} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Arcanine</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2419</Text></Text>
                            <Image source={roserade} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Roserade</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2370</Text></Text>
                            <Image source={samurottShiny} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Samurott</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2321</Text></Text>
                            <Image source={flareon} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Flareon</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2286</Text></Text>
                            <Image source={snorlax} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Snorlax</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2156</Text></Text>
                            <Image source={jolteon} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Jolteon</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2123</Text></Text>
                            <Image source={herecross} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Heracross</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2115</Text></Text>
                            <Image source={ursasing} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Ursaring</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View> 
                    <View style={styles.containerDex}>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>2034</Text></Text>
                            <Image source={darmantian} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Darmantian</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>1972</Text></Text>
                            <Image source={venusaur} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Venusaur</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontSize: 12, color: '#2a3b3a' }}>PC <Text style={{ fontSize: 22, fontWeight: "bold" }}>1889</Text></Text>
                            <Image source={machamp} style={styles.image} />
                            <Text style={{ color: '#2a3b3a' }}>Machamp</Text>
                            <Image source={healthBar} style={styles.healthImage} />
                        </View>
                    </View>         
                </View>
            </ScrollView >
            <View>
            <Image source={buttonExit} style={styles.iconExit} />
            </View>
        </View >

    );
}