import React from "react";
import styled from "styled-components";

const ListItem = styled.li.attrs((props) => ({
  style: {
    height: `${props.size}px`,
    transform: `translateY(${props.start}px)`
  }
}))`
  box-sizing: border-box;
  border: 1px solid lightgray;
  display: flex;
  position: absolute;
  color: red;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 32px;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

const Name = styled.div`
  color: #2d3748;
  font-size: 14px;
`;

const Email = styled.div`
  color: #718096;
  font-size: 14px;
`;

const ListItemComponent = ({ item, size, start }) => {
  return (
    <ListItem key={item.id} size={size} start={start}>
      <div>
        <Name>{item.name}</Name>
        <Email>{item.email}</Email>
      </div>
    </ListItem>
  );
};

export default ListItemComponent;
