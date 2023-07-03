import { Toolbar, AppBar } from '@mui/material';
import theme from '../../colorTheme';

import './navigation.css'

const Navigation = () => {

  return (
      <AppBar theme={theme} color="neutral" position="static">
        <Toolbar className="toolbar-custom">
          <p className="toolbar-par"> Home </p>
          <p className="toolbar-par"> Projects </p>
          <p className="toolbar-par"> Contact </p>
        </Toolbar>
      </AppBar>
  )
}

export default Navigation