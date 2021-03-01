import React from 'react';
import Hero from '../../components/Page/Hero';
import Form from '../../components/Form';

const Contact = (): React.ReactElement => {
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
