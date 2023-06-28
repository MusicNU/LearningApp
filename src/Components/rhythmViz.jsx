import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import { useTheme} from '@mui/material/styles';

  const Circ = (props) => {  
    return (

    <svg className = "RhythCirc" height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill={props.color} />
    </svg>
    )
  }

export default Circ;