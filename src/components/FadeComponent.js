import React from 'react';

import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in/lib/FadeIn';

const FadeComponent = (props) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref}>
            <FadeIn visible={inView} delay={props.delay}>
                {props.children}
            </FadeIn>
        </div>
    )
};

FadeComponent.defaultProps = {
    delay: 50,
};

export default FadeComponent;