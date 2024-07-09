import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'

function Login() {
    return (
        <div>
            <Header />
            <div className='flex flex-row p-9 gap-60 place-items-start justify-center'>
                <div className='flex p-5 gap-10 items-center justify-center h-[600px] w-[500px]'>
                    <dotlottie-player src="https://lottie.host/38138100-272a-4de6-8f76-60bc4858cdca/kG38mnMeLr.json" 
                    background="transparent" 
                    speed="1" 
                    className='' 
                    loop
                    autoplay></dotlottie-player>
                </div>
                <div className='flex flex-col py-20 gap-10 '>
                    <a className='px-15 text-tertiary font-extrabold text-3xl'>Log in to your Udemy Account</a>
                    <div className='flex flex-col gap-6 w-[470px]' >
                    <input 
                        className='flex px-5 py-5 w-full border-tertiary border-2 text-tertiary'
                        placeholder='Email'
                        type='text'
                    
                    />
                    <input 
                        className='flex px-5 py-5 w-full border-tertiary border-2 text-tertiary'
                        placeholder='Password'
                        type='text'
                    
                    />
                    <button 
                        className='flex px-5 py-3 hover:bg-black w-full border-tertiary font-semibold bg-secondary text-white justify-center'
                        >
                    Log in
                    </button>
                    <div className='flex items-center justify-center gap-2'>
                    <div className='flex w-60 h-[1px]  bg-tertiary'>

                    </div>
                    <p className='text-tertiary text-center'>Other log in options</p>
                    <div className='flex items-center w-60 h-[1px] bg-tertiary'>

                     </div>
                    </div>
                    <div className='flex flex-row justify-center gap-6'>
                    <span role="img" aria-label="Google" className="flex text-2xl cursor-pointer border-tertiary border-[1px] px-1 py-1 h-12 w-12">
                     <img
                        src='https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0'
                        />
                     </span>
                     <span role="img" aria-label="Facebook" className="flex text-2xl cursor-pointer border-tertiary border-[1px] px-1 py-1 h-12 w-12">
                     <img
                        src='https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png'
                        />
                     </span>
                     <span role="img" aria-label="apple" className="flex text-2xl cursor-pointer border-tertiary border-[1px] px-1 py-1 h-12 w-12">
                     <img
                        src='https://i.pinimg.com/originals/8e/f8/e7/8ef8e7517ce4e8ba5c30c0e649892441.png'
                        />
                     </span>
                     
                     </div>
                </div>
            </div>
            
            
        </div>
        <Footer />
    </div>
    
    )
}

export default Login
