import Image from "next/image";
import React from "react";

const OurRecentProject = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-3xl text-orange-700 font-bl">Our Recent Projects</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet molestiae <br />id exercitationem vitae nobis quo? Reiciendis animi cumque odit reprehenderit? <br />Modi earum ducimus quo quasi. Saepe ullam pariatur maiores?</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        
        
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/yxgW60Ft/6.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/rsBsDzjm/5.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/G2SH1Xsv/4.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/G2pHNW9c/3.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/pdCmsWWG/2.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/jjtW6wbn/1.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/G3VH7SRC/7.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/jdfCGQqJ/8.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Image
            className="rounded-3xl"
            src="https://i.postimg.cc/13Z4Pn47/9.jpg"
            alt="image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default OurRecentProject;

// 
// 
// 
// 
// 
// 
// 
// 
// 
