import React, { useState } from 'react';
import { Edit3, Save, User } from 'lucide-react';

const GeneralInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [displayData, setDisplayData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (data.name && data.email && data.phone) {
      setDisplayData({ ...data });
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    if (displayData) {
      setData({ ...displayData });
    }
    setIsEditing(true);
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">
          <User className="icon" size={24} />
          General Information
        </h2>
        {displayData && !isEditing && (
          <button onClick={handleEdit} className="edit-btn">
            <Edit3 className="icon" size={16} />
            Edit
          </button>
        )}
      </div>

      {isEditing || !displayData ? (
        <div className="form-container">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            <Save className="icon" size={16} />
            Submit
          </button>
        </div>
      ) : (
        <div className="display-container">
          <div className="display-item">
            <span className="label">Name: </span>
            <span className="value">{displayData.name}</span>
          </div>
          <div className="display-item">
            <span className="label">Email: </span>
            <span className="value">{displayData.email}</span>
          </div>
          <div className="display-item">
            <span className="label">Phone: </span>
            <span className="value">{displayData.phone}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;