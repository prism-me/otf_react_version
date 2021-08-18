import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function AdmissionProcedure (props) {
    const classes = useStyles();
    return (
        <div className="AdmissionProcedure">
            <h1 className="Title">
                ADMISSIONS PROCEDURE
            </h1>
            <Container>
                <div className={classes.root}>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 1 </b>&mdash; STEP 1 – Complete the online application
                                    </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 2 </b>&mdash; Submit required documents for assessment via email to <u><a href="mailto:admissions@ags.ae" className={"text-dark"}>admissions@ags.ae</a></u>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        ertyusdfghjxcvb
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 3 </b>&mdash; Pay application fee and book an assessment schedule
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        ertyusdfghjxcvb
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 4 </b>&mdash; Admissions Committee reviews assessment and student’s profile
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        ertyusdfghjxcvb
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 5 </b>&mdash; Acceptance
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        ertyusdfghjxcvb
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                    <center>
                        <button className={"admissionButton"}>Click here to view the documents to be submitted once a student has been accepted and enrolled</button>
                    </center>
                </div>
            </Container>
        </div>
    );
}

export default AdmissionProcedure;