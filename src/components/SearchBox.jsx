import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import { useUrls } from "../useContext/useContext";

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

  const { addUrl } = useUrls();

  const inputLink = (e) => {
    const url = e.target.value;

    setLink(url);
  };

  const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

  const createShortUrl = async (url) => {
    // Create FormData with the provided URL
    const formData = new FormData();
    formData.append("url", url.search);

    const options = {
      method: "POST",
      url: "https://url-shortener-service.p.rapidapi.com/shorten",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
      },
      data: formData,
    };

    try {
      const response = await axios.request(options);
      const shortenedUrl = response.data.result_url;

      addUrl(url.search, shortenedUrl);

      reset();
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-72 bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-cover rounded-lg">
      <form
        onSubmit={handleSubmit(createShortUrl)}
        className="bg-DarkViolet bg-opacity-80 px-5 md:px-6 lg:px-9 xl:px-12 py-6 lg:py-8 xl:py-10 h-[165px]  md:h-[91px] lg:h-28 xl:h-32 rounded-lg z-50"
      >
        <div className="grid md:flex items-center md:space-x-2 lg:space-x-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Shorten a link here..."
            onChange={inputLink}
            className={`px-3 py-2 lg:py-2.5  outline-none rounded-md w-full md:w-5/6 focus:border-2 ${
              errors?.search ? "border  border-red-400" : "focus:border-Grey"
            }`}
            {...register("search")}
          />

          {errors?.search && (
            <small className="text-red-500 text-sm lg:hidden">
              {errors.search?.message}
            </small>
          )}

          <button className="w-full mt-5 md:mt-0  md:w-1/6 text-white px-2.5 lg:px-4 xl:px-6 py-2 lg:py-2.5 bg-Cyan hover:bg-cyan-200 font-bold xl:text-lg rounded-md">
            Shorten It!
          </button>
        </div>
        {errors?.search && (
          <small className="hidden lg:block text-red-500 text-sm">
            {errors.search?.message}
          </small>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
