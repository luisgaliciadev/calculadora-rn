import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
    text: string,
    color?: string,
    colorText?: string,
    width?: boolean,
    action: (textValue: string) => void
}

export const BotonCalc = ({text, color="#2D2D2D", colorText="white", width= false, action}: Props) => {

    return (
        <TouchableOpacity onPress={() => action(text)}>
            
            <View style={{
                            ...styles.styleButton,
                            backgroundColor: color,
                            width: (width) ? 180 : 80
                        }}
            >
                <Text style={{
                                ...styles.buttonText,
                                color: colorText
                            }}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

