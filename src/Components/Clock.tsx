import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Divider, Text, useTheme } from 'react-native-paper';
import { FONTS } from '../Constants/themeConstants';
import { CustomThemeProp } from '../Types/themeTypes';

export default function Clock() {
    const [time,setTime] = useState(moment().format("hh:mm"));
    const [time2,setTime2] = useState(moment().format("A"));
    const theme : CustomThemeProp= useTheme();
    const {colors} = theme;

    useEffect(()=>{
        setInterval(()=>{
            let t2 = moment().format("hh:mm");
            let t3 = moment().format("A");
            setTime(t2);
            setTime2(t3);
        },1000)
    },[])

  return (
    <View style={{alignItems:"center"}}>
      <View style={{flexDirection:"row", borderBottomColor:colors.outline, borderBottomWidth:1}}>
        <Text variant='displayLarge' >
          {time}
        </Text>
          <Text variant='titleLarge'> {time2}</Text>
      </View>
      {/* <Divider bold style={{backgroundColor:"red"}}/> */}
        <Text variant='titleMedium'>{moment().format("ddd | MMM Do")} </Text>

    </View>
  )
}