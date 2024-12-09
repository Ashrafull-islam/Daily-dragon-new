import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import qZone1 from '../../../public/assets/swimming.png'
import qZone2 from '../../../public/assets/class.png'
import qZone3 from '../../../public/assets/playground.png'
import qZone4 from '../../../public/assets/bg.png'
const RightSideNav = () => {
    return (
        <>
        <div className="border p-2">
            <div className="p-2">
            <button className="btn btn-outline w-full">
            <FcGoogle className="text-xl" />
            Log in with Google
</button>
            </div>

            {/* github  */}
            <div className="p-2">
            <button className="btn btn-outline w-full">
            <FaGithub  className="text-xl" />
            Log in with Github
</button>
            </div>
        </div>


        <div className=" p-2 my-10 rounded-lg">
            <div className=" text-xl">
                <a href="" className="p-4 flex gap-2 justify-center items-center border">
            <FaFacebook></FaFacebook>
            <span>Facebook</span>
                </a>
            </div>

            {/* Twiter  */}
            <div className=" text-xl ">
                <a href="" className="p-4 flex gap-2 justify-center items-center border">
            <FaInstagram></FaInstagram>
            <span>Instagram</span>
                </a>
            </div>

            {/* x  */}
            <div className=" text-xl ">
                <a href="" className="p-4 flex gap-2 justify-center items-center border">
                <FaXTwitter></FaXTwitter>
            <span>Twitter</span>
                </a>
            </div>
            <h2 className="text-3xl font-semibold my-4">Q-Zone</h2>
            <div className="p-4 my-2">
            <img src={qZone1} alt="" />
            <img className="my-4" src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            
            <img src={qZone4} className="my-8" alt="background-image" />
            </div>
        </div>
        </>
    );
};

export default RightSideNav;