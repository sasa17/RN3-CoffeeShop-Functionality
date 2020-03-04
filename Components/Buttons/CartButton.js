import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Badge, Button, Text } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartButton = ({ navigation, item }) => {
  return (
    <Button badge vertical transparent>
      <Badge style={{ backgroundColor: "#rgba(0,0,0,0)" }}>
        <Text>{cartStore.totalItems(item)}</Text>
      </Badge>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate("CartScreen")}
        style={{ color: "white" }}
      />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
