import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

import PermissionLabel from "../PermissionLabel/PermissionLabel";

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

const ListItem = styled.div`
  box-sizing: border-box;
  border-left: 4px solid #475de5;
  border-radius: 4px;
  background-color: #f7fafc;

  display: flex;
  width: 100%;
  padding: 16px 24px 16px 12px;
  margin-bottom: 4px;
  align-items: center;
  height: 64px;
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

const CheckboxPlaceholder = styled.div`
  height: 16px;
  width: 16px;
  background-color: #475de5;
  border-radius: 4px;
  margin-right: 14px;
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

const ListItemComponent = ({ item, size, start, parentRef }) => {
  const [imageSrc, setImageSrc] = useState("#");
  const [imageRef, setImageRef] = useState();

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
      <ListItem>
        <UserSection>
          <CheckboxPlaceholder />
          <AvatarImg ref={setImageRef} src={imageSrc} />
          <Info>
            <Name>{item.name}</Name>
            <Email>{item.email}</Email>
          </Info>
        </UserSection>
        <EditSection>
          {item.role && <PermissionLabel role={item.role} />}
        </EditSection>
      </ListItem>
    </ListItemWrapper>
  );
};

export default ListItemComponent;
