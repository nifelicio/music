import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";


export default function MusicItem({
    music,
    onPlayPause,
    IsPlaying,
    navigation
}) {
    return (
        <View style={styles.musicItem}>
            <Image 
            source={{ uri: `http://10.0.2.2:3000/assets/${music.album_image}` }}
            style={styles.albumImage} 
            />

            <View style={styles.musicInfo}>
                <TouchableOpacity onpress={() => { }}>
                    <View>
                        <Text style={IsPlaying ? styles.playingTitle : styles.musicTitle}>
                            {music.title}
                        </Text>
                        <Text style={styles.musicGroup}>{music.group}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onpress={onPlayPause}>
                    <FontAwesome
                        name={IsPlaying ? "pause" : "play"}
                        color="#fff"
                        size={16}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}