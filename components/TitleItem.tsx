import * as React from 'react';
import {
  Text,
  View,
} from "react-native";
import { styles } from './listComponent.styles';

export const TitleItem = ({ date }: any) => {
    let newDate = new Date(date.toString());
    let monthNames = ["Jan","Feb","Mar","Apr",
                        "May","Jun","Jul","Aug",
                        "Sep", "Oct","Nov","Dec"];
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];                     
    let day = newDate.getDate();
    let weekDay = dayNames[newDate.getDay()];
    let monthName = monthNames[newDate.getMonth()];
    let year = newDate.getFullYear();
  
    return (
      <View style={styles.header}>
        {!Number.isNaN(day) ? (
            <Text style={styles.headerText}>{`${weekDay} ${day} ${monthName}. ${year}`}</Text>
        ) : (
            <Text style={styles.headerText}>Date not available</Text>
        )}
      </View>
    )
}