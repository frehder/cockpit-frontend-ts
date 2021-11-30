import React from 'react';
import * as Styled from './styles';
import request from '../../store/request';
import { getCaptchaValue, getCaptchaString } from '../../utils/form';
import Button from '../Button';

interface ICaptchaSchema {
    first: number;
    second: number;
    result: string;
}

interface IFormSchema {
    name: string;
    email: string;
    message: string;
    captcha: ICaptchaSchema;
}

interface IAlertSchema {
    type: string;
    message: string;
    field: string;
}

const Form = (): React.ReactElement => {
    const initialCaptchaValues = { first: getCaptchaValue(), second: getCaptchaValue(), result: '' };
    const initialFormValues = { name: '', email: '', message: '', captcha: initialCaptchaValues };
    const initialAlert = { type: '', message: '', field: '' };

    const [captchaLabel, setCaptchaLabel] = React.useState<string>('');
    const [values, setValues] = React.useState<IFormSchema>(initialFormValues);
    const [alert, setAlert] = React.useState<IAlertSchema>(initialAlert);

    React.useEffect(() => {
        setCaptchaLabel(getCaptchaString(values.captcha.first, values.captcha.second));
    }, [values]);

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            captcha: { first, second },
        } = values;
        const {
            target: { value, name: field },
        } = event;

        if (field === 'captcha') {
            setValues({ ...values, captcha: { first: first, second: second, result: value } });
            return;
        }

        if (['name', 'email', 'message'].indexOf(field) > -1) {
            setValues({ ...values, [field]: value });
            return;
        }
    };

    const handleSubmit = async (_event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            data: { type, message, field },
        } = await request.post(
            `${process.env.REACT_APP_API_BASE_URL}/formprocessing.v2.php`,
            { form: { ...values } },
            { headers: { 'Content-Type': 'application/json' } },
        );

        setAlert({ type: type, message: message, field: field });

        switch (type) {
            case 'success':
                setValues(initialFormValues);
                break;
            case 'error':
                setValues({ ...values, captcha: initialCaptchaValues });
                break;
        }
    };

    return (
        <Styled.Container>
            {!!alert.type && <Styled.Alert alertType={alert.type}>{alert.message}</Styled.Alert>}
            <Styled.FormGroup className={`form-field-input ${alert.field === 'name' ? 'form-field-error' : ''}`}>
                <Styled.Label htmlFor="form-name">Name</Styled.Label>
                <Styled.Input
                    type="text"
                    name="name"
                    id="form-name"
                    placeholder="Name (erforderlich)"
                    onChange={handleFieldChange}
                    value={values.name}
                />
            </Styled.FormGroup>
            <Styled.FormGroup className={`form-field-input ${alert.field === 'email' ? 'form-field-error' : ''}`}>
                <Styled.Label htmlFor="form-email">Email</Styled.Label>
                <Styled.Input
                    type="email"
                    name="email"
                    id="form-email"
                    placeholder="Email (erforderlich)"
                    onChange={handleFieldChange}
                    value={values.email}
                />
            </Styled.FormGroup>
            <Styled.FormGroup className={`form-field-textarea ${alert.field === 'message' ? 'form-field-error' : ''}`}>
                <Styled.Label htmlFor="form-message">Nachricht</Styled.Label>
                <Styled.Textarea
                    id="form-message"
                    name="message"
                    rows={6}
                    placeholder="Nachricht (erforderlich)"
                    onChange={handleFieldChange}
                    value={values.message}
                ></Styled.Textarea>
            </Styled.FormGroup>
            <Styled.FormGroup className={`form-field-input ${alert.field === 'captcha' ? 'form-field-error' : ''}`}>
                <Styled.Label htmlFor="form-captcha">{captchaLabel}</Styled.Label>
                <Styled.Input
                    type="number"
                    name="captcha"
                    id="form-captcha"
                    min="0"
                    max="18"
                    step="1"
                    placeholder="Spamschutz (erforderlich)"
                    onChange={handleFieldChange}
                    value={values.captcha.result}
                />
            </Styled.FormGroup>
            <Styled.FormGroup className="form-button-submit">
                <Button label="Senden" onClick={handleSubmit} />
                <Styled.Help>Alle Felder sind erforderlich.</Styled.Help>
            </Styled.FormGroup>
        </Styled.Container>
    );
};

export default Form;
