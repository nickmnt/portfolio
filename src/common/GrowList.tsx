import { BoxProps, Grow } from '@mui/material';
import React from 'react';

export interface GrowListProps extends BoxProps {
    interval?: number;
    checked: boolean;
}

export function GrowList(props: GrowListProps) {
    const { interval = 350, children, checked } = props;

    return (
        <>
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child) ? (
                    <Grow in={checked} timeout={(index + 1) * interval}>
                        {child}
                    </Grow>
                ) : null
            )}
        </>
    );
}
