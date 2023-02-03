import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    boxFooterBar: {
        width: "100%",
        height: "12%",
        borderWidth: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center"
    },
    fieldIconFooter:{
        width:"17%",
        backgroundColor:"#d3d3d3",
        height:"75%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    iconFooter: {
        fontSize:30,
        color: "#000",
    }
});

export default styles