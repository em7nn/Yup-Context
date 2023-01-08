
import { ErrorMessage, Field, Formik, Form } from "formik";

import * as Yup from "yup";
import "./index.scss"
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('What`s your name?'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('What`s your name?'),
                email: Yup.string().email('Invalid email address').required('You`ll use this when you log in and if you ever need to reset your password.'),
                password: Yup.string().max(100, 'Invalid Password').required('Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ errors, touched }) => (
                <Form className="regi">
                    <div className="form-back">
                        <div className="til">
                            <div className="tetle">
                                <h2 class="first_title">Sign Up</h2>
                                <p class="first_sub_title" id="sub_title">It's quick and easy.</p>
                            </div>
                            <div className="icon">
                                <Link to="/"><i className="fa-solid fa-xmark"></i></Link>
                            </div>
                        </div>
                        <div className="hir"></div>
                        <div className="firstlast">
                            <div className="wwww">
                                <label htmlFor="firstName"></label>
                                <Field style={touched.firstName && errors.firstName && { border: "1px solid red" }} className="inple" placeholder="First name" name="firstName" type="text" />
                                <div className="errorlar"><ErrorMessage className="d-block" name="firstName" /></div>
                            </div>
                            <div className="www">
                                <label htmlFor="lastName"></label>
                                <Field style={touched.lastName && errors.lastName && { border: "1px solid red" }} className="inple" placeholder="Last name" name="lastName" type="text" />
                                <div className="errorlar"><ErrorMessage className="d-block" name="lastName" /></div>
                            </div>
                        </div>
                        <div className="all">
                            <label htmlFor="email"></label>
                            <Field style={touched.email && errors.email && { border: "1px solid red" }} className="inplar" placeholder="Mobile Number or email" name="email" type="email" />
                            <div className="errorlar"><ErrorMessage className="d-block" name="email" /></div>
                        </div>
                        <div className="all">
                            <label className="d-block" htmlFor="password"></label>
                            <Field style={touched.password && errors.password && { border: "1px solid red" }} className="inplar" placeholder="New password" name="password" type="password" />
                            <div className="errorlar"><ErrorMessage className="d-block" name="password" /></div>
                        </div>
                        <div className="birt"><p class="sub_title_2" id="sub_title">birthday <i class="fa-solid fa-circle-question"></i></p></div>

                        <div className="birthday">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select>
                                <option>Jan</option>
                                <option>Feb</option>
                                <option>Mar</option>
                                <option>Apr</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>Jul</option>
                                <option>Aug</option>
                                <option>Sep</option>
                                <option>Oct</option>
                                <option>Nov</option>
                                <option>Dec</option>
                            </select>
                            <select>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                            </select>
                        </div>
                        <div className="gender"><p class="sub_title_3" id="sub_titlee">gender <i class="fa-solid fa-circle-question"></i></p></div>
                        <div className="genderobsi">
                            <div class="female" id="all_gender">
                                <label for="female">Female</label>
                                <input className="w" type="radio" name="gender" value="female" />
                            </div>
                            <div class="male" id="all_gender">
                                <label for="male">Male</label>
                                <input className="w" type="radio" name="gender" value="male" />
                            </div>
                            <div class="other" id="all_gender">
                                <label for="other">Custom</label>
                                <input className="w" type="radio" name="gender" value="other" />
                            </div>
                        </div>
                        <div className="learn"><p>People who use our service may have uploaded your contact information to Facebook. <a href="!#">Learn more.</a></p></div>
                        <div className="term"><p>By clicking Sign Up, you agree to our <a href="!#">Term</a>, <a href="!#">Privacy Policy</a> and <a href="!#">Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.</p></div>
                        <button className="butte" type="submit">Sing Up</button>
                    </div>
                </Form>
            )}
        </Formik>
        //     <div class="main">
        //     <form className="fre">
        //       <div className="basdig">
        //       <div className="yazi"><h2 class="first_title">Sign Up</h2>
        //       <p class="first_sub_title" id="sub_title">It's quick and easy.</p> </div>
        //       <div className="icon"><Link to="/"><i className="fa-solid fa-xmark"></i></Link></div>
        //       </div>

        //       <hr />
        //       <div class="input">
        //         <input type="text" placeholder="First Name" class="first_name" id="all" required />
        //         <input type="text" placeholder="Sure Name" class="sure_name" id="all" required />
        //         <br />
        //         <input type="email" placeholder="Mobile number or email address" id="all1" required />
        //         <br />
        //         <input type="password" placeholder="New password" id="all1" required />
        //         <br />
        //       </div>
        //       <p class="sub_title_2" id="sub_title">Date of Birth</p>
        //       <select>
        //         <option>1</option>
        //         <option>2</option>
        //         <option>3</option>
        //         <option>4</option>
        //         <option>5</option>
        //         <option>6</option>
        //         <option>7</option>
        //         <option>8</option>
        //         <option>9</option>
        //         <option>10</option>
        //       </select>
        //       <select>
        //         <option>Jan</option>
        //         <option>Feb</option>
        //         <option>Mar</option>
        //         <option>Apr</option>
        //         <option>May</option>
        //         <option>Jun</option>
        //         <option>Jul</option>
        //         <option>Aug</option>
        //         <option>Sep</option>
        //         <option>Oct</option>
        //         <option>Nov</option>
        //         <option>Dec</option>
        //       </select>
        //       <select>
        //         <option>2022</option>
        //         <option>2021</option>
        //         <option>2020</option>
        //         <option>2019</option>
        //         <option>2018</option>
        //         <option>2017</option>
        //         <option>2016</option>
        //         <option>2015</option>
        //         <option>2014</option>
        //         <option>2013</option>
        //         <option>2012</option>
        //         <option>2011</option>
        //       </select>
        //       <br />

        //       <p class="sub_title_3" id="sub_title">Gender</p>
        //       <div class="female" id="all_gender">
        //         <label for="female"><b>Female</b> </label>
        //         <input type="radio" name="gender" value="female" />
        //       </div>
        //       <div class="male" id="all_gender">
        //         <label for="male"><b>Male</b></label>
        //         <input type="radio" name="gender" value="male" />
        //       </div>
        //       <div class="other" id="all_gender">
        //         <label for="other"><b>Custom</b></label>
        //         <input type="radio" name="gender" value="other" />
        //       </div>

        //       <br />
        //       <p class="sub_title_4">
        //         By clicking Sign Up, you agree to our <a href="#"> Terms, Data Policy</a> and
        //         <a href="">Cookie</a>
        //         Policy. You may receive SMS notifications from us and can opt out at any time.
        //       </p>
        //       <input type="submit" value="Signup" class="submit" />
        //     </form>
        //   </div>
    )
}