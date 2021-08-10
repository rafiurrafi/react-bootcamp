import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/formStyles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { LanguageContext } from "./contexts/LanguageContext";

// const languageContent = {
//   EN: {
//     headerText: "Sign In",
//     email: "Email",
//     password: "Password",
//     checkboxText: "Remember Me",
//     buttonText: "Sign In",
//   },
//   FR: {
//     headerText: "Se Connecter",
//     email: "Adresse Èlectronique",
//     password: "Mot de Passe",
//     checkboxText: "Souviens-toi De Moi",
//     buttonText: "Se Connecter",
//   },
//   SP: {
//     headerText: "Registrarse",
//     email: "Correo Electrónico",
//     password: "Contraseña",
//     checkboxText: "Recuérdame",
//     buttonText: "Registrarse",
//   },
// };

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { classes } = this.props;
    const { language, onLanguageChange } = this.context;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          {/* LOCK ICON */}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          {/* HEADER */}
          <Typography variant="h5"></Typography>

          {/* LANGUAGE SELECT */}
          <Select value={language} onChange={onLanguageChange}>
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="FR">French</MenuItem>
            <MenuItem value="SP">Spanish</MenuItem>
          </Select>

          {/* SIGN-IN FORM */}
          <form className={classes.form}>
            {/* EMAIL */}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            {/* PASSWORD */}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" />
            </FormControl>
            {/* CHECKBOX */}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="checkbox"
            />
            {/* SIGN-IN BUTTON */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
