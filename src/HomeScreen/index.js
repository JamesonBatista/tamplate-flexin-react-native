import React, { useState, useRef } from "react";

import {
  Container,
  Text,
  Categories,
  Category,
  CategoryName,
  DotCategory,
  FlatList,
  ItemList,
  ItemName,
} from "./styles";
import { categoryList } from "../../components/ListMenu";
import { data } from "../../components/DataFlalist";

const HomeScreen = () => {
  const [seletecCategory, setSelectedCategory] = useState("All");
  const ListRef = useRef();

  const changeCategory = (category) => {
    ListRef.current.scrollToOffset({ x: 0, y: 0 });

    setSelectedCategory(category);
  };
  const GameItem = (item) => {
    console.log(item.name);

    return (
      <ItemList>
        <ItemName>{item.name}</ItemName>
      </ItemList>
    );
  };
  return (
    <Container>
      <Categories horizontal showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index} onPress={() => changeCategory(category)}>
              <CategoryName
                selected={seletecCategory === category ? true : false}
              >
                {category}
              </CategoryName>
              {seletecCategory === category && <DotCategory />}
            </Category>
          );
        })}
      </Categories>
      <FlatList
        data={data.filter((games) => {
          return games.category.includes(seletecCategory);
          //  ||
          // seletecCategory === "All"
        })}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={ListRef}
      />
    </Container>
  );
};

export default HomeScreen;
