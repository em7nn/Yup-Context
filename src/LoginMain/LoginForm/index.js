import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import "./index.scss"

export const LoginForm = () => {
    let { id } = useParams();
    const schema = Yup.object().shape({

        email: Yup.string()
            .email("Invalid email address")
            .required("The email you entered isn`t connected to an account. Find your account and log in. "),
        password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required")
    })

    return (
        <>
            <Formik
                initialValues={{ password: "", email: "" }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="formback">
                            <div className="obsi">
                                <label className="d-block" htmlFor="email"></label>
                                <Field style={touched.email && errors.email && { border: "1px solid red" }} className="inp" placeholder="Email or phone number" name="email" type="email" />
                                <div className="errorlar"><ErrorMessage className="d-block" name="email" /></div>
                            </div>
                            <div className="obsi">
                                <label className="d-block" htmlFor="password"></label>
                                <Field style={touched.password && errors.password && { border: "1px solid red" }} placeholder="Password" className="inp" name="password" type="password" />
                                <div className="errorlar"><ErrorMessage className="d-block" name="password" /></div>
                            </div>
                            <button className="btn" type="submit">Log In</button>
                            <a href="!#">Forgotten Password ?</a>
                            <div className="hr"></div>
                            <div className='create-btn'>
                                <Link to="/register" className='butte'><button id='createbtn'>Create New Account</button></Link>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
            <h1>{id}</h1>
        </>
    );
}
export default LoginForm