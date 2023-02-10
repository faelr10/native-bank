import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  PageInitialAll: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 35,
  },
  boxTitlePix: {
    width: "100%",
    height: 80,
    left: 0,
    right: 0,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textTitlePix: {
    color: "white",
    fontSize: 30,
    paddingLeft: 30,
  },
  boxFieldSend: {
    marginTop: 2,
    width: "100%",
    height: 180,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleFieldSend: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 8,
    height: "35%",
  },
  boxActionsSend: {
    borderBottomWidth: 1,
    borderColor: "silver",
    width: "100%",
    height: "65%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actionFieldSend: {
    width: "25%",
    backgroundColor: "silver",
    height: "60%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  actionFieldSendPicked: {
    width: "25%",
    backgroundColor: "silver",
    height: "60%",
    borderWidth:1,
    borderColor:"#696969",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 10,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 108.132,
    shadowRadius: 1.0,

    elevation: 32,
  },
  iconAction: {
    fontSize: 18,
    color: "#000",
  },
  boxKeyPix: {
    marginTop: 10,
    width: "100%",
    height: 220,
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: "silver",
  },
  boxInput: {
    alignItems: "center",
    marginBottom: 50,
    marginLeft: 35,
    width: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    top: 20,
  },
  inputText: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  boxGeral: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "auto",
    paddingTop: 20,
  },
  ButtonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 15,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  boxConfirmDataTransaction:{
    width:"100%",
    height:300,
    alignItems:"center",
    justifyContent:"space-around"
  },
  titleConfirmDataTransaction:{
    fontSize:35
  },
  boxDataConfirm:{
    width:"97%",
    height:160,
    borderWidth:1,
    borderColor:"silver",
  },
  dataConfirm:{
    fontSize:15,
    top:20,
    left:10,
    marginBottom:10
  }
});

export default styles;
