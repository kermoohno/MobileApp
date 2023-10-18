import React from "react";
import { View, Text, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/Header';
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import { styles } from "./styles";

const Settings = () => {
    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }
    return(
        <SafeAreaView style={{flex: 1}}>
        <Header title="Settings"/>
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Presonal Information</Text>
            <EditableBox label="Name" value="User name" editable="false"/>
            <EditableBox label="Email" value="User email" editable="true"/>
            <Text style={styles.sectionTitle}>Help Center</Text>
            <ListItem onPress={onItemPress} style={styles.item} title="FAQ"/>
            <ListItem onPress={onItemPress} style={styles.item} title="Contact Us"/>
            <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms"/>
        </View>
        </SafeAreaView>
    )
}

export default React.memo(Settings)