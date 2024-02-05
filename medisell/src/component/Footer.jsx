import React,{useRef} from 'react'
import '../style/footer.css'



    


function Footer() {

    const focusValue = useRef(null);

    const onClick =()=>{
        focusValue.current.focus();
    };
  return (
    <div className='foooter'>
      
        <div className='foot'>     
        
        <div >
            <h2 className='h2_footer'>SMH</h2>
            <div className='und'></div>
            <div>
                <p className='p_footer'>About US</p>
                <p><button onClick={onClick}>Product</button></p>
                <p className='p_footer'>FAQs</p>
                <p className='p_footer'>Privacy Policy</p>
            </div>
        </div>
        <div >
            <h2 className='h2_footer'>SMH</h2>
            <div className='und'></div>
            <div>
                <p className='p_footer'>Products</p>
                <p className='p_footer'>jop portal</p>
                <p className='p_footer'>Skill portals</p>
                <p className='p_footer'>Achievment</p>
                
            </div>
        </div>
        <div >
            <h2 className='h2_footer'>SMH</h2>
            <div className='und' ></div>
            <div>
                <p className='p_footer'>About US</p>
                <p className='p_footer'>FAQs</p>
                <p className='p_footer'>Privacy Policy</p>
            </div>
        </div>
        </div> 
    </div>
  )
}


export default Footer;

//export const value = {userName:["amit","hritik"]};
