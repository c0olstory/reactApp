import { createTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/purple';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: deepPurple[400],
    },
  },
});

export default theme