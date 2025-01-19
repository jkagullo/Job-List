import React, { useState } from 'react';
import '../Job.css';

const Job = ({ job, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedJob, setUpdatedJob] = useState(job);

    const handleUpdate = () => {
        onUpdate(job._id, updatedJob);
        setIsEditing(false);
    };

    return (
        <div className="job-card">
            {isEditing? (
                <div className="edit-form">
                    <input
                    type="text"
                    value={updatedJob.poster}
                    onChange={(e) => setUpdatedJob({ ...updatedJob, poster: e.target.value})}
                    />
                    <input
                    type="text"
                    value={updatedJob.title}
                    onChange={(e) => setUpdatedJob({ ...updatedJob, title: e.target.value})}
                    />
                    <input
                    type="text"
                    value={updatedJob.role}
                    onChange={(e) => setUpdatedJob({ ...updatedJob, role: e.target.value})}
                    />
                    <input
                    type="text"
                    value={updatedJob.company}
                    onChange={(e) => setUpdatedJob({ ...updatedJob, company: e.target.value})}
                    />
                    <input
                    type="text"
                    value={updatedJob.link}
                    onChange={(e) => setUpdatedJob({ ...updatedJob, link: e.target.value})}
                    />
                    <div className="job-actions">
                    <button className="edit-button" onClick={handleUpdate}>Save</button>
                    <button className="delete-button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>{job.title}</h3>
                    <p>
                        <strong>Role:</strong> {job.role}
                    </p>
                    <p>
                        <strong>Company:</strong> {job.company}
                    </p>
                    <p>
                        <strong>Poster:</strong> {job.poster}
                    </p>
                    <p>
                    <strong>Link:</strong>{' '}
                        <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={job.link.length > 30 ? "truncate" : ""}
                        >
                            {job.link}
                        </a>
                     </p>
                    <div className="job-actions">
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="delete-button" onClick={() => onDelete(job._id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Job;