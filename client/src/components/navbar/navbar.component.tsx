import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import defaultLogo from '../../assets/default.png';

import './navbar.styles.scss';
import { User } from '../../redux/user/user.types';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button.component';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../redux/store';
import { signOut } from '../../redux/user/user.actions';

interface NavbarProps extends RouteComponentProps {}
interface NavbarState {
  searchValue: string;
  popupVisible: boolean;
  dropdownVisible: boolean;
  titleChecked: boolean;
}

type Props = NavbarProps & LinkStateProps & LinkDispatchProps;

class Navbar extends React.Component<Props, NavbarState> {
  constructor(props: Props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      searchValue: '',
      popupVisible: false,
      dropdownVisible: false,
      titleChecked: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (event: any): void => {
    // console.log(event.target.className);
    // console.log(event.target.parentNode.className);

    if (event.target.className === 'navbar__secondary--logo') {
      this.setState((prevState) => ({
        popupVisible: !prevState.popupVisible,
      }));
    } else if (
      event.target.className === 'navbar__secondary--profile' ||
      event.target.className === 'navbar__secondary--profile--x'
    ) {
      this.setState({ popupVisible: true });
    } else {
      this.setState({ popupVisible: false });
    }

    if (event.target.parentNode.className === 'navbar__main--dd-icon') {
      this.setState((prevState) => ({
        dropdownVisible: !prevState.dropdownVisible,
      }));
    } else if (
      event.target.className === 'navbar__main--searchbar' ||
      event.target.className === 'navbar__main--dropdown' ||
      event.target.parentNode.className === 'navbar__main--dropdown' ||
      event.target.parentNode.className === 'navbar__main--dropdown--row'
    ) {
      this.setState({ dropdownVisible: true });
    } else {
      this.setState({ dropdownVisible: false });
    }
  };

  // componentDidUpdate(prevProps: Props) {
  //   const { pathname } = this.props.location;

  //   if (pathname !== prevProps.location.pathname) {
  //     this.forceUpdate();
  //     console.log('lel');
  //   }
  // }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      searchValue: event.currentTarget.value,
      titleChecked: !this.state.titleChecked,
    });
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // this.props.history.push(`/search/${this.state.searchValue}`);

    this.setState({ searchValue: '' });
  };

  handleSignOut = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    const {
      signOut,
      currentUser: { name },
    } = this.props;

    signOut();
    // Toast.success(`See you soon, ${name}!`, 1500);
  };

  // handleToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   event.preventDefault();

  //   this.setState({
  //     titleChecked: !this.state.titleChecked,
  //   });
  // };

  render(): JSX.Element {
    const { currentUser } = this.props;
    const {
      searchValue,
      popupVisible,
      dropdownVisible,
      titleChecked,
    } = this.state;

    // console.log(popupVisible);
    // console.log(dropdownVisible);

    // console.log(titleChecked);

    return (
      <nav role='navigation' className='navbar'>
        <input id='menu-toggle' type='checkbox' />
        <label className='menu-button-container' htmlFor='menu-toggle'>
          <div className='menu-button'></div>
        </label>

        <form onSubmit={this.handleSubmit} className='navbar__main'>
          <div
            className={`navbar__main--container ${
              dropdownVisible ? 'navbar__main--container--focused' : ''
            }`}
          >
            <button
              className='navbar__main--btn-search'
              type='submit'
              value='Submit'
            >
              <ion-icon name='search'></ion-icon>
            </button>

            <input
              id='searchBar'
              className='navbar__main--searchbar'
              type='text'
              placeholder='Search...'
              autoComplete='off'
              onChange={this.handleSearch}
              value={searchValue}
            />
            <div className='navbar__main--dd-icon'>
              <ion-icon
                name={`caret-${dropdownVisible ? 'up' : 'down'}-sharp`}
              ></ion-icon>
            </div>

            {dropdownVisible ? (
              <form
                className='navbar__main--dropdown'
                onSubmit={this.handleSubmit}
              >
                <div className='navbar__main--dropdown--header'>
                  Narrow your search results
                </div>

                <div className='navbar__main--dropdown--row'>
                  <label htmlFor='title'>Title search </label>
                  <input
                    type='checkbox'
                    id='title'
                    name='title'
                    value='title'
                    onChange={this.handleSearch}
                    checked={titleChecked}
                  />
                </div>

                <div className='navbar__main--dropdown--row'>
                  <label htmlFor='location'>Location: </label>
                  <select name='location' id='location'>
                    <option value='ro'>Romania</option>
                    <option value='en'>World</option>
                  </select>
                </div>

                <div className='navbar__main--dropdown--row'>
                  <label htmlFor='date'>Date: </label>
                  <select name='date' id='date'>
                    <option value=''>Anytime</option>
                    <option value=''>Past hour</option>
                    <option value=''>Past 24 hours</option>
                    <option value=''>Past week</option>
                    <option value=''>Past year</option>
                  </select>
                </div>

                <div className='navbar__main--dropdown--row'>
                  <label htmlFor='sort'>Sort by: </label>
                  <select name='sort' id='sort'>
                    <option value='relevancy'>Relevancy</option>
                    <option value='popularity'>Popularity</option>
                    <option value='publishedAt'>Published At</option>
                  </select>
                </div>

                <div className='navbar__main--dropdown--btns'>
                  {/* <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton link='/auth/sign-up'>Sign up</CustomButton> */}
                </div>
              </form>
            ) : null}
          </div>
        </form>

        <ul className='navbar__secondary'>
          <li>
            <Link to='/'>
              <ion-icon name='home'></ion-icon>
            </Link>
          </li>
          <li>
            <Link to='/discover'>
              <ion-icon name='compass'></ion-icon>
            </Link>
          </li>
          <li>
            {currentUser ? (
              <div>
                <img
                  src={defaultLogo}
                  alt='User Profile'
                  className='navbar__secondary--logo'
                />
                {popupVisible ? (
                  <div className='navbar__secondary--profile'>
                    <Link
                      to='/profile'
                      className='navbar__secondary--profile--link-1'
                    >
                      <img
                        src={defaultLogo}
                        alt='User Profile'
                        className='navbar__secondary--logo'
                      />
                    </Link>

                    <h4 className='navbar__secondary--profile--x'>
                      {currentUser.name}
                    </h4>
                    <div className='navbar__secondary--profile--x'>
                      {currentUser.email}
                    </div>
                    <Link
                      to='/profile'
                      className='navbar__secondary--profile--link-2'
                    >
                      Manage your Onews Account
                    </Link>
                    <hr className='navbar__secondary--profile--x'></hr>
                    <div className='navbar__secondary--profile--placeholder'>
                      Add another account
                    </div>
                    <hr className='navbar__secondary--profile--x'></hr>
                    <CustomButton profile onClick={this.handleSignOut}>
                      Sign Out
                    </CustomButton>
                    <hr className='navbar__secondary--profile--x'></hr>
                    <div className='navbar__secondary--profile--footer'>
                      <span className='navbar__secondary--profile--x'>
                        Privacy Policy
                      </span>
                      <span className='navbar__secondary--profile--x'> | </span>
                      <span className='navbar__secondary--profile--x'>
                        Terms of Service
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link to='/auth/sign-in'>
                <ion-icon name='person-circle'></ion-icon>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

interface LinkStateProps {
  currentUser: User;
}

interface LinkDispatchProps {
  signOut: () => void;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  signOut: () => dispatch(signOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
