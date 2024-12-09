import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { SlCalender } from "react-icons/sl";
import home from '../../../public/assets/our-first-home.png';
import cusin from '../../../public/assets/cusin.jpg';
import stadium from '../../../public/assets/stadium.jpg';

const LeftSideNav = () => {

    const [cetagory,setCetagory]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCetagory(data));
    },[]);
    return (
        <div className="">
            <h2 className="text-2xl font-semibold p-4 bg-[#E7E7E7] px-full py-3">All Caterogy </h2>
            <div>
            {
                cetagory.map(caragery=> <Link className="block my-4 p-3 text-gray-500 font-semibold ml-4" to={`/caragery/${caragery.id}`} key={caragery.id}>
                {caragery.name}
                </Link>)
            }
            </div>
            <div  className="">
            <div className="w-auto my-10 p-1">
  <figure>
    <img
      src={home}
      className="rounded-lg"
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="my-4 font-semibold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <div className="flex justify-between">
    <p className="font-semibold">Sports</p>
    <p className="flex gap-4 items-center"> <SlCalender /> {moment().format("MMM Do YY")}</p>

    </div>
  </div>
</div>

{/* 2nd card  */}

<div className="w-auto my-10 p-1">
  <figure>
    <img
      src={cusin}
      className="rounded-lg"
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="my-4 font-semibold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <div className="flex justify-between">
    <p className="font-semibold">Sports</p>
    <p className="flex gap-4 items-center"> <SlCalender /> {moment().format("MMM Do YY")}</p>

    </div>
  </div>
</div>


{/* 3rd card  */}

<div className="w-auto my-10 p-1">
  <figure>
    <img
      src={stadium}
      className="rounded-lg"
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="my-4 font-semibold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <div className="flex justify-between">
    <p className="font-semibold">Sports</p>
    <p className="flex gap-4 items-center"> <SlCalender /> {moment().format("MMM Do YY")}</p>

    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default LeftSideNav;