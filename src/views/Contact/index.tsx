import React from 'react';
import useTitle from '../../hooks/useTitle';
import Hero from '../../components/Page/Hero';
import Form from '../../components/Form';

const Contact = (): React.ReactElement => {
    useTitle('Kontakt');

    return (
        <>
            <Hero
                headline="Kontakt aufnehmen"
                subline="Wenn Sie glauben ich kann Sie unterstützen, freue ich mich von Ihnen zu hören."
            />
            <Form />
        </>
    );
};

export default Contact;
