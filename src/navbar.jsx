import React, { Component, useContext } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/navbarStyles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";

import { ThemeContext } from "./contexts/themeContext";
import {
  LanguageContext,
  withLanguageContext,
} from "./contexts/languageContext";

const languageContent = {
  EN: {
    search: "Search",
    flag: "🇬🇧",
  },
  FR: {
    search: "Chercher",
    flag: "🇫🇷",
  },
  SP: {
    search: "Buscar",
    flag: "🇪🇸",
  },
};

const Navbar = (props) => {
  const { isDarkMode, onThemeChange } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes, value } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          {/* FLAG */}
          <IconButton className={classes.menuButton} color="inherit">
            <span role="img" aria-label="French Flag">
              {languageContent[language].flag}
            </span>
          </IconButton>

          {/* TITLE */}
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>

          {/* THEME SWITCH */}
          <Switch value={isDarkMode} onChange={onThemeChange} />

          <div className={classes.grow} />

          {/* SEARCH INPUT */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={languageContent[language].search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withLanguageContext(withStyles(styles)(Navbar));
