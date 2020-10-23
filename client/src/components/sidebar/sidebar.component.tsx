import React from 'react';

import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import mainLogo from '../../assets/logo.png';

import './sidebar.styles.scss';
import {
  selectUserCategory,
  selectUserCountry,
} from '../../redux/user/user.selectors';

import SidebarItem from './../sidebar-item/sidebar-item.component';
import Footer from '../footer/footer.component';

interface SidebarProps extends RouteComponentProps {}

interface SidebarState {
  isChecked: boolean;
}

type Props = SidebarProps & LinkStateProps;

class Sidebar extends React.Component<Props, SidebarState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isChecked: true,
    };
  }

  handleChecked = () => {
    const { isChecked } = this.state;

    const ele = document.getElementById('isSidebarChecked') as HTMLInputElement;

    ele.checked = !isChecked;

    this.setState({
      isChecked: !isChecked,
    });
  };

  render() {
    const { userCategory, userCountry, location } = this.props;
    const { isChecked } = this.state;

    return (
      <nav role='navigation' className='sidebar'>
        <div id='menuToggle'>
          <input
            type='checkbox'
            id='isSidebarChecked'
            defaultChecked={isChecked}
            // checked={isChecked}
            onClick={this.handleChecked}
          />

          <Link to={`/news/${userCountry}/${userCategory}`}>
            <img src={mainLogo} alt='App Logo' className='navbar__logo' />
          </Link>

          <span></span>
          <span></span>
          <span></span>

          {location.pathname.startsWith('/profile') ? (
            <ul id='menu'>
              <SidebarItem
                iconType='person-circle-outline'
                itemLabel='Home'
                profileLink='/profile'
              />

              <SidebarItem
                iconType='settings-sharp'
                itemLabel='Settings'
                profileLink='/profile/settings'
              />

              <SidebarItem
                iconType='newspaper-outline'
                itemLabel='Saved stories'
                profileLink='/profile/saved-stories'
              />

              <SidebarItem
                iconType='thumbs-up-sharp'
                itemLabel='Liked stories'
                profileLink='/profile/liked-stories'
              />

              <SidebarItem
                iconType='thumbs-down-sharp'
                itemLabel='Disliked stories'
                profileLink='/profile/disliked-stories'
              />

              <SidebarItem
                iconType='search'
                itemLabel='Past searches'
                profileLink='/profile/past-searches'
              />

              <SidebarItem
                iconType='eye-off'
                itemLabel='Hidden sources'
                profileLink='/profile/hidden-sources'
              />

              <hr></hr>

              <SidebarItem
                iconType='information-circle-outline'
                itemLabel='About'
                profileLink='/profile/about'
              />

              <hr></hr>

              <Footer />
            </ul>
          ) : (
            <ul id='menu'>
              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='general'
                linkCountry={userCountry}
                iconType='globe-outline'
                itemLabel='Top stories'
              />

              <SidebarItem
                iconType='newspaper-outline'
                itemLabel='Saved for later'
                profileLink='/profile/saved-stories'
              />

              <SidebarItem
                iconType='search'
                itemLabel='Past searches'
                profileLink='/profile/past-searches'
              />

              <hr></hr>

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType={userCategory}
                linkCountry='ro'
                iconType='flag'
                itemLabel='Romania'
                countryBool
              />

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType={userCategory}
                linkCountry='us'
                iconType='earth'
                itemLabel='World'
                countryBool
              />

              <hr></hr>

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='business'
                linkCountry={userCountry}
                iconType='business-outline'
                itemLabel='Business'
              />

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='technology'
                linkCountry={userCountry}
                iconType='rocket-outline'
                itemLabel='Technology'
              />

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='entertainment'
                linkCountry={userCountry}
                iconType='game-controller-outline'
                itemLabel='Entertainment'
              />

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='science'
                linkCountry={userCountry}
                iconType='flask-sharp'
                itemLabel='Science'
              />

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='sports'
                linkCountry={userCountry}
                iconType='bicycle'
                itemLabel='Sports'
              />

              <SidebarItem
                userCountry={userCountry}
                userCategory={userCategory}
                linkType='health'
                linkCountry={userCountry}
                iconType='barbell-sharp'
                itemLabel='Health'
              />

              <hr></hr>

              <Footer />
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

interface LinkStateProps {
  userCategory: string;
  userCountry: string;
}

const mapStateToProps = createStructuredSelector({
  userCategory: selectUserCategory,
  userCountry: selectUserCountry,
});

export default withRouter(connect(mapStateToProps)(Sidebar));
