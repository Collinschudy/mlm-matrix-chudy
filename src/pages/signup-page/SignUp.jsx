import { useState, useContext } from "react";

import styles from "./signup.module.css";
import Logo from "../../logo.png";
import { useNavigate, Link } from "react-router-dom";

import { number, z, string, required } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useController, Controller } from "react-hook-form";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { setUserInfo, setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";

const SignUpPage = ({ user = {}, userVerify, setUserVerify}) => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();


  const phoneRegex = new RegExp(
    /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|801|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/
  );

  const schema = z
    .object({
      firstname: z.string().min(3),
      lastname: z.string().min(3),
      username: z.string().min(3),
      email: z.string().email(),
      phone_number: z.string().regex(phoneRegex, "Enter a valid phone number"),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine(
      (formValues) => formValues.password === formValues.confirmPassword,
      {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      }
    );

  const { register, handleSubmit, control, formState, reset } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const handleReset = () => {
    reset();
  };

  const submit = async (formValues) => {
    const { firstname, lastname, email, username, phone_number, password } =
      formValues;
     
    try {
      const res = await axios.post(
        "https://mlm.zurupevarietiesstore.com/api/auth/register",
        {
          firstname,
          lastname,
          username,
          email,
          phone_number,
          password,
        }
      );
      const token = res.data.data.token;
      setSubmitting(true);
      setUserVerify({"token":token,
      "email": email})
      navigate('/verify')
    } catch (err) {
      toast.error(err.message);
    }

    // handleReset();
    setSubmitting(false);
  };

  return (
    <>
    {/* {console.log(userVerify)} */}
      <div className={styles.wrap}>
        <section className={styles.inner}>
          <img
            src="./images/signup.jpg"
            alt="background"
            className={styles.backgroundImage}
          />
          <div className={styles.text}>
            <div className={styles.logowrapper}>
              <img
                src={Logo}
                alt="logo"
                className={styles.logo}
                onClick={() => navigate("/")}
              />
              <span className={styles.logo_text}>
                Alliance <span className={styles.spantwo}>Arcade</span>
              </span>
            </div>
            <p className={styles.signinparagraph}>
              If you already have an account, you can{" "}
              <span>
                <Link to="/signin">log in here</Link>
              </span>
            </p>
            <div className={styles.socialicons}>
              <IconButton>
                <FacebookIcon />
              </IconButton>

              <IconButton>
                <WhatsAppIcon />
              </IconButton>
            </div>
          </div>
        </section>
        <section className={styles.formsection}>
          <div className={styles.formwrapper}>
            <div className={styles.logowrapper2}>
              <img
                src={Logo}
                alt="logo"
                className={styles.logo2}
                onClick={() => navigate("/")}
              />
              <span className={styles.logo_text2}>
                Alliance <span className={styles.spantwo}>Arcade</span>
              </span>
            </div>
            <p className={styles.title}>Registration Form</p>

            <p className={styles.description}>Fill in your details below:</p>
            <form onSubmit={handleSubmit(submit)} autoComplete="off">
              <div className={styles.formgroup}>
                <label htmlFor="firstname">First Name:</label>
                <input
                  type="text"
                  placeholder="first name"
                  name="firstname"
                  id="firstname"
                  autoFocus
                  {...register("firstname")}
                />
                <div className={styles.errors}>
                  {errors.firstName
                    ? "first name should have at least three characters"
                    : ""}
                </div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="last-name">Last Name:</label>
                <input
                  type="text"
                  placeholder="last name"
                  name="lastname"
                  {...register("lastname")}
                />
                <div className={styles.errors}>
                  {errors.firstName
                    ? "last name should have at least three characters"
                    : ""}
                </div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="last_name">Username:</label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  id='last_name'
                  {...register("username")}
                />
                <div className={styles.errors}>
                  {errors.username
                    ? "username should have at least three characters"
                    : ""}
                </div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  autoComplete="off"
                />
                <div className={styles.errors}>{errors.email?.message}</div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="number"
                  name="phone"
                  {...register("phone_number")}
                />
                <div className={styles.errors}>{errors.phone_number?.message}</div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="phone">Password:</label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                <div className={styles.errors}>{errors.password?.message}</div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="phone">Confirm your password:</label>
                <input
                  type="password"
                  name="phone"
                  {...register("confirmPassword")}
                />
                <div className={styles.errors}>
                  {errors.confirmPassword?.message}
                </div>
              </div>

              <div className={styles.formgroup}>
                <button type="submit" disabled={submitting}>
                  {submitting ? "submitting..." : "submit"}
                </button>
              </div>
            </form>
            <ToastContainer limit={1}/>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail
})

const mapDispatchToProps = dispatch => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
