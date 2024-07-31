import styled from 'styled-components';
import HeaderLogo from './components/HeaderLogo'
import HeaderNav from './components/HeaderNav'
import HeaderRight from './components/HeaderRight'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderNav />
      <HeaderRight />
    </HeaderWrapper>
  )
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default Header