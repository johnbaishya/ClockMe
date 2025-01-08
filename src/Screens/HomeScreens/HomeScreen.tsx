import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";

const HomeScreen = ()=>{
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter]}>
            <Text style={[AppStyles.fontXL]}>
                home Screen
            </Text>
        </View>
    )
}

export default HomeScreen;
