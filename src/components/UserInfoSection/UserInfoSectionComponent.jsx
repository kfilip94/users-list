import React, { useState } from "react";
import { useLazyImage } from "../../hooks/useLazyImage";

import styled from "styled-components";

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

const Info = styled.div`
  text-align: left;
`;

const UserInfoSection = ({ user, parentRef }) => {
  const [imageRef, setImageRef] = useState();

  const { imageSrc } = useLazyImage({
    imageURL: user.avatar,
    imageRef,
    parentRef
  });

  return (
    <>
      <AvatarImg ref={setImageRef} src={imageSrc} />
      <Info>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </Info>
    </>
  );
};

export default UserInfoSection;
