import useMainState from "../Global/jotai";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Sigin = () => {
  const navigate = useNavigate();
  const [data, newdata] : any = useMainState()
  // const [newState, setNewState]: any = useMainState();

  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(data)
  const onSubmitData = handleSubmit((data: any) => {
    const { password, username, email } = data;
    newdata ({
      username,
      password,
      email,

    });
    navigate("/house");
  });

  return (
    <center>
      <div>Login</div>

      <form onSubmit={onSubmitData} className="bg-[#000] w-[30%] h-[67vh] flex-col items-center gap-[40px] flex rounded-[7px]">
     
        <div className="text-[#fff] flex justify-center items-center h-[50px]">Welcome</div>
          <input 
            placeholder="username"
            {...register("username")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none max-[500px]:flex"
          />
          <input
            placeholder="Email"
            {...register("email")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none max-[500px]:flex"
          />
          <input
            placeholder="Password"
            {...register("password")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none max-[500px]:flex"
         type="password" />
        <button
          type="submit"
          className="w-[300px] h-[40px] mt-[30px] text-white bg-[blue] rounded "
        >
          Submit
        </button>
      </form>
    </center>
  );
};

export default Sigin;
