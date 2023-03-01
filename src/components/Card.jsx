import { useState, useEffect } from 'react';
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
  const [count, setCount] = useState(
    () => JSON.parse(window.localStorage.getItem('count')) ?? 100500
  );
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem('value')) ?? true
  );

  const handleClick = () => {
    setState(state => !state);
    setCount(count => (state ? count + 1 : count - 1));
  };

  useEffect(() => {
    window.localStorage.setItem('value', JSON.stringify(state));
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [state, count]);

  return (
    <UserCard>
      <Logo src={logo} alt="logo" aria-label="Go iT" />
      <Picture src={picture} alt="background" />
      <WrapAvatar>
        <Avatar src={avatar} alt="avatar" aria-label="User avatar" />
      </WrapAvatar>
      <WrapDescription>
        <Tweets>777 tweets</Tweets>
        <Followers>{count} followers</Followers>
        <Button onClick={handleClick} type="button" color={state.toString()}>
          <ButtonText>{state ? 'Follow' : 'Following'}</ButtonText>
        </Button>
      </WrapDescription>
    </UserCard>
  );
};
