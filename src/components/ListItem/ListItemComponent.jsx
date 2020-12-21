import React, { useMemo, useContext } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
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
  background-color: ${(props) => (props.checked ? "#f7fafc" : "white")};
  border-color: ${({ checked, theme }) =>
    checked ? theme.themeColor : "white"};
  display: flex;
  width: 100%;
  padding: 16px 24px 16px 12px;
  margin-bottom: 4px;
  align-items: center;
  height: 64px;
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
  @media ${device.laptop} {
    display: block;
  }
`;

const ListItemComponent = ({ item, size, start, parentRef }) => {
  const { selectedUsers, toggleSelection } = useContext(UserContext);

  const checked = useMemo(() => {
    return selectedUsers[item.id] !== undefined
      ? selectedUsers[item.id]
      : selectedUsers.ALL_SELECTED;
  }, [item.id, selectedUsers]);

  return (
    <ListItemWrapper size={size} start={start}>
      <ListItem checked={checked}>
        <UserSection>
          <Checkbox
            checked={checked}
            onChange={() => {
              toggleSelection(item.id);
            }}
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
            <Button>
              <DeleteIcon />
            </Button>
          </ButtonsContainer>
        </EditSection>
      </ListItem>
    </ListItemWrapper>
  );
};

export default ListItemComponent;
