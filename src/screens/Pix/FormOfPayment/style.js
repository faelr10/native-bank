import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: "#696969",
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
});

export default styles;
