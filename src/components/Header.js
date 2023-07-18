import React, {useState} from 'react'
import {Image, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="header">
            <div className = "left">
                <label>Crowd Funding Logo</label>
            </div>
            <div className = "right">
                <Button>Logout</Button>
            </div>
        </div>
    </>
  )
}

export default Header
