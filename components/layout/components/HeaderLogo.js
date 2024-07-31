import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>FundIt</Logo>
  )
}

const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-left: 11px;
  font-family: 'Praise', cursive;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${(props) => props.theme.color}; /* Color from theme */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adding a subtle text shadow */
  transition: transform 0.2s ease-in-out; /* Adding a smooth transition effect */
  
  &:hover {
    transform: scale(1.05); /* Scale up the logo on hover for a subtle effect */
  }
`

export default HeaderLogo;
