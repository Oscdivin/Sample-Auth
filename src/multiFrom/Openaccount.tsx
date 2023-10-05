
import useMainState from "../Global/jotai";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const StepThree = () => {
  const [anyThing, setAnything]: any = useMainState();

  const schema = yup.object({
    EmailPassword: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = handleSubmit((data: any) => {
    const { EmailPassword } = data;
    setAnything({
       username: anyThing?.username,
      email: anyThing?.email,
      password: anyThing?.password,
      EmailPassword,
    })().then(() => {
      setAnything(null);
    });

    console.log(typeof EmailPassword);
    console.log(EmailPassword);
  });

  console.log(anyThing);
  return (
    <center>
      <div>Welcome</div>

      <br />
      <br />

      <form onSubmit={onSubmitData} className="bg-[#000] w-[30%] h-[50vh]">
        <br />

        <br />
        <div  className="bg-[#000] w-[30%] h-[20vh] flex-col items-center gap-[30px] flex rounded-[7px]">
          <div className="text-[#ffff]">Login Your Account</div>
          <input
            placeholder="Your EmailPassword"
            {...register("EmailPassword")} type="password"
            className="w-[300px] h-[40px] border rounded pl-2 outline-none "
          />
        </div>

        <button
          className="w-[300px] h-[40px] mt-[30px] text-white bg-purple-500 rounded "
          type="submit"
        >
          Submit
        </button>

      </form>
    </center>
  );
};

export default StepThree;