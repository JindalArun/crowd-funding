import React from 'react';
import {useNavigate} from 'react-router-dom';
import data from '../utils/data.json'
import CampaignItem from './CampaignItem'

const CampaignList = () => {
  console.log(data);
  return (
    <div>
      <h1 class="text-center fst-italic">Campaigns</h1>
      <div className="row">
        {
          data.map((obj) => {
            return(
              <CampaignItem key={obj.id} compaignData= {obj}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default CampaignList;
