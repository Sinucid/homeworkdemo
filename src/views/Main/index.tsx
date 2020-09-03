import React, { FC, useState } from 'react';
import ContentWindow from '../../components/ContentWindow';
import ContentTitle from '../../components/ContentHeader';
import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import Radio from '../../components/Form/Radio';
import Checkbox from '../../components/Form/Checkbox';
import Select from '../../components/Form/Select';
import styles from './styles.module.scss';
import { Formik } from 'formik';
import {checkEmptyValues} from '../../common/funcs';
import * as yup from 'yup';
import re from '../../common/regexp';
// import { useMutation } from '@apollo/client';
// import {SIGNUP_MUTATION} from '../../api/mutations/signup';
// import {SignUpInputType} from '../../api/types';

const genders = [
    {title: 'Male', value: 'MALE'},
    {title: 'Female', value: 'FEMALE'}
];

const countries = require('../../common/country.json');

const validationSchema = yup.object().shape({
    name: yup.string()
      .matches(re.letters, 'Please enter a valid name')
      .required('Required'),
    email: yup.string()
      .email('Please enter a valid email address')
      .required('Required'),
    password: yup.string()
      .min(6, 'Password must contain at least 6 symbols')
      .required('Required'),
    country: yup.string()
      .required('You must select your country'),
    gender: yup.string()
      .required('You must select the gender'),
    accept: yup.boolean()
        .oneOf([true], 'You must accept the policies'),
});


const Main: FC = () => {
    let _mounted: boolean = true;
    const [loading, setLoading] = useState<boolean>(false);
    const [serverSuccess, setServerSuccess] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string>('');
    // const [signUpUser] = useMutation<SignUpInputType>(SIGNUP_MUTATION);

    const submit = (values: {}) => {
        setLoading(true);
        // signUpUser({variables: {...values}})
        //     .then(() => {
        //         if (_mounted){
        //             setServerError('');
        //             setServerSuccess(true);
        //         }
        //     })
        //     .catch(e => {
        //         if (_mounted){
        //             setServerError(e.message);
        //             setServerSuccess(false);
        //         }
        //     })
        //     .finally(() => {
        //         if (_mounted){
        //             setLoading(false);
        //         }
        //     });

        // TEMPORARY CODE
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    }

    return (
        <div className={styles.wrapper}>
            <ContentWindow>
                <ContentTitle>Create a new account</ContentTitle>

                <Formik
                    initialValues={{ 
                        name: '',
                        email: '',
                        password: '',
                        country: '',
                        gender: '',
                        accept: false
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values: {}) => {
                        submit(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        setFieldValue,
                        handleSubmit,
                    }) => {
                        const allFilled = checkEmptyValues(values);

                        return (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <Input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    error={!!touched.name}
                                    errorText={errors.name}
                                ></Input>

                                <Input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    icon={'email'}
                                    error={!!touched.email}
                                    errorText={errors.email}
                                />

                                <Input
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    icon={'lock'}
                                    error={!!touched.password}
                                    errorText={errors.password}
                                />

                                <Select 
                                    name="country"
                                    value={values.country}
                                    onChange={value => setFieldValue('country', value)}
                                    placeholder="Select country"
                                    options={countries}
                                    error={!!touched.country}
                                    errorText={errors.country}
                                />

                                <Radio
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    options={genders}
                                    error={!!touched.gender}
                                    errorText={errors.gender}
                                />

                                <Checkbox
                                    name="accept"
                                    value={values.accept}
                                    onChange={handleChange}
                                    error={!!touched.accept}
                                    errorText={errors.accept}
                                >
                                    Accept <a href="/">terms</a> and <a href="/">conditions</a> 
                                </Checkbox>

                                <div className={styles.buttonWrapper}>
                                    <Button
                                        buttonType="submit"
                                        disabled={!allFilled}
                                        loading={loading}
                                    >Sign up</Button>
                                </div>

                                {serverSuccess && <div className={styles.responseSuccess}>Success!</div>}
                                {!!serverError && <div className={styles.responseError}>{serverError}</div>}
                            </form>
                        )
                    }}
                </Formik>
            </ContentWindow>
        </div>
    )
}

export default Main;
