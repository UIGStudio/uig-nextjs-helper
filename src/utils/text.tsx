import {Fragment} from 'react';

export const nlToBr = (text: string) => {
    return (
        <Fragment>
            {text.split('\n').map((item, idx) => {
                return (
                    <Fragment key={idx}>
                        {Boolean(idx) && <br />}
                        {item}
                    </Fragment>
                );
            })}
        </Fragment>
    );
};
