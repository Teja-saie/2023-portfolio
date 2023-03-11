import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

type Props={
   title:string, content:string
}

export default function MyAccordion({ title, content }:Props) {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Accordion
        expanded={expanded}
        onChange={toggleExpanded}
      >
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
        >
          <h2>{title}</h2>
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
      </Accordion>
    );
  }
  