import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack/Stack';
import Grow from '@mui/material/Grow/Grow';
import Introduction from './pages/Introduction';
import './sass/_main.scss';

function App() {
    const [checked, setChecked] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setChecked(false);

        setTimeout(() => {
            setChecked(true);
        }, 1000);
    }, [page]);

    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content" style={{ width: '75vw', height: '22.5vw' }}>
                <Stack sx={{ width: '100%', height: '100%' }}>
                    <Grow in={checked} timeout={1000}>
                        <div style={{ width: '100%', height: '100%' }}>{page === 0 && <Introduction setPage={setPage} checked={checked} />}</div>
                    </Grow>
                </Stack>
            </div>
        </div>
    );
}

export default App;
