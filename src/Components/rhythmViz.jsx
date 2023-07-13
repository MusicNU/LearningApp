import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import { useTheme} from '@mui/material/styles';

  const Circ = (props) => {  
    return (

    <svg className = "RhythCirc" width="200" height="200" viewBox="0 0 210 210">
      <circle cx="100" cy="100" r="90" stroke-width="3" fill={props.color} />
      <circle cx="100" cy="100" r="60" fill="#ADD8E6" />
      <circle cx="100" cy="100" r="20" fill="#7393B3" />
    </svg>
    )
  }

  export function sun() {
    return (
      <svg className = "RhythCirc" width="200" height="200" viewBox="0 0 210 210">

    </svg>
    )
  }

export default Circ;