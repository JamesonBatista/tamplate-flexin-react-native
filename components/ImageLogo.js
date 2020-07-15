import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ImageLogo = styled.Image`
  width: 300px;
  height: 300px;
`;
const IconEmail = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: #fff;
`;
const View = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;
const LogoBusiness = styled.View`
  margin: 0px 40px;
  justify-content: center;
  align-items: center;
`;
const TextEmail = styled.Text`
  color: #fff;
  letter-spacing: 1px;
  font-style: italic;
  margin-left: 5px;
`;
const AnimatableLogo = Animatable.createAnimatableComponent(LogoBusiness);

const LogoEnterprise = ({ email, border }, props) => {
  return (
    <>
      <AnimatableLogo animation="zoomIn" duration={1500}>
        <ImageLogo
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />
        {email ? (
          <View>
            <IconEmail name="email-edit-outline" />
            <TextEmail>{email}</TextEmail>
          </View>
        ) : null}
      </AnimatableLogo>
    </>
  );
};

export default LogoEnterprise;
