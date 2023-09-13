
const Button = ({ children }) => {
    return (
        <div>
            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-[#8BD826] hover:bg-[#061E43] duration-500 rounded-md sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                {children}
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    );
};

export default Button;