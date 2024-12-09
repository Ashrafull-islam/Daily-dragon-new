import  logo from '../../../public/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p className='my-6 text-gray-500'>Journalism Without Fear or Favour</p>
           <p className='text-xl font-semibold'>{moment().format('MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;