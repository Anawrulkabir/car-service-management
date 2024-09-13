import Image from "next/image";
import React from "react";
import Button from "./Button";
import ReadMore from "./ReadMore";

const LatestNewsAhosan = () => {
  return (
    <div>
      <div>
        <div>
          <p>Read what happen on our shop</p>
          <p className="text-3xl font-bold">Latest News and Update</p>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="flex flex-col items-center content-center mb-5">
            <Image
              className="rounded-3xl"
              src="https://i.ibb.co.com/dQ3kSww/Untitled-4-car.jpg"
              alt="image"
              width={500}
              height={300}
            />
            <div className="flex text-center flex-col">
              <div className="flex text-center flex-row justify-between mt-5">
                <span className="text-s">Date:20th January 2024</span>
                <p className="text-s">
                  Written by <span>Mr. John Washington</span>
                </p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold">Generator of components <br /> which you should know</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing <br />
                  elit. Veniam unde praesentium rerum aut ipsum, <br />
                  quos itaque fuga doloribus mollitia quisquam nesciunt!.
                </p>
              </div>
            </div>
            <ReadMore></ReadMore>
          </div>
          <div className="flex flex-col items-center content-center mb-5">
            <Image
              className="rounded-3xl"
              src="https://i.ibb.co.com/72hj4Gt/Untitled-5-car.jpg"
              alt="image"
              width={500}
              height={300}
            />
            <div className="flex text-center flex-col">
              <p className="text-3xl font-bold">Luxury Car</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Veniam unde praesentium rerum aut ipsum, <br />
                quos itaque fuga doloribus mollitia quisquam nesciunt! <br />
                Voluptas asperiores neque esse excepturi quisquam ut nihil
                eligendi.
              </p>
            </div>
            <ReadMore></ReadMore>
          </div>
          <div className="flex flex-col items-center content-center mb-5">
            <Image
              className="rounded-3xl"
              src="https://i.ibb.co.com/pvBDCNp/Untitled-6-car.jpg"
              alt="image"
              width={500}
              height={300}
            />
            <div className="flex text-center flex-col">
              <p className="text-3xl font-bold">Luxury Car</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Veniam unde praesentium rerum aut ipsum, <br />
                quos itaque fuga doloribus mollitia quisquam nesciunt! <br />
                Voluptas asperiores neque esse excepturi quisquam ut nihil
                eligendi.
              </p>
            </div>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAhosan;
