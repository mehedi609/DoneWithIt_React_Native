import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import { colors } from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  title,
  subTitle,
  image,
  style,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          <Image style={styles.image} source={image} />

          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;