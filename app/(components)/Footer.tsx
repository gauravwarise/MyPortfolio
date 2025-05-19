import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" container  mx-auto py-10">
        <div className='fixed bottom-0 left-1 lg:left-[5%] '>
          <div className="flex text-muted text-xl flex-col  gap-3">
            <a href="https://github.com/gauravwarise"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gaurav-warise-19160b203/"><FaLinkedin /></a>
          </div>
          <div className='w-[1px] h-[200px] bg-muted m-auto mt-3' ></div>

        </div>
        <div className='fixed bottom-0 right-1 lg:right-[5%] '>
          <a className="text-muted text-sm text-center md:text-right mt-4 md:mt-0" style={{ writingMode: "vertical-lr" }} href='mailto:gauravwarise04@gmail.com'>gauravwarise04@gmail.com</a>
          <div className='w-[1px] h-[200px] bg-muted m-auto mt-3' ></div>
      </div>
      <p className='text-center text-muted' >Designed & Build by Gaurav</p>
    </footer>
  );
};

export default Footer