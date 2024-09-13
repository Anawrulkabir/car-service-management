import Image from "next/image";
import React from "react";
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

const CustomerReview = () => {
  return (
    <div className="mt-10">
 <div>
 <h1 className="text-sm font-bold">We promise to you best service ever</h1>
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
            className="rounded-3xl"
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

          <div className="items-center content-center">
            <h1 className="text-2xl font-bold text-blue-900">STEVEN SMITH</h1>
            <p className="font-semibold">Media Person</p>
          </div>
          <hr />
          <p className="items-center content-center">
            Book World library is an absolute gem in our community! The staff
            are always friendly and helpful, making every visit a delight. The
            collection is extensive, catering to all ages and interests. Whether
            you into classic literature or the latest bestsellers, you
            sure to find something captivating here. I love spending my
            afternoons getting lost in the pages of their wonderful books.
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
            className="rounded-3xl"
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

          <div className="items-center content-center">
            <h1 className="text-2xl font-bold text-blue-900">SOFIA ARORA</h1>
            <p className="font-semibold">Journalist</p>
          </div>
          <hr />
          <p className="items-center content-center">
            Book World library is a literary oasis in the midst of our busy
            lives. From the moment you step through the doors, you are greeted
            with warmth and a genuine passion for literature. I appreciate how
            the library caters to readers of all ages, with dedicated sections
            for children, teens, and adults. Whether I am seeking inspiration,
            knowledge, or simply a good story.
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
            className="rounded-3xl"
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

          <div className="items-center content-center">
            <h1 className="text-2xl font-bold text-blue-900">JONATHAN SMITH</h1>
            <p className="font-semibold">Social Activist</p>
          </div>
          <hr />
          <p className="items-center content-center">
            I cannot speak highly enough of Book World library! It is not just a
            place to borrow books; it is a haven for book lovers. The ambiance is
            cozy and inviting, perfect for curling up with a good book. What is
            more, they frequently host engaging events and book clubs, fostering
            a sense of community among readers. Thank you, Book World, for
            enriching our lives with your fantastic library!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
