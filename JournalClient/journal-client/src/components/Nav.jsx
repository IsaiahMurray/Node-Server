import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const Nav = (props) => {

  return (
    <AppBar id="app-bar" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className=""
          color="inherit"
          aria-label="menu"
        >
        </IconButton>
        <Typography variant="h6">
          My Journal
        </Typography>
        <Button id="logout-button" onClick={props.clickLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
    )
}
export default Nav;