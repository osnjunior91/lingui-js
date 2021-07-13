import React from 'react'
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Trans } from '@lingui/macro'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 480,
    },
    text: {
        fontSize: 80
    }
}));

const Home = (props) => {
    const { language, onLanguageChange } = props
    const classes = useStyles();
    const handleChange = (event) => {
        onLanguageChange(event.target.value);
    };
    return (
        <Grid container spacing={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="language-label">Idioma</InputLabel>
                    <Select
                        labelId="language-label"
                        id="language"
                        value={language}
                        onChange={handleChange}
                        label="Idioma"
                        fullWidth
                    >
                        <MenuItem value={'pt-br'}>Português</MenuItem>
                        <MenuItem value={'en'}>Inglês</MenuItem>
                        <MenuItem value={'es'}>Espanhol</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <h1 className={classes.text}><Trans>Olá… Eu quero jogar um jogo...</Trans></h1>
            </Grid>
            <Grid>
                <iframe title="gif" src="https://giphy.com/embed/mEDGieu919tyE" width="480" height="267" frameBorder="0" allowFullScreen></iframe>
            </Grid>
        </Grid>
    )
}
export default Home
