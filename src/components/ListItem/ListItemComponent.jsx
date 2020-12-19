import React, { useState, useEffect, useMemo, useContext } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import PermissionLabel from "../PermissionLabel/PermissionLabel";
import Button from "../Button/Button";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash.svg";

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
  border-color: ${(props) => (props.checked ? "#475de5" : "white")};
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

const Info = styled.div`
  text-align: left;
`;

const AvatarImg = styled.img`
  background-color: lightgray;
  border-radius: 50%;
  object-fit: cover;
  height: 32px;
  width: 32px;
  margin-right: 14px;
`;

const Name = styled.div`
  color: #1a202c;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

const Email = styled.div`
  color: #718096;
  font-size: 14px;
  line-height: 21px;
`;

// const CheckboxPlaceholder = styled.div`
//   height: 16px;
//   width: 16px;
//   background-color: #475de5;
//   border-radius: 4px;
//   margin-right: 14px;
// `;

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

const ListItemComponent = ({ item, size, start, parentRef }) => {
  const [imageSrc, setImageSrc] = useState("#");
  const [imageRef, setImageRef] = useState();

  const { selectUser, deselectUser, selectedUsers } = useContext(UserContext);

  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== item.avatar) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(item.avatar);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            root: parentRef.current,
            threshold: 0.01,
            rootMargin: "50%"
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(item.avatar);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [item.avatar, imageSrc, imageRef, parentRef]);

  return (
    <ListItemWrapper size={size} start={start}>
      <ListItem
        checked={
          selectedUsers[item.id] !== undefined
            ? selectedUsers[item.id]
            : selectedUsers.ALL_SELECTED
        }
      >
        <UserSection>
          <Checkbox
            checked={
              selectedUsers[item.id] !== undefined
                ? selectedUsers[item.id]
                : selectedUsers.ALL_SELECTED
            }
            onChange={() => {
              if (!!selectedUsers[item.id] || selectedUsers.ALL_SELECTED) {
                deselectUser(item.id);
              } else {
                selectUser(item.id);
              }
            }}
          />
          <AvatarImg ref={setImageRef} src={imageSrc} />
          <Info>
            <Name>{item.name}</Name>
            <Email>{item.email}</Email>
          </Info>
        </UserSection>
        <EditSection>
          {item.role && <PermissionLabel role={item.role} />}
          <ButtonsContainer>
            <Button>
              <EditIcon />
              Edit
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
