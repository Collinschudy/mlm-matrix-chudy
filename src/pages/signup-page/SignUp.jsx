import { useState, useContext, useEffect } from "react";

import styles from "./signup.module.css";
import Logo from "../../logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";

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
import {
  setUserInfo,
  setUserTokenAndEmail,
} from "../../redux/userInfo/userInfoAction";

const SignUpPage = ({ user = {}, userVerify, setUserVerify }) => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [parent_code, setParentCode] = useState("");
  const location = useLocation();

  useEffect(() => {
    const extractRef = () => {
      const { search } = location;
      const urlSearchParams = new URLSearchParams(search);
      const parent_code = urlSearchParams.get("ref");
      setParentCode(parent_code);
    }
    
extractRef();
  }, []);

  const phoneRegex = new RegExp(
    /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|801|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907|911|912|913|914|915|916|917|918|919)([0-9]{7})$/
  );

  const schema = z
    .object({
      first_name: z.string().min(3),
      last_name: z.string().min(3),
      email: z.string().email(),
      phone_number: z.string().regex(phoneRegex, "Enter a valid phone number"),
      password: z.string().min(6).max(20),
      password_confirmation: z.string().min(6).max(20),
    })
    .refine(
      (formValues) => formValues.password === formValues.password_confirmation,
      {
        message: "Passwords do not match",
        path: ["password_confirmation"],
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
    const {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      password_confirmation,
    } = formValues;

    try {
      const res = await axios.post(
        "https://mlm.a1exchange.net/api/v1/auth/register",
        {
          first_name,
          last_name,
          email,
          phone_number,
          parent_code,
          password,
          password_confirmation,
        }
      );
    
      setSubmitting(true);
      setUserVerify(email);
      navigate("/verify");
    } catch (err) {
      console.log(err);
      if (err.code === "ERR_NETWORK"){
        toast.error("Your connection timed out")
      }
      else if (err.code === "ERR_BAD_REQUEST")
      toast.error("Email or Phone Number has already been taken");
    }

    handleReset();
    setSubmitting(false);
  };

  return (
    <>
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
                <Link to="/login">log in here</Link>
              </span>
            </p>
            <div className={styles.socialicons}>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>

              <IconButton sx={{ color: "white" }}>
                <WhatsAppIcon />
              </IconButton>
            </div>
            <p className={styles.footnote}>
              Alliance Arcade. All rights reserved
            </p>
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
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  placeholder="first name"
                  name="firstname"
                  id="firstname"
                  autoFocus
                  {...register("first_name")}
                />
                <div className={styles.errors}>
                  {errors.first_name
                    ? "first name should have at least three characters"
                    : ""}
                </div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  placeholder="last name"
                  name="lastname"
                  {...register("last_name")}
                />
                <div className={styles.errors}>
                  {errors.last_name
                    ? "last name should have at least three characters"
                    : ""}
                </div>
              </div>

              {/* <div className={styles.formgroup}>
                <label htmlFor="last_name">Username</label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  {...register("username")}
                />
                <div className={styles.errors}>
                  {errors.username
                    ? "username should have at least three characters"
                    : ""}
                </div>
              </div> */}

              <div className={styles.formgroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  autoComplete="off"
                />
                <div className={styles.errors}>{errors.email?.message}</div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  {...register("phone_number")}
                />
                <div className={styles.errors}>
                  {errors.phone_number?.message}
                </div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="phone">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                <div className={styles.errors}>{errors.password?.message}</div>
              </div>

              <div className={styles.formgroup}>
                <label htmlFor="phone">Confirm your password</label>
                <input
                  type="password"
                  name="phone"
                  {...register("password_confirmation")}
                />
                <div className={styles.errors}>
                  {errors.password_confirmation?.message}
                </div>
              </div>

              <div className={styles.formgroup}>
                <button
                  type="submit"
                  disabled={submitting}
                  className={styles.button}
                >
                  {submitting ? "submitting..." : "submit"}
                </button>
              </div>
            </form>
            <ToastContainer limit={1} />
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail,
});

const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
