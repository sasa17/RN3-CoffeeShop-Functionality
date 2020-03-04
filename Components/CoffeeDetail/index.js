import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

//List
import CartButton from "../Buttons/CartButton";
import coffeeStore from "../../stores/coffeeStore";
import cartStore from "../../stores/cartStore";

class CoffeeDetail extends Component {
  state = {
    drink: "",
    option: "",
    quantity: 1
  };

  changeDrink = value =>
    this.setState({
      drink: value
    });

  changeOption = value =>
    this.setState({
      option: value
    });

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
  };

  render() {
    const coffeeshopID = this.props.navigation.getParam("coffeeshopID");
    const coffeeshop = coffeeStore.coffeeshops.find(
      coffeeshop => coffeeshopID === coffeeshop.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {coffeeshop.name + "\n"}
                  <Text note>{coffeeshop.location}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: coffeeshop.img }} />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeDrink}
                  selectedValue={this.state.drink}
                  placeholder="Choose Drink"
                >
                  <Picker.Item label="Latte" value="Latte" />
                  <Picker.Item label="Cappuccino" value="Cappuccino" />
                  <Picker.Item label="Espresso" value="Espresso" />
                </Picker>
              </Left>
              <Body>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeOption}
                  selectedValue={this.state.option}
                  placeholder="Choose Option"
                >
                  <Picker.Item label="Small" value="Small" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="Large" value="Large" />
                </Picker>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={1}
                />
              </Body>

              <Right>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("coffeeshopName"),
  headerRight: <CartButton />
});

export default observer(CoffeeDetail);
