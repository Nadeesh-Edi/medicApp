import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextArea, TextInput, TouchableOpacity} from "react-native";
import AppBarComponent from "../Common/AppBarComponent";

const Feedback = () => {

    return (

        <SafeAreaView style={{ felix: 1 }}>
            <ScrollView>
            <AppBarComponent/>
            
                <View style={styles.container}>
                <Text style={styles.myTitle}>FEEDBACK </Text>
                </View>
                <View>
                
                <TextInput style={styles.inputfields1} placeholder='Type here'/>
                </View>

                <View>
                
                <TextInput style={styles.inputfields} placeholder='Enter your Email'/>
                </View>
                
                <View>
              
                <TextInput style={styles.inputfields} placeholder='Enter your Name'/>
                </View>

                <View>
                
                <TextInput style={styles.inputfields} placeholder='Enter Subject Name'/>
                </View>
            
           <View>
            <TouchableOpacity style={styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> SUBMIT</Text>
            </TouchableOpacity>
            </View>

           <View style={styles.box}>
            <Text style={styles.label}>Sent</Text>
            <Text style={styles.label}>Progress</Text>
           </View>
                
            </ScrollView>
        </SafeAreaView> 


    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1fbf3f',
        padding:10,
        marginLeft:20,
        marginRight:20,
        marginTop:10
    },
    myTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },

    BorderClass:
    {

        width: 360,
        height: 200,
        borderWidth: 4,
        borderColor: 'black',
    },
    label: {
        fontSize: 30,
        marginTop:20,
        marginLeft:20,
        fontWeight: "bold",
      
        color: 'black'

    },
    labeltext:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:80,
      color:'red',
      marginTop:10

    },
    inputfields:{
     
        borderColor:'a7a7',
        borderWidth:1,
        padding:15,
        fontSize:16,
        borderRadius:10,
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        
    },

    inputfields1:{
     
        borderColor:'a7a7',
        borderWidth:1,
        padding:40,
        fontSize:16,
        borderRadius:10,
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        
    },
    defaultButton:{
      
       backgroundColor:'#6699ff',
       marginTop:10,
       marginLeft:100,
       marginRight:20,
       padding:15,
       borderRadius:15


    },
    box: {

        backgroundColor: 'lightgreen',
        height: 150,
        width: 340,
        borderColor: 'black',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 50,
        borderRadius: 10,
        borderWidth: 2,
    
    
      },
   


})

export default Feedback;