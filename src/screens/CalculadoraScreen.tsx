import React from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';

import { styles } from '../theme/AppTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculadoraScreen = () => {

    const 
        { 
            xText,
            resultPrevious,
            result,
            clean,
            positiveNegative,
            del,
            btnDivide,
            btnMultiply,
            btnSubtract,
            btnAdd,
            calculate
        } = useCalculator();

    return (
        <View style={styles.calcContainer}>
            {
                (resultPrevious !== '0') && (
                    <Text style={styles.resultSmall}>
                        {resultPrevious}
                    </Text>
                )
            }
            <Text 
                    style={styles.result}
                    numberOfLines={1}
                    adjustsFontSizeToFit
            >
                {result}
            </Text>

            <View style={styles.styleRow}>
               <BotonCalc text="C" color="#9B9B9B" colorText="black" action={clean}/>
               <BotonCalc text="+/-" color="#9B9B9B" colorText="black" action={positiveNegative}/>
               <BotonCalc text="del" color="#9B9B9B" colorText="black" action={del}/>
               <BotonCalc text="/" color="#F79427" action={btnDivide}/>
            </View>
            
            <View style={styles.styleRow}>
               <BotonCalc text="7" action={xText}/>
               <BotonCalc text="8" action={xText}/>
               <BotonCalc text="9" action={xText}/>
               <BotonCalc text="X" color="#F79427" action={btnMultiply}/>
            </View>

            <View style={styles.styleRow}>
               <BotonCalc text="4" action={xText}/>
               <BotonCalc text="5" action={xText}/>
               <BotonCalc text="6" action={xText}/>
               <BotonCalc text="-" color="#F79427" action={btnSubtract}/>
            </View>


            <View style={styles.styleRow}>
               <BotonCalc text="1" action={xText}/>
               <BotonCalc text="2" action={xText}/>
               <BotonCalc text="3" action={xText}/>
               <BotonCalc text="+" color="#F79427" action={btnAdd}/>
            </View>

            <View style={styles.styleRow}>
               <BotonCalc text="0" width action={xText}/>
               <BotonCalc text="." action={xText}/>
               <BotonCalc text="=" color="#F79427" action={calculate}/>
            </View>
        </View>
    )
}
