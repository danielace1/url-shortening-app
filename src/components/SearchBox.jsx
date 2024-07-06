import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const Schema = z.object({
  search: z.string().url({ message: "Please add a valid link" }),
});

const SearchBox = () => {
  const [link, setLink] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(Schema) });

  const submitform = async (e) => {
    console.log(e);

    reset();
  };

  return (
    <div className="mx-40 2xl:mx-72 bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-cover rounded-lg">
      <form
        onSubmit={handleSubmit(submitform)}
        className="bg-DarkViolet bg-opacity-80 px-12 py-10 h-32 rounded-lg"
      >
        <div className="flex items-center space-x-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Shorten a link here..."
            onChange={link}
            className={`px-5 py-2.5  outline-none rounded-md w-5/6 focus:border-2   ${
              errors?.search ? "border  border-red-400" : "focus:border-Grey"
            }`}
            {...register("search")}
          />
          <button className="w-1/6 text-white px-6 py-2.5 bg-Cyan hover:bg-cyan-200 font-bold text-lg rounded-md">
            Shorten It!
          </button>
        </div>
        {errors?.search && (
          <small className="text-red-500 text-sm">
            {errors.search?.message}
          </small>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
