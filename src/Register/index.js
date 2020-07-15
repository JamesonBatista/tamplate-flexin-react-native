import React, { useState, useEffect } from "react";
import { Dimensions, StatusBar, Keyboard } from "react-native";
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
  IconView,
  IconDesign,
} from "./styles";
import LogoEnterprise from "../../components/ImageLogo";
const TouchableOpacity = Animatable.createAnimatableComponent(TouchButtons);

const { width, height } = Dimensions.get("window");
export default function Register({ navigation }) {
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
    return setBorder("#fff");
  };
  const _keyboardDidHide = () => {
    setBorder(null);
  };

  const handleColor = () => {
    if (count <= 14) {
      setCount(count + 1);
    } else {
      setCount(0);
    }

    switch (count) {
      case 1:
        return setChange("orange");
      case 2:
        return setChange("#343434");
      case 3:
        return setChange("#e5989b");
      case 4:
        return setChange("#f28482");
      case 5:
        return setChange("#eae2b7");
      case 6:
        return setChange("#f4acb7");
      case 7:
        return setChange("#52796f");
      case 8:
        return setChange("#240046");
      case 9:
        return setChange("#ff5d8f");
      case 10:
        return setChange("#993399");
      case 11:
        return setChange("#F5E70B");
      case 12:
        return setChange("#D68910");
      case 13:
        return setChange("#229954");
      case 14:
        return setChange("blue");
      case 15:
        return setChange("#FF00FF");
      default:
        return setChange("cyan");
    }
  };
  const handleLogin = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    setLoading(true);
    setLogin(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Home");
      setLogin(false);
    }, 2000);
  };
  const HandleColors = () => {
    return (
      <>
        <Loader loading={loading} color={change} />
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
            showsHorizontalScrollIndicator={false}
          >
            {/* create logo Enterprise */}
            {!border ? (
              <LogoEnterprise />
            ) : (
              <Animatable.View animation="zoomOut" duration={1500}>
                <LogoEnterprise />
              </Animatable.View>
            )}
          </ViewScrollColor>
        </ViewColor>
      </>
    );
  };
  return (
    <Container color="#F2F9F9">
      <StatusBar barStyle="dark-content" />
      <HandleColors />
      <ViewColorTwo color={change}>
        <ViewColorBottom>
          <ViewInput color={border ? border : change}>
            <IconDesign
              name="user"
              size={20}
              color={border ? border : change}
            />
            <Input
              placeholder="Nome"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => Keyboard.dismiss}
            />
          </ViewInput>

          <ViewInput color={change}>
            <MaterialCommunityIcons
              name="email-edit-outline"
              size={20}
              style={{ top: 10, marginRight: 5 }}
              color={change ? change : "#000"}
            />
            <Input placeholder="E-mail" underlineColorAndroid="transparent" />
          </ViewInput>

          <ViewInput color={change}>
            <MaterialIcons
              name="lock-outline"
              size={20}
              style={{ top: 10, marginRight: 5 }}
              color={change ? change : "#000"}
            />
            <Input
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
          </ViewInput>
          <ContainerButtons>
            <ButtonTouch>
              <TouchableOpacity
                color={change}
                animation="zoomIn"
                duration={1000}
                onPress={() => handleRegister()}
              >
                <ViewNameIcon>
                  <LoginText>Registrar</LoginText>
                  {!login ? (
                    <IconView>
                      <AntDesign name="arrowright" size={20} color="white" />
                    </IconView>
                  ) : (
                    <IconView>
                      <AntDesign name="checkcircle" color="white" size={24} />
                    </IconView>
                  )}
                </ViewNameIcon>
              </TouchableOpacity>
            </ButtonTouch>

            <ButtonTouch>
              <TouchableOpacity
                animation="zoomIn"
                duration={1000}
                style={{ backgroundColor: "blue" }}
                onPress={() => handleLogin()}
              >
                <LoginText>Login</LoginText>
              </TouchableOpacity>
            </ButtonTouch>
          </ContainerButtons>
        </ViewColorBottom>
      </ViewColorTwo>
    </Container>
  );
}
