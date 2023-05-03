import React from 'react';
import './Footer.css';
import { Button, Container } from 'react-bootstrap';
import { FaEye, FaFacebook, FaInstagram, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
            <div className="row ">
                <div className="col-md-3 mb-5">
                    <h3 className='text-white'>Foodies</h3>
                    <p className='text-white'>Some interesting content in this <br />website</p>
                </div>
                <div className="col-md-3 mb-5">
                    <input className='mt-3 mb-3 ml-2 email' type="email" name="email" id="" placeholder='Your email' />
                    <Button className='btn btn-danger '>Subscribe</Button>
                </div>
                <div className="col-md-3 mb-5">
                    <h3 className='text-white'>Follow Us</h3>
                    <div>
                    <FaInstagram className='text-white me-3'></FaInstagram>
                    <FaFacebook className='text-white me-3'></FaFacebook>
                    <FaTwitter className='text-white me-3'></FaTwitter>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className='text-white'>Call Us</h3>
                    <h4 className='text-white'>028571478965</h4>
                </div>
                <hr className='text-white'/>
                <p className='text-white text-center'>@copyright by Foodies</p>
            </div>
            </Container>
        </div>
    );
};

export default Footer;