import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <HeaderNavWrapper>
      <Link passHref href={'/'}><HeaderNavLinks active={Router.pathname == "/" ? true : false} >
        Campaigns
      </HeaderNavLinks></Link>
      <Link passHref href={'/createcampaign'}><HeaderNavLinks active={Router.pathname == "/createcampaign" ? true : false} >
        Create Campaign
      </HeaderNavLinks></Link>
      <Link passHref href={'/dashboard'}><HeaderNavLinks active={Router.pathname == "/dashboard" ? true : false} >
        Dashboard
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  border-radius: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const HeaderNavLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
  height: 100%;
  padding: 0 15px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.color};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.bgSubDiv};
  }
`;

export default HeaderNav;