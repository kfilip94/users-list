import React, { useMemo, useContext } from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import useListSelectionContext from "../../hooks/useListSelectionContext";
import PermissionLabel from "../PermissionLabel/PermissionLabel";
import Button from "../Button/Button";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash.svg";
import UserInfoSection from "../UserInfoSection/UserInfoSection";
import { device } from "../../styles/breakpoints";

const ListItemWrapper = styled.li.attrs((props) => ({
  style: {
    height: `${props.size}px`,
    transform: `translateY(${props.start}px)`
  }
}))`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;
  visibility: hidden;

  > * {
    margin-left: 4px;
  }
`;

const ListItem = styled.div`
  box-sizing: border-box;
  border-left: 4px solid white;
  border-radius: 4px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.selectedElementColor : "transparent"};
  border-color: ${({ checked, theme }) =>
    checked ? theme.themeColor : "transparent"};
  display: flex;
  width: 100%;
  padding: 16px 24px 16px 12px;
  margin-bottom: 4px;
  align-items: center;
  height: ${({ height }) => `${height - 4}px`};
  cursor: pointer;
  &:hover ${ButtonsContainer} {
    visibility: visible;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
`;

const EditSection = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const EditText = styled.span`
  display: none;
  margin: 0 4px 0 8px;
  @media ${device.laptop} {
    display: block;
  }
`;

const DeleteButton = styled(Button)`
  width: 32px;
`;

const ListItemComponent = ({ item, size, start, parentRef }) => {
  const { isChecked, toggleItemSelection } = useListSelectionContext();
  const checked = useMemo(() => isChecked([item.id]), [item.id, isChecked]);

  return (
    <ListItemWrapper size={size} start={start}>
      <ListItem checked={checked} height={size}>
        <UserSection>
          <Checkbox
            checked={checked}
            onChange={() => toggleItemSelection(item.id)}
          />
          <UserInfoSection user={item} parentRef={parentRef} />
        </UserSection>
        <EditSection>
          {item.role && <PermissionLabel role={item.role} />}
          <ButtonsContainer>
            <Button>
              <EditIcon />
              <EditText>Edit</EditText>
            </Button>
            <DeleteButton>
              <DeleteIcon />
            </DeleteButton>
          </ButtonsContainer>
        </EditSection>
      </ListItem>
    </ListItemWrapper>
  );
};

export default ListItemComponent;
