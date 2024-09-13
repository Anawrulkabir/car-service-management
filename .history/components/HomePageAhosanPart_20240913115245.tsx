import Image from "next/image";
import React from "react";
import Button from "./Button";
import LatestNewsAhosan from "./LatestNewsAhosan";
import FooterAhosan from "./FooterAhosan";





const HomePageAhosanPart = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co.com/Vq8FqrC/Untitled-1.png')]">
        
      </div>
      
      <div>
        <div>
          <p>Felling any kind of vehicle here</p>
          <p>Types of car we repair</p>
          <p>
            Our working sample <br /> with some picture
          </p>
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
                <p className="text-3xl font-bold">Luxury Car</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Veniam unde praesentium rerum aut ipsum, <br />quos itaque fuga doloribus mollitia quisquam nesciunt! <br />Voluptas asperiores neque esse excepturi quisquam ut nihil eligendi.</p>
            </div>
            <Button></Button>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Veniam unde praesentium rerum aut ipsum, <br />quos itaque fuga doloribus mollitia quisquam nesciunt! <br />Voluptas asperiores neque esse excepturi quisquam ut nihil eligendi.</p>
            </div>
            <Button></Button>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Veniam unde praesentium rerum aut ipsum, <br />quos itaque fuga doloribus mollitia quisquam nesciunt! <br />Voluptas asperiores neque esse excepturi quisquam ut nihil eligendi.</p>
            </div>
            <Button></Button>
          </div>
          
        </div>
      </div>


      <LatestNewsAhosan></LatestNewsAhosan>
      <FooterAhosan></FooterAhosan>
    </div>
  );
};

export default HomePageAhosanPart;



// 
// 