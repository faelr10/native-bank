import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  PageInitialAll: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
  },
  boxTitlePix: {
    width: "100%",
    height: 80,
    left: 0,
    right: 0,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "center",
    top: 35,
  },
  textTitlePix: {
    color: "white",
    fontSize: 30,
    paddingLeft: 30,
  },
  boxAll: {
    size: 230,
    color: "black",
    backgroundColor: "white",
    logoSize: 30,
    logoMargin: 2,
    logoBorderRadius: 15,
    logoBackgroundColor: "yellow",
  },
  containerQr: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    width: "96%",
    height:300,
    position:"relative"
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  textInput: {
    width: "90%",
    flexDirection: "row",
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 20,
    paddingLeft: 20,
    fontSize: 35,
  },
  buttonGenerate: {
    borderWidth: 1,
    borderRadius: 30,
    width: "35%",
    height: 40,
    top: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    left: 130,
  },
  textButton: {
    fontSize: 18,
    color: "white",
  },
});

export default styles;
