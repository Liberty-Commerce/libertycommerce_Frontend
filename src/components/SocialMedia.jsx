import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'


function SocialMedia(){
    return(
        <>
            <div className="flex mt-24">
                <a className="ml-3" href="#">{<BsFacebook size={'30px'}/>}</a>
                <a className="ml-3" href="#">{<BsInstagram size={'30px'}/>}</a>
                <a className="ml-3" href="#">{<BsLinkedin size={'30px'}/>}</a>
                <a className="ml-3" href="#">{<BsTwitter size={'30px'}/>}</a>
            </div>
        </>
    )
}

export default SocialMedia;

