import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={[styles.profileAvatar, styles.profileLayout]} />
      <Image
        style={[styles.profileAvatarIcon, styles.agendaPosition]}
        contentFit="cover"
        source={require("../assets/ft.png")}
      />
      <View style={[styles.mobileAppHeader, styles.profileAvatarPosition]}>
        <Text style={[styles.agenda, styles.agendaPosition]}>Agenda</Text>
        <Image
          style={styles.menu}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
      </View>
      <Image
        style={styles.linha}
        contentFit="cover"
        source={require("../assets/linha.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    width: 29,
    height: 29,
  },
  agendaPosition: {
    top: 5,
    position: "absolute",
  },
  profileAvatarPosition: {
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: -2,
    backgroundColor: Color.colorMidnightblue_100,
    width: 341,
    height: 36,
    left: 2,
    position: "absolute",
  },
  profileAvatar: {
    left: 156,
    height: 29,
    top: 0,
    position: "absolute",
  },
  profileAvatarIcon: {
    left: 278,
    height: 29,
    width: 29,
  },
  agenda: {
    marginLeft: -16,
    left: "50%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  iconmore: {
    height: "42.76%",
    width: "6.42%",
    top: "28.62%",
    right: "89.33%",
    bottom: "28.62%",
    left: "4.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mobileAppHeader: {
    width: 268,
    height: 29,
    left: 2,
  },
  lRemovebgPreview1Icon: {
    top: 13,
    left: -34,
    width: 414,
    height: 664,
    position: "absolute",
  },
  rectangleParent: {
    backgroundColor: Color.colorDarkslateblue,
    flex: 1,
    width: "100%",
    height: 636,
    overflow: "hidden",
  },
});

export default Frame7;
