import React, {useState, useCallback, useContext} from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { Container, Avatar, OnlineStatus, Button, RightSide } from './styles';
import colors from '../../styles/colors';
import { Context } from '../../context/darkTheme';

const Header: React.FC = () => {
  const {dark, handleChangeTheme} = useContext(Context);
  const [toggle, setToggle] = useState(false);

  // const handleChangeToggle = useCallback(() => {
  //   setToggle(prevState => !prevState)
  //   handleChangeTheme()
  // }, []);

  function handleChangeToggle() {
    setToggle(prevState => !prevState)
    handleChangeTheme()
  }

  return (
    <Container bgColor={dark}>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Switch 
          value={toggle}
          onValueChange={handleChangeToggle}
          thumbColor="#7159c1"
        />
        <Button>
          <MaterialIcons 
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons 
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather 
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
