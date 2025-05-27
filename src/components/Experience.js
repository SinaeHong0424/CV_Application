import React, { useState } from 'react';
import { Edit3, Save, Briefcase } from 'lucide-react';

const Experience = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: ''
  });
  const [displayData, setDisplayData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (data.company && data.position && data.responsibilities && data.dateFrom && data.dateUntil) {
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
          <Briefcase className="icon" size={24} />
          Practical Experience
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
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={data.company}
              onChange={handleInputChange}
              placeholder="Enter company name"
            />
          </div>
          <div className="form-group">
            <label>Position Title</label>
            <input
              type="text"
              name="position"
              value={data.position}
              onChange={handleInputChange}
              placeholder="e.g., Software Developer"
            />
          </div>
          <div className="form-group">
            <label>Main Responsibilities</label>
            <textarea
              name="responsibilities"
              value={data.responsibilities}
              onChange={handleInputChange}
              rows="4"
              placeholder="Describe your main responsibilities and achievements..."
            />
          </div>
          <div className="date-grid">
            <div className="form-group">
              <label>Date From</label>
              <input
                type="text"
                name="dateFrom"
                value={data.dateFrom}
                onChange={handleInputChange}
                placeholder="e.g., January 2020"
              />
            </div>
            <div className="form-group">
              <label>Date Until</label>
              <input
                type="text"
                name="dateUntil"
                value={data.dateUntil}
                onChange={handleInputChange}
                placeholder="e.g., Present or December 2022"
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            <Save className="icon" size={16} />
            Submit
          </button>
        </div>
      ) : (
        <div className="display-container">
          <div className="display-item">
            <span className="label">Company: </span>
            <span className="value">{displayData.company}</span>
          </div>
          <div className="display-item">
            <span className="label">Position: </span>
            <span className="value">{displayData.position}</span>
          </div>
          <div className="display-item">
            <span className="label">Responsibilities: </span>
            <p className="value responsibilities">{displayData.responsibilities}</p>
          </div>
          <div className="display-item">
            <span className="label">Duration: </span>
            <span className="value">{displayData.dateFrom} - {displayData.dateUntil}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;