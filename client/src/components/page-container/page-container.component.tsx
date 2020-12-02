import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { createStructuredSelector } from "reselect";
import { AppActions } from "../../redux/store";
import {
  setUserSidebarMenu,
  setUserWeatherMenu,
} from "../../redux/user/user.actions";
import {
  selectUserSidebarMenu,
  selectUserWeatherMenu,
} from "../../redux/user/user.selectors";

import { useMediaQuery } from "react-responsive";

import "./page-container.styles.scss";

const PageContainer = (props: any) => {
  const {
    userSidebarMenu,
    userWeatherMenu,
    setUserSidebarMenu,
    setUserWeatherMenu,
  } = props;

  // console.log(userSidebarMenu, userWeatherMenu);

  const handleMediaLarge = (matches: any) => {
    // console.log(matches);

    if (matches) {
      setUserSidebarMenu(false);
    } else {
      setUserSidebarMenu(true);
    }
  };

  const handleMediaMedium = (matches: any) => {
    // console.log(matches);

    if (matches) {
      setUserWeatherMenu(false);
    } else {
      setUserWeatherMenu(true);
    }
  };

  // Handle SidebarMenu
  const mediaLarge = useMediaQuery(
    { maxWidth: 1000 },
    undefined,
    handleMediaLarge
  );

  // Handle WeatherMenu
  const mediaMedium = useMediaQuery(
    { maxWidth: 800 },
    undefined,
    handleMediaMedium
  );

  return (
    <div
      className={`page-container ${
        !userSidebarMenu && !userWeatherMenu
          ? "page-container--both"
          : !userSidebarMenu
          ? "page-container--sidebar"
          : !userWeatherMenu
          ? "page-container--weather"
          : ""
      }`}
    >
      <div className="page-container__content">{props.children}</div>
    </div>
  );
};

interface LinkDispatchProps {
  setUserSidebarMenu: (bool: boolean) => void;
  setUserWeatherMenu: (bool: boolean) => void;
}

const mapStateToProps = createStructuredSelector({
  userSidebarMenu: selectUserSidebarMenu,
  userWeatherMenu: selectUserWeatherMenu,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  setUserSidebarMenu: (bool) => dispatch(setUserSidebarMenu(bool)),
  setUserWeatherMenu: (bool) => dispatch(setUserWeatherMenu(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);