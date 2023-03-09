import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';



export default function MyAccordion({ title, content }) {
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
  