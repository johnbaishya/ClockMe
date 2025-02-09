import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { Button, useTheme } from "react-native-paper";
import { unauthenticateApp } from "../../Services/AuthServices";
import Clock from "../../Components/Clock";
import PunchButton from "../../Components/PunchButton";


const HomeScreen = ()=>{
    const {colors} = useTheme();
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter,{backgroundColor:colors.background}]}>
            <Clock/>
            <PunchButton/>
            <Button onPress={unauthenticateApp}>
                <Text>logout</Text>
            </Button>
        </View>
    )
}

export default HomeScreen;
