import React, { useState } from 'react';
import { Edit3, Save, GraduationCap } from 'lucide-react';

const Education = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    school: '',
    title: '',
    date: ''
  });
  const [displayData, setDisplayData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (data.school && data.title && data.date) {
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
          <GraduationCap className="icon" size={24} />
          Educational Experience
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
            <label>School Name</label>
            <input
              type="text"
              name="school"
              value={data.school}
              onChange={handleInputChange}
              placeholder="Enter school name"
            />
          </div>
          <div className="form-group">
            <label>Title of Study</label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleInputChange}
              placeholder="e.g., Bachelor of Computer Science"
            />
          </div>
          <div className="form-group">
            <label>Date of Study</label>
            <input
              type="text"
              name="date"
              value={data.date}
              onChange={handleInputChange}
              placeholder="e.g., 2019-2023"
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
            <span className="label">School: </span>
            <span className="value">{displayData.school}</span>
          </div>
          <div className="display-item">
            <span className="label">Title of Study: </span>
            <span className="value">{displayData.title}</span>
          </div>
          <div className="display-item">
            <span className="label">Date: </span>
            <span className="value">{displayData.date}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;