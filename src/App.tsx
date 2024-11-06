import React from 'react';
import './App.css';
import {Blob} from "./components/Blob";
import {DebounceInput} from './components/DebounceInput'
import {createTheme, IconButton, ThemeProvider} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [username, setUsername] = React.useState("username");
    const [photo, setPhoto] = React.useState<string | null>(null);


    const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];

        if (!file) {
            return
        }

        setPhoto(URL.createObjectURL(file))
    }


    return <ThemeProvider theme={darkTheme}>
        <div className={"container"}>
            <Blob value={username} photo={photo}/>
            <div className={"inputContainer"}>
                <DebounceInput
                    debounceTimeout={300}
                    handleDebounce={setUsername}
                    placeholder={"Username"}
                    variant="outlined"
                    fullWidth
                />
                <IconButton
                    component="label"
                    color="primary"
                    size="large"
                >
                    <CameraAltIcon/>
                    <input
                        className={"hiddenInput"}
                        type="file"
                        onChange={handleSelectImage}
                        accept="image/*"
                        capture
                    />
                </IconButton>
            </div>
        </div>
    </ThemeProvider>
}

export default App;
