import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Link } from 'react-router-dom';

export default function TransitionsTooltips() {
  return (
    <div>

      <Tooltip TransitionComponent={Zoom} >
        <Link to={"/"}>Home</Link>
      </Tooltip>
    </div>
  );
}
