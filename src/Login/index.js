import React, { useState, useEffect } from "react";
import { Dimensions, StatusBar, View, Keyboard } from "react-native";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "../../icons";
import Loader from "../../components/Loader";
import {
  ViewColor,
  ViewScrollColor,
  LogoBusiness,
  Container,
  ViewColorTwo,
  ViewColorBottom,
  ViewInput,
  Input,
  ContainerButtons,
  TouchButtons,
  ButtonTouch,
  ViewNameIcon,
  LoginText,
  IconArrow,
  IconView,
  IconCheck,
} from "./styles";
const TouchableOpacity = Animatable.createAnimatableComponent(TouchButtons);

const { width, height } = Dimensions.get("window");
export default function Login({ navigation }) {
  const [count, setCount] = useState(null);
  const [change, setChange] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [border, setBorder] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setBorder("#fff");
  };

  const _keyboardDidHide = () => {
    setBorder(null);
  };

  const handleColor = () => {
    if (count <= 8) {
      setCount(count + 1);
    } else {
      setCount(0);
    }

    switch (count) {
      case 1:
        return setChange("orange");
      case 2:
        return setChange("cyan");
      case 3:
        return setChange("#000");
      case 4:
        return setChange("#993399");
      case 5:
        return setChange("#F5E70B");
      case 6:
        return setChange("#D68910");
      case 7:
        return setChange("tomato");
      case 8:
        return setChange("blue");
      case 9:
        return setChange("#FF00FF");
      default:
        return setChange("#53e431");
    }
  };

  const HandleColors = () => {
    return (
      <>
        <ViewColor
          animation="zoomIn"
          duration={1500}
          activeOpacity={1}
          onPress={() => handleColor()}
        >
          <ViewScrollColor
            color={change}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            bounces={false}
          >
            {/* create logo Enterprise */}
            <LogoBusiness />
            {/* create logo Enterprise */}
          </ViewScrollColor>
        </ViewColor>
      </>
    );
  };
  const handleLogin = () => {
    setLoading(true);
    setLogin(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Home");
      setLogin(false);
    }, 2000);
  };
  return (
    <Container color="#F2F9F9">
      <Loader loading={loading} color={change} />
      <StatusBar barStyle="dark-content" />
      <HandleColors />
      <ViewColorTwo color={change}>
        <ViewColorBottom>
          <ViewInput color={border ? border : change}>
            <MaterialCommunityIcons
              name="email-edit-outline"
              size={20}
              style={{ top: 10, marginRight: 5 }}
              color={change ? change : "cyan"}
            />
            <Input
              placeholder="E-mail"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => Keyboard.dismiss}
            />
          </ViewInput>

          <ViewInput color={change}>
            <MaterialIcons
              name="lock-outline"
              size={20}
              style={{ top: 10, marginRight: 5 }}
              color={change ? change : "cyan"}
            />
            <Input
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
          </ViewInput>
          <ContainerButtons>
            <ButtonTouch>
              <TouchableOpacity color={change} onPress={() => handleLogin()}>
                <ViewNameIcon>
                  <LoginText>Entrar</LoginText>
                  {!login ? (
                    <IconView>
                      <IconArrow name="arrowright" size={24} color="white" />
                    </IconView>
                  ) : (
                    <IconView>
                      <IconArrow name="checkcircle" color="white" size={24} />
                    </IconView>
                  )}
                </ViewNameIcon>
              </TouchableOpacity>
            </ButtonTouch>

            <ButtonTouch>
              <TouchableOpacity
                style={{ backgroundColor: "blue" }}
                onPress={() => navigation.navigate("Register")}
              >
                <LoginText>Registrar</LoginText>
              </TouchableOpacity>
            </ButtonTouch>
          </ContainerButtons>
        </ViewColorBottom>
      </ViewColorTwo>
    </Container>
  );
}
