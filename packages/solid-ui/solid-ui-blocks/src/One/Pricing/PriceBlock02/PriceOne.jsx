import React, { useState } from "react";
import "react-rangeslider/lib/index.css";
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import './react-slider.css'


function PriceOne() {

    const [state, setState] = useState({
        tab3: " active show",
        tab4: " ",
        tabs_selectedTab1: " tabs_selectedTab",
        tabs_selectedTab2: ""
      });

      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value, });
      };

    
    
    return (
        <Box>
            
        </Box>
    )
}


export default PriceOne;