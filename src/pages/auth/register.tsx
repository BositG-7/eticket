import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, InputBase, Paper, PasswordInput, Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Api, Types } from "modules/auth";
import { clearSessionReset, clearSessionVerification, getSessionVerification } from "services/store";

import cursor from "../../assets/images/cursor.png";
import threeD from "../../assets/images/threeD.png";

const schema = yup.object({
   username: yup.string().min(4).label("Username").required(),
   password: yup.string().min(1).label("Password").required(),
   re_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .label("Confirm password")
      .required()
});

const Register = () => {
   const { getInputProps, onSubmit } = useForm<Types.IForm.Register>({
      initialValues: {
         first_name: "",
         last_name: "",
         username: "",
         password: "",
         re_password: ""
      },
      validate: yupResolver(schema)
   });

   useEffect(() => {
      clearSessionReset();
   }, []);

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const onRegister = async (data: Types.IForm.Register) => {
      setLoading(true);

      const { email }: any = getSessionVerification();

      try {
         const requestData = {
            ...data,
            email
         };

         await Api.Register(requestData);

         navigate("/rules");
         setLoading(false);
         clearSessionVerification();
      } catch (err: any) {
         notifications.show({
            message: err.data.username
         });
         setLoading(false);
      }
   };

   return (
      <Box h="90vh" w="100%" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "200px" }}>
         <Button
            onClick={() => navigate("/auth/verification")}
            sx={{
               position: "absolute",
               top: 24,
               left: 36
            }}
         >
            Back
         </Button>
         <div className="right">
            <img src={cursor} alt="cursor" />
         </div>

         <form onSubmit={onSubmit(onRegister)}>
            <Paper bg="var(--paper-bg)" w={400}>
               <Flex direction="column" gap={20} align="center" p={20}>
                  <Flex direction="column" gap={22} w="100%">
                     <InputBase autoFocus placeholder="username" radius="sm" {...getInputProps("username")} />

                     <PasswordInput
                        placeholder="Password"
                        radius="sm"
                        sx={{
                           border: "none"
                        }}
                        {...getInputProps("password")}
                     />
                     <PasswordInput
                        placeholder="Confirm password"
                        radius="sm"
                        sx={{
                           border: "none"
                        }}
                        {...getInputProps("re_password")}
                     />

                     <Button
                        loading={loading}
                        type="submit"
                        sx={{
                           color: "rgba(0, 106, 255, 1)",
                           height: "50px",
                           backgroundColor: "rgba(231, 240, 255, 1)",
                           fontSize: "20px",
                           "&:hover": {
                              color: "white"
                           }
                        }}
                     >
                        Register
                     </Button>
                     <Text size="16px" color="rgba(17, 17, 17, 0.36)" sx={{ alignSelf: "center" }}>
                        Akkauntingiz bormi? unda <Link to="/auth/login">Login!</Link>
                     </Text>
                  </Flex>
               </Flex>
            </Paper>
         </form>

         <div className="left">
            <img src={threeD} alt="threeD" />
         </div>
      </Box>
   );
};

export default Register;
