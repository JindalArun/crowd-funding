import React from 'react'
import {useNavigate} from 'react-router-dom';

const CampaignItem = (props) => {
    const obj = props.compaignData

    const navigate =useNavigate();

    const handleClick = () =>{
        console.log("donate btn click");
        navigate('/donation', {state: {amtReq : obj.targetAmount}});
    }

    return (
        <> 
            <div className="col-sm-3">
                <div className="card p-3 m-4">
                    <img src={obj.image} className="card-img-top" alt="..." />
                    <div className="ratio ratio-4x3">
                    <iframe 
                            src="https://www.youtube.com/embed/your_video_id" 
                            title="Fundraising video" 
                            allowfullscreen></iframe>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{obj.title}</h5>
                        <p className="card-text">{obj.description}</p>
                        <label className="form-label">Funds Needed: {obj.targetAmount}</label><br/><br/>
                        <button className="btn btn-lg btn-primary mt-3 " onClick={handleClick}>Donate Now</button>
                    </div>
                    
                </div>
            </div>
        </>
        )
}

export default CampaignItem
