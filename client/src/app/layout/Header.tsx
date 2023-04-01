import { AppBar, FormControlLabel, FormGroup, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;

}

export default function Header({darkMode, toggleDarkMode}: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6">
                    MY-STORE
                </Typography>
                <FormGroup sx={{ ml: 4 }}>
                    <FormControlLabel control={<Switch checked={darkMode} onChange={toggleDarkMode} />} label="Dark Mode" />
                </FormGroup>
            </Toolbar>
        </AppBar>
    )
}