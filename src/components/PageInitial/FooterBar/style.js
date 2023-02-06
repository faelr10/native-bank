import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    boxFooterBar: {
        width: "100%",
        height: "10%",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        backgroundColor: "#1b1e23",
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center"
    },
    fieldIconFooter:{
        width:"18%",
        backgroundColor:"#d3d3d3",
        height:"80%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    iconFooter: {
        fontSize:20,
        color: "#000",
    }
});

export default styles