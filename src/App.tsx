import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import logo from './logo.svg';
import './sass/_main.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content" style={{ width: '70vw', height: '20vw' }}>
                <Stack>
                    <Typography variant="h2">Hello, I'm Nima.</Typography>
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <img src={logo} className="App-logo" alt="logo" style={{ objectFit: 'cover', width: '10vw', height: '10vw' }} />
                        <img
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png'}
                            className="App-logo"
                            alt="logo"
                            style={{ objectFit: 'cover', width: '20vw', height: '12vw' }}
                        />
                        <img
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'}
                            className="App-logo"
                            alt="logo"
                            style={{ width: '10vw', height: '10vw' }}
                        />
                        <img src={'https://miro.medium.com/max/1280/1*rxJgPRBppDajIlafVyffQw.png'} className="App-logo" alt="logo" style={{ width: '35vw', height: '10vw' }} />
                    </div>
                    <Stack justifyContent={'space-between'}>
                        <Button sx={{ fontSize: '1.6rem' }}>Services &gt;</Button>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default App;
