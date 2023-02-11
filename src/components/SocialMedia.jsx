import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'


function SocialMedia(){
    return(
        <>
            <div className="flex mt-4">
                <a className="mr-3 hover:text-teal-600" href="#">{<BsFacebook size={'30px'}/>}</a>
                <a className="mr-3 hover:text-teal-600" href="#">{<BsInstagram size={'30px'}/>}</a>
                <a className="mr-3 hover:text-teal-600" href="#">{<BsLinkedin size={'30px'}/>}</a>
                <a className="mr-3 hover:text-teal-600" href="#">{<BsTwitter size={'30px'}/>}</a>
            </div>
        </>
    )
}

export default SocialMedia;

