import React from 'react'
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 480,
    },
    text:{
        fontSize: 80
    }
  }));
  
function Home() {
    const classes = useStyles();
    const [language, setLanguage] = React.useState('pt-Br');

    const handleChange = (event) => {
        alert(event.target.value)
        setLanguage(event.target.value);
    };
    return (
        <Grid container spacing={3} direction={"column"} justify={"center"} alignItems={"center"} xs={12} sm={12} lg={12} xl={12}>
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
                        <MenuItem value={'pt-Br'}>Português</MenuItem>
                        <MenuItem value={'en'}>Inglês</MenuItem>
                        <MenuItem value={'es'}>Espanhol</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <h1 className={classes.text}>Olá… Eu quero jogar um jogo...</h1>
            </Grid>
            <Grid>
                <iframe title="gif" src="https://giphy.com/embed/mEDGieu919tyE" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </Grid>
        </Grid>
    )
}
export default Home
