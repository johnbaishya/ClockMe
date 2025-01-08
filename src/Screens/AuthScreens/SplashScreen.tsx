import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";

const SplashScreen = ()=>{
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter]}>
            <Text style={[AppStyles.fontXL]}>
                splash Screen
            </Text>
        </View>
    )
}

export default SplashScreen;
