import banner from '../../../public/assets/demo-card-thumbnail.png';
import logo from '../../../public/assets/demo-user.png';
import { FaEye } from "react-icons/fa";
import newspaper from '../../../public/assets/newspaper.jpg';
import { Link } from 'react-router-dom';

const MiddleSide = ({data}) => {
    return (
        <div className="md:col-span-2 border">
            <div>
  {data.map((news

  ) => (
    <div key={news.image_url}>
      <article className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-4 bg-[#E7E7E7] p-4">
                    <div className="flex items-center">
                        <img
                            src={news.author.img}
                            alt="Author"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <h3 className="font-semibold">{news.author.name}</h3>
                            <p className="text-gray-500 text-sm">{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-500 hover:text-gray-700">
                            {/* <Share2 className="h-5 w-5" /> */}
                        </button>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                    {news.title}
                </h2>
                <img
                    src={news.image_url}
                    alt="News Image"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
               <p className="text-gray-700 mb-4">
         {news.details.length > 200 ? (
        <span>
          {news.details.slice(0, 200)}... <Link className='text-blue-300 font-semibold' to={`/MiddleSide/${news._id}`}>See more</Link>
        </span>
     ) : (
    news.details
     )}
     </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">

                        <span className="ml-4 text-gray-600 text-2xl font-semibold"></span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <FaEye className="text-gray-600" />
                        <span>{news.total_view}</span>
                    </div>
                </div>
            </article>

    </div>
  ))}
</div>

        </div>
    );
};

export default MiddleSide;
