import React from 'react';
import {
  UserCard,
  Logo,
  Picture,
  WrapAvatar,
  Avatar,
  WrapDescription,
  Tweets,
  Followers,
  Button,
  ButtonText,
} from './Card.styled';
import logo from '../images/logo.svg';
import picture from '../images/bg_picture.png';
import avatar from '../images/hansel.png';

export const Card = () => {
  return (
    <UserCard>
      <Logo src={logo} alt="logo" />

      <Picture src={picture} alt="background" />

      <WrapAvatar>
        <Avatar src={avatar} alt="avatar" />
      </WrapAvatar>

      <WrapDescription>
        <Tweets>777 tweets</Tweets>
        <Followers>100,500 followers</Followers>
        <Button type="button">
          <ButtonText>Follow</ButtonText>
        </Button>
      </WrapDescription>
    </UserCard>
  );
};
