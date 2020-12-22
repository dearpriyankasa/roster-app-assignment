import * as React from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './listComponent.styles';

const FlightItemComponent = ({ item }: any) => {
    const displayRosterDetails = () =>
        Alert.alert(
        "Roster Details are:",
        ` Flight Number: ${item.Flightnr} \n Date: ${item.Date} 
        \n Departure: ${item.Departure} \n Destination: ${item.Destination} 
        \n Departure Time: ${item.Time_Depart} \n Arrival Time: ${item.Time_Arrive} 
        \n Duty: ${item.DutyCode}`,
        [
            { text: "OK" }
        ],
        { cancelable: false }
    );

    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={displayRosterDetails}>
            <View style={styles.iconAlign}>
                <FontAwesome name="plane" size={56} color="black" />
                <Text style={styles.title}>{item.Departure} - {item.Destination}</Text>
            </View>
            <View style={styles.time}>
                <Text style={styles.timeText}>{item.Time_Depart} - {item.Time_Arrive}</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
}

export const FlightItem = React.memo(FlightItemComponent);