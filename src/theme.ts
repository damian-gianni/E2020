import { createMuiTheme } from "@material-ui/core/styles";
import { grey, amber, red } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: grey,
    secondary: amber,
    error: red,
    type: "dark"
  }
});
