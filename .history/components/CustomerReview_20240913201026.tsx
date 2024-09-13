import Image from "next/image";
import React from "react";
import {
  MdOutlineStarHalf,
  MdOutlineStarOutline,
  MdOutlineStarPurple500,
} from "react-icons/md";

const CustomerReview = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="text-center ">
        <h1 className="text-sm font-bold">
          We promise to you best service ever
        </h1>
        <h1 className="text-5xl text-orange-700 font-bold">Customer Review</h1>
      </div>

      <div className="md:flex md:justify-evenly md:space-x-2 space-y-2 mx-auto mt-10">


        
        <div className="w-1/3 items-center content-center border border-gray-500 rounded-2xl space-y-4 p-3">
          <div className="">
            {/* <img
              className=" flex items-center content-center"
              src="https://i.ibb.co/8cLhZhC/Men1.png"
              alt="Man"
            /> */}
            <Image
              className="rounded-3xl mx-auto"
              src="https://i.ibb.co/8cLhZhC/Men1.png"
              alt="image"
              width={400}
              height={300}
            />
          </div>

          <div className="flex text-2xl  text-yellow-500  justify-center">
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarHalf />
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900">STEVEN SMITH</h1>
            <p className="font-semibold">Media Person</p>
          </div>
          <hr />
          <p className="items-center content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quam eos voluptates beatae? Quam placeat sed temporibus laboriosam
            quibusdam repellat architecto accusantium aut, consequatur aliquam
            molestias in vitae iste provident? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Commodi aperiam quis facilis nihil ex
            recusandae dignissimos saepe animi consequatur vero, delectus
            laborum repellat libero, voluptatibus explicabo rerum fuga
            temporibus fugiat.
          </p>
        </div>






        <div className="w-1/3 items-center content-center border border-gray-500 rounded-2xl space-y-4 p-3">
          <div className="">
            {/* <img
              className=" flex items-center content-center"
              src="https://i.ibb.co/dJPrGWd/womenn.png"
              alt="Women"
            /> */}

            <Image
              className="rounded-3xl mx-auto"
              src="https://i.ibb.co/dJPrGWd/womenn.png"
              alt="image"
              width={400}
              height={300}
            />
          </div>

          <div className="flex text-2xl  text-yellow-500  justify-center">
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarHalf />
            </span>
            <span>
              <MdOutlineStarOutline />
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900">SOFIA ARORA</h1>
            <p className="font-semibold">Journalist</p>
          </div>
          <hr />
          <p className="items-center content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quam eos voluptates beatae? Quam placeat sed temporibus laboriosam
            quibusdam repellat architecto accusantium aut, consequatur aliquam
            molestias in vitae iste provident? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Commodi aperiam quis facilis nihil ex
            recusandae dignissimos saepe animi consequatur vero, delectus
            laborum repellat libero, voluptatibus explicabo rerum fuga
            temporibus fugiat.
          </p>
        </div>





        <div className="w-1/3 items-center content-center border border-gray-500 rounded-2xl space-y-4 p-3">
          <div className="">
            {/* <img
              className=" flex items-center content-center"
              src="https://i.ibb.co/cJ5MRLK/men2.png"
              alt="Man"
            /> */}
            <Image
              className="rounded-3xl mx-auto"
              src="https://i.ibb.co/cJ5MRLK/men2.png"
              alt="image"
              width={400}
              height={300}
            />
          </div>

          <div className="flex text-2xl  text-yellow-500  justify-center">
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900">JONATHAN SMITH</h1>
            <p className="font-semibold">Social Activist</p>
          </div>
          <hr />
          <p className="items-center content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quam eos voluptates beatae? Quam placeat sed temporibus laboriosam
            quibusdam repellat architecto accusantium aut, consequatur aliquam
            molestias in vitae iste provident? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Commodi aperiam quis facilis nihil ex
            recusandae dignissimos saepe animi consequatur vero, delectus
            laborum repellat libero, voluptatibus explicabo rerum fuga
            temporibus fugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
