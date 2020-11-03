// import Module 
import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
//kalo react general
//buat class component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    handlePlus = () => {
        // ganti pakai setState
        this.setState({count : this.state.count + 1})
    }

    handleMinus = () => {
        this.setState({count : this.state.count -1})
    }

    render() {
        return (
            //view mirip dengan DIV di HTML, Sekarang React Native pakainya
            //agak berbeda dengan DIV, view hanya seperti pembungkus harus ada TEXT
            // even trigger pakai onPress
            <View style={styles.root}>
                <Text style={styles.tittle}>Handle Save</Text>
                <Text style={styles.count}> Count : {this.state.count}</Text>
               <Button title="plus" color="blue"onPress={this.handlePlus}/>
               <Button title="minus" color ="red" onPress={this.handleMinus}/>
            </View>
        );
    }
}

//Notes : 
// state tidak bisa dirubah secara langsung
// state hanya bisa dirubah menggunakan fungsi/method this.setState()
// akses value menggunakan this.state.[key]


const styles = StyleSheet.create({
    root : {
        padding : 20
    },
    tittle : {
        fontSize : 20,
        marginBottom : 10,
        fontWeight : "bold"
    },
    count : {
        fontSize : 10,
        marginBottom : 10
    }
})

//direact gabisa baca div kalo di reactJS pakai div
//export componentnya

export default App;