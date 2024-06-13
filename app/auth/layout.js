export default function AuthLayout({ children }) {
    
  
    return (
        <div className="flex w-screen h-screen">
            <div className="hidden lg:flex relative w-1/2">
                <div className="custom-card-left top-[35px] left-[183.69px] rotate-[-8.28deg]"></div>
                <div className="custom-card-left top-[170px] left-[35px] rotate-[2.13deg]"></div>
                <div className="custom-card-left top-[350px] left-[130px] rotate-[19.5deg]"></div>
            </div>
            <div className="w-full lg:w-1/2 h-screen overflow-x-hidden">
                {children}
            </div>
            
        </div>
    );
  }