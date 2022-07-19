import React from 'react';
import { GrowList } from '../common/GrowList';
import logo from '../logo.svg';

export interface Props {
    setPage: (n: number) => void;
    checked: boolean;
}

export default function Introduction({ setPage, checked }: Props) {
    return (
        <>
            <h2>Hello, I'm Nima.</h2>
            <div style={{ display: 'flex', width: '100%', height: '10vw', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <GrowList checked={checked}>
                    <img src={'http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png'} className="App-logo" alt="logo" style={{ objectFit: 'cover', width: '10vw' }} />
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png'}
                        className="App-logo"
                        alt="logo"
                        style={{ objectFit: 'cover', width: '20vw' }}
                    />
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'}
                        className="App-logo"
                        alt="logo"
                        style={{ width: '10vw' }}
                    />
                    <img src={'https://miro.medium.com/max/1280/1*rxJgPRBppDajIlafVyffQw.png'} className="App-logo" alt="logo" style={{ width: '35vw' }} />
                </GrowList>
            </div>
            <button className="button-54" role="button" style={{ fontSize: '1.6rem' }}>
                &lt;&lt;&lt; ML/AI Services
            </button>
            <button className="button-54" role="button" style={{ fontSize: '1.6rem', marginLeft: '.5rem' }} onClick={() => setPage(1)}>
                Web Services &gt;&gt;&gt;
            </button>
        </>
    );
}
