import styled from "styled-components/native";
import { AntDesign, MaterialIcons } from "../../icons";

const IconView = styled.View`
  border-width: 3px;
  border-radius: 20px;
  border-color: white;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;

const IconArrow = styled(AntDesign)``;
const IconCheck = styled(MaterialIcons)``;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => (props.color ? props.color : "#F2F9F9")};
  margin-right: 5px;
`;
const ViewColorTwo = styled.View`
  flex: 1;
  background-color: ${(props) => (props.color ? props.color : "cyan")};
`;

const ViewColor = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;
const ViewColorBottom = styled.View`
  flex: 1;
  background-color: ${(props) => (props.color ? props.color : "#F2F9F9")};
  border-top-left-radius: 75px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 5px;
  border-bottom-left-radius: 75px;
`;

const ViewScrollColor = styled.ScrollView`
  height: 0.5px;
  border-bottom-right-radius: 75px;
  border-top-right-radius: 75px;
  margin-top: 5px;
  background-color: ${(props) => (props.color ? props.color : "cyan")};
`;
const LogoBusiness = styled.View`
  align-self: center;
`;
const ViewInput = styled.View`
  border-width: 1px;
  border-color: ${(props) => (props.color ? props.color : "cyan")};
  width: 90%;
  height: 40px;
  border-radius: 20px;
  top: -30px;
  padding-left: 20px;
  margin-bottom: 10px;
  flex-direction: row;
`;
const Input = styled.TextInput`
  width: 90%;
`;
const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonTouch = styled.View`
  border-width: 5px;
  border-radius: 50px;
  width: 160px;
  border-color: #c2f5f2;
  margin-right: 5px;
`;
const TouchButtons = styled.TouchableOpacity`
  background-color: ${(props) => (props.color ? props.color : "cyan")};
  width: 150px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const ViewNameIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LoginText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 3px;
`;
const RegisterText = styled.Text``;

export {
  ViewColorBottom,
  ViewColorTwo,
  ViewColor,
  ViewScrollColor,
  LogoBusiness,
  Container,
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
};
