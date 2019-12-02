import React, { useEffect } from 'react';
import { getSubjectCategories, Subject } from './apiService';
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    category: {
        fontSize: '1.1em',
        margin: '5px 10px 0 10px',
    },
    subject: {
        margin: '0px 5px 0 5px',
    },
});

function SubjectList() {
    const [subjects, setSubjects] = useState<Array<Subject>>([]);
    const classes = useStyles();
    useEffect(() => {
        getSubjectCategories().then(setSubjects);
    }, []);
    return (
        <div>
            <Grid container justify="center">
                {subjects.map(sub => (
                    <Grid item xs={3} className={classes.subject}>
                        <h3>{sub['_id']}</h3>
                        <Grid container>
                            {sub['unique_categories'].map(cat => (
                                <Grid item className={classes.category}>
                                    {cat}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default SubjectList;