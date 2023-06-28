import styles from "./signup.module.css";
import { TextField, Button, useTheme, IconButton, styled } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { tokens, ColorModeContext } from "../../theme";
import { number, z, string, required } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useController, Controller } from "react-hook-form";
import { useState, useContext } from "react";

import Header from "../../components/Header/header.component";
import Footer from "../../components/Footer-section/footer.component";
import GoBack from "../../components/goBack/goBack.component";

const country = [
  {
    value: "usa",
    label: "USA",
  },
  {
    value: "nigeria",
    label: "Nigeria",
  },
  {
    value: "canada",
    label: "Canada",
  },
  {
    value: "denmark",
    label: "Denmark",
  },
];

const MuiForm = ({ user = {} }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const schema = z
    .object({
      name: z.string().min(5),
      email: z.string().email(),
      age: z.number().min(17),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
      country: z.string().min(1),
    })
    .refine(
      (formValues) => formValues.password === formValues.confirmPassword,
      {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      }
    );

  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });
  const { field } = useController({ name: "country", control });
  const { errors } = formState;

  const submit = (formValues) => {
    alert("Form submitted successfully");
    console.log(formValues);
  };

  const StyledButton = styled(Button)({
    // backgroundColor: colors.primary[200],
    color: colors.grey[100],
  });
  return (
    <>
      <GoBack />
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img src="./logo.png" alt="company_logo" className={styles.logo} />
            <span>Alliance Arcade</span>
          </div>
          <p className={styles.title}>
            If you don't have an account, register here
          </p>
          <form onSubmit={handleSubmit(submit)}>
            <div className={styles.formgroup}>
              <TextField
                name="name"
                fullWidth
                required
                placeholder="Enter your name"
                type="text"
                label="Name"
                {...register("name")}
                error={errors.name ? true : false}
                helperText={
                  errors.name ? "Name should have at least five characters" : ""
                }
              />
            </div>

            <div className={styles.formgroup}>
              <TextField
                name="name"
                fullWidth
                required
                placeholder="Enter your name"
                type="text"
                label="Name"
                {...register("name")}
                error={errors.name ? true : false}
                helperText={
                  errors.name ? "Name should have at least five characters" : ""
                }
              />
            </div>
            <div className={styles.formgroup}>
              <TextField
                name="name"
                fullWidth
                required
                placeholder="Enter your name"
                type="text"
                label="Name"
                {...register("name")}
                error={errors.name ? true : false}
                helperText={
                  errors.name ? "Name should have at least five characters" : ""
                }
              />
            </div>

            <div className={styles.formgroup}>
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
              />
            </div>

            <div className={styles.formgroup}>
              <TextField
                defaultValue=""
                fullWidth
                placeholder="Enter Age"
                type="number"
                label="Age"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("age", { valueAsNumber: true })}
                error={errors.age ? true : false}
                helperText={errors.age?.message}
              />
            </div>

            <div className={styles.formgroup}>
              <TextField
                fullWidth
                placeholder="Enter your password"
                type="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("password")}
                error={errors.password ? true : false}
                helperText={errors.password?.message}
              />
            </div>

            <div className={styles.formgroup}>
              <TextField
                fullWidth
                placeholder="Confirm password"
                type="password"
                label="Confirm Password"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("confirmPassword")}
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword?.message}
              />
            </div>

            <div className={styles.formgroup}>
              <TextField
                SelectProps={{
                  native: true,
                }}
                select
                label="Country"
                defaultValue="nigeria"
                helperText="Please select your country"
                {...register("country")}
              >
                {country.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>

            <div className={styles.formgroup}>
              <StyledButton variant="outlined" type="submit">
                Submit
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MuiForm;
