import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

const CategoryName = styled.Text`
  color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")};
  font-weight: ${(props) => (props.selected ? "700" : "500")};
`;
const DotCategory = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
`;

const FlatList = styled.FlatList`
  flex: 1;
`;

const ItemList = styled.TouchableOpacity``;

const ItemName = styled.Text`
  font-size: 50px;
`;

export {
  Container,
  Text,
  Categories,
  Category,
  CategoryName,
  DotCategory,
  FlatList,
  ItemList,
  ItemName,
};
