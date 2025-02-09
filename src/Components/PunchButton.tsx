import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme } from 'react-native-paper';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { CustomThemeProp } from '../Types/themeTypes';
// import { Icon, Text, useTheme } from '@rneui/themed'
// import { getDeviceLocation, getLocation, scanNearbySites } from '../../services/common';
// import { checkUserInSiteApi, punchInApi } from '../../services/serverApi';
// import useAppStore from '../../zustand/store';

export default function  PunchButton() {
    const [active,setActive] = useState(false);
    const {colors} : CustomThemeProp = useTheme() ;
    // const {inSite,punchAction} = useAppStore();
    // console.log(inSite,punchAction)
    // let buttonActive = inSite&&punchAction!=0;
    let size = 140;
    let size2 = size*1.2;

    const handlePunchButton  = ()=>{
        setActive(!active);
    }
  return (
    <View >
        <View style={{
            height:size2,
            width:size2,
            borderRadius:size2,
            backgroundColor:colors.card,
            // overflow:"hidden",
            shadowOpacity:1,
            // padding:10,
            justifyContent:"center",
            alignItems:"center",
            elevation:2,

        }}>
            <TouchableOpacity 
            // disabled={!buttonActive}
            onPress={()=>{
                // setActive(!active)
                // getDeviceLocation();
                // getLocation();
                // checkUserInSiteApi();
                // scanNearbySites();
                handlePunchButton();
                
            }}
            activeOpacity={0.8}
            style={{
                height:size,
                width:size,
                backgroundColor:active?colors?.primary:colors?.background,
                elevation:10,
                // shadowColor:theme.colors.primary,
                shadowRadius:1,
                borderRadius:size,
                alignItems:"center",
                justifyContent:'center',
                gap:12,
                borderColor:colors?.outline,
                borderWidth:1,
                shadowColor:colors?.primary,
                // opacity:!buttonActive?0.3:1,
            }}>
                <FontAwesomeIcon
                    // type='font-awesome'
                    name='hand-pointer-o'
                    color={active?colors.background:colors.primary}
                    size={30}
                />
                <Text style={{color:active?colors.background:colors.primary, fontSize:18}}>
                    {active?"Clock Out":"Clock In"}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}