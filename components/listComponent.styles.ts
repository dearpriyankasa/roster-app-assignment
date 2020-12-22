import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16
    },
    item: {
      padding: 10,
      borderBottomColor: '#9d9694',
      borderBottomWidth: 1,
    },
    header: {
      fontSize: 24,
      backgroundColor: "#e7e4e3",
      borderBottomColor: '#9d9694',
      borderBottomWidth: 1,
    },
    headerText: {
      fontSize: 24,
    },
    iconAlign: {
      display: 'flex',
      flexDirection: 'row',
    },
    layoverAlign: {
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      fontSize: 24,
      marginLeft: 20
    },
    time: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: 'flex-end',
    },
    timeText: {
      fontSize: 20,
      color: 'red',
    },
    titleLayover: {
      display: 'flex',
      fontSize: 20,
      marginLeft: 20,
      color: 'grey'
    },
});