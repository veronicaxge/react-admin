import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";   
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header"; 

//define the initial values for the form fields
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

//use regular expression to validate phone number format (this comes from Stackoverflow)
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//define the validation logic for each field using yup library which provide premade validation functions
const userSchema = yup.object().shape({
    firstName: yup.string().required("required"), 
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valide") //first error message
        .required("required"), //second error message
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
})

const Form = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values); //submitting the form just logs the values to console for now and doesn't save it to a database.
    }

    return <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
        <Formik
            onSubmit={handleFormSubmit}
            initialValues = {initialValues}
            validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => ( 
                <form onSubmit={handleSubmit}>
                    <Box 
                        display="grid" 
                        gap="30px" 
                        gridTemplateColumns={"repeat(4, minmax(0, 1fr))"} //separate into 4 equal columns with min width 0 and max width 1 fraction of the available space
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, //if non mobile, use default behavior, else span all 4 columns
                        }}
                    >
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name" //what's displayed as the field title
                            onBlur={handleBlur} //the function that changes the focus state when user clicks away
                            onChange={handleChange} //the function that updates the value when user types
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName} //use "touched" to force it to boolean, so that the error only shows after user interacts with the field
                            helperText={touched.firstName && errors.firstName} //if touched and has error, show the error message
                            sx={{ gridColumn: "span 2" }} //span 2 columns
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name" //what's displayed as the field title
                            onBlur={handleBlur} //the function that changes the focus state when user clicks away
                            onChange={handleChange} //the function that updates the value when user types
                            value={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName} //use "touched" to force it to boolean, so that the error only shows after user interacts with the field
                            helperText={touched.lastName && errors.lastName} //if touched and has error, show the error message
                            sx={{ gridColumn: "span 2" }} //span 2 columns
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email" //what's displayed as the field title
                            onBlur={handleBlur} //the function that changes the focus state when user clicks away
                            onChange={handleChange} //the function that updates the value when user types
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email} //use "touched" to force it to boolean, so that the error only shows after user interacts with the field
                            helperText={touched.email && errors.email} //if touched and has error, show the error message
                            sx={{ gridColumn: "span 4" }} //span 2 columns
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number" //what's displayed as the field title
                            onBlur={handleBlur} //the function that changes the focus state when user clicks away
                            onChange={handleChange} //the function that updates the value when user types
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact} //use "touched" to force it to boolean, so that the error only shows after user interacts with the field
                            helperText={touched.contact && errors.contact} //if touched and has error, show the error message
                            sx={{ gridColumn: "span 4" }} //span 2 columns
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1" //what's displayed as the field title
                            onBlur={handleBlur} //the function that changes the focus state when user clicks away
                            onChange={handleChange} //the function that updates the value when user types
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1} //use "touched" to force it to boolean, so that the error only shows after user interacts with the field
                            helperText={touched.address1 && errors.address1} //if touched and has error, show the error message
                            sx={{ gridColumn: "span 4" }} //span 2 columns
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2" //what's displayed as the field title
                            onBlur={handleBlur} //the function that changes the focus state when user clicks away
                            onChange={handleChange} //the function that updates the value when user types
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2} //use "touched" to force it to boolean, so that the error only shows after user interacts with the field
                            helperText={touched.address2 && errors.address2} //if touched and has error, show the error message
                            sx={{ gridColumn: "span 4" }} //span 2 columns
                        />

                    </Box>

                <Box display ="flex" justifyContent="end" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                        Create New User
                    </Button>
                </Box>
                </form>
            )}
        </Formik>   
    </Box>
}

export default Form;

