import { MD2Colors, MD3Theme, ThemeProp } from "react-native-paper/lib/typescript/types";


export type CustomThemePropTypeRoot = ThemeProp & MD2Colors & MD3Theme &{
    colors:{
        textLight:string,
        label:string,
        card:string,
    }
};

// export type CustomThemeProp = Partial<CustomThemePropTypeRoot>;

// Make only the `colors` object partial
export type CustomThemeProp = Omit<CustomThemePropTypeRoot, "colors"> & {
    colors?: Partial<CustomThemePropTypeRoot["colors"]>;
};