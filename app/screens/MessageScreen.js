import { useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refressing, setRefressing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            style={styles.listItem}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refressing}
        onRefresh={() =>
          setMessages({
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
          })
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
  },
});

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default MessageScreen;
