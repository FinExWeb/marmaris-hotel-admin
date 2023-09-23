import React from "react";
import { Containers, ImagesContainer, SContainer, SImages, SText } from "./style";

const imagesArr = [
  {
    srcs: "https://cf.bstatic.com/xdata/images/city/600x600/686023.jpg?k=315b82bac9991c71d6f14f8618e68a9b6d3f45b61b9ceb335523918d0e086dbf&o=",
  },
];
const Images = () => {
  return (
    <SContainer>
      {Array(5)
        .fill()
        .map((_, index) => {
          return (
            <Containers key={index}>
              <SText>405 xonadan kelgan rasm</SText>
              <ImagesContainer>
                <SImages src={imagesArr[0].srcs} alt="error" />
              </ImagesContainer>
            </Containers>
          );
        })}
    </SContainer>
  );
};

export default Images;
