import React, { useState} from 'react';

const FundraisingInputScreen = () => {
  const [fundraisingData, setFundraisingData] = useState({
    name: '',
    description: '',
    targetAmount: '',
    image: null,
    video: null,
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFundraisingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFundraisingData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setFundraisingData((prevData) => ({
      ...prevData,
      video: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to backend)
    console.log(fundraisingData);
    

    // Reset the form
    setFundraisingData({
      name: '',
      description: '',
      targetAmount: '',
      image: null,
      video: null,
    });
  };

  return (
    <>
            <div className="container-fluid">
                <div className="wrapper">
                    <form className="fund-raising-form" onSubmit={handleSubmit}>
                        <h2 class="fst-italic mb-2">Raise Compaign Form</h2>
                        <div className="m-2 w-75">
                            <label className="form-label">Campaign Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control" 
                                placeholder="Enter campaign name..."
                                value={fundraisingData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="m2 w-75">
                                <label className="form-label">Description:</label>
                                <textarea
                                    id="description"
                                    className="form-control" 
                                    cols="55"
                                    rows="3"
                                    name="description"
                                    placeholder="Enter description..."
                                    value={fundraisingData.description}
                                    onChange={handleChange}
                                ></textarea>
                        </div>
                        <div className="m-2 w-75">
                            <label className="form-label">Target Amount:</label>
                            <input
                              type="number"
                              id="targetAmount"
                              name="targetAmount"
                              className="form-control" 
                              placeholder="Enter target amount..."
                              value={fundraisingData.targetAmount}
                              onChange={handleChange}
                            />
                        </div>
                        <div className="m-2 w-75">
                            <label className="form-label">Upload Image:</label>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              className="form-control" 
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                        </div>
                        <div className="m-2 w-75">
                              <label className="form-label">Upload Video:</label>
                              <input
                                type="file"
                                id="video"
                                name="video"
                                className="form-control" 
                                accept="video/*"
                                onChange={handleVideoChange}
                              />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary mt-3 ">Submit Compaign</button>
                    </form>
                </div>
            </div>
        </>

    
  );
};

export default FundraisingInputScreen;
