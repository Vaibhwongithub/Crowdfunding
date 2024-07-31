import styled from 'styled-components';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {App} from '../Layout';
import { useContext } from 'react';
import Wallet from './Wallet';


const HeaderRight = () => {
  const ThemeToggler = useContext(App);

  return (
    <HeaderRightWrapper>
      <Wallet />
      <ThemeToggle onClick={ThemeToggler.changeTheme}>
      {ThemeToggler.theme === 'light' ? <DarkModeIcon /> : <Brightness7Icon />}
      </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  height: 100%;
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgDiv};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.bgSubDiv};
  }
`;

export default HeaderRight;
