import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  SectionList,
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../get-data/getListofRoster.actions";
import { FlightItem } from './FlightItem';
import { LayoverItem } from "./LayoverItem";
import { TitleItem } from "./TitleItem";
import { styles } from './listComponent.styles';
import _ from "lodash";
import { useNetInfo } from '@react-native-community/netinfo';
import * as SecureStore from 'expo-secure-store';
import LZString from 'lz-string';

function ListComponent() {
  const dispatch = useDispatch();
  const [viewData, setViewData]: any = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const state = useSelector((state: any) => state);
  const netInfo = useNetInfo();

  const getViewType = (data: any) => {
    return _.chain(data)
    .groupBy("Date")
    .map((value: any, key: any) => ({ title: key, data: value }))
    .value()
  }

  const onRefresh = () => {
    setIsFetching(true);
    dispatch(Actions.resetGetListOfRoster());
  }

  const setAsyncStorage = async (data: any) => {
    await SecureStore.setItemAsync('rosterDetails', LZString.compress(JSON.stringify(data)));
  }

  const getAsyncStorage = async () => {
    return SecureStore.getItemAsync('rosterDetails');
  }

  useEffect(() => {
    if (state?.status === 'INIT') {
      dispatch(Actions.getListOfRoster());
    } 
    else if (!netInfo.isConnected) {
      getAsyncStorage().then((item: any) => {
        if (item) {
          dispatch(Actions.getListOfRosterSuccess(LZString.decompress(JSON.parse(item))));
        }
      });
    }
    return () => {
      dispatch(Actions.resetGetListOfRoster());
    }
  }, []);  
  
  useEffect(() => {
    if (state?.status === 'SUCCESS') {
       setIsFetching(false);
       const viewObject = getViewType(state.response);
       setViewData(viewObject);
       setAsyncStorage(state.response);
    }
  }, [state?.status]);   

  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={viewData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (item.DutyCode !== 'LAYOVER' ? <FlightItem item={item} /> : <LayoverItem item={item} />)}
      renderSectionHeader={({ section: { title } }) => (
        <TitleItem date={title} />
      )}
      onRefresh={onRefresh}
      refreshing={isFetching}
    />
  </SafeAreaView>
  )
}

export const RosterList = React.memo(ListComponent);
