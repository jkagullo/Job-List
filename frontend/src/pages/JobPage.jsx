import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from '../components/Job';
import '../JobPage.css';

const dbUrl = 'https://job-list-uk79.onrender.com';

const JobPage = () => {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState({
        poster: '',
        title: '',
        role: '',
        company: '',
        link: '',
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const res = await axios.get(dbUrl);
        setJobs(res.data.jobs);
    }

    const createJobs = async () => {
        await axios.post(dbUrl, newJob);
        fetchJobs();

            // Clear the input fields after submitting the new job
        setNewJob({
            poster: '',
            title: '',
            role: '',
            company: '',
            link: '',
        });
    }

    const deleteJobs = async (id) => {
        await axios.delete(`${dbUrl}/${id}`);
        fetchJobs();
    }

    const updateJobs = async (id, updatedJob) => {
        try {
            await axios.put(`${dbUrl}/${id}`, updatedJob);
            fetchJobs();
        } catch (error){
            console.error(`Error updating job: ${error}`);
        }
    }

    return (
        <div className="job-page">
            <h1>Job List</h1>
            <p className="note"> Note: This website doesn't have any authentication feature so any user can edit/delete a job list.</p>
            <div className="form-container">
            <h2>Add a New Job</h2>
                <input
                    type="text"
                    placeholder="Poster (Your name)"
                    value={newJob.poster}
                    onChange={(e) =>
                        setNewJob({ ...newJob, poster: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={newJob.title}
                    onChange={(e) =>
                        setNewJob({ ...newJob, title: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={newJob.role}
                    onChange={(e) =>
                        setNewJob({ ...newJob, role: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Company"
                    value={newJob.company}
                    onChange={(e) =>
                        setNewJob({ ...newJob, company: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Link"
                    value={newJob.link}
                    onChange={(e) =>
                        setNewJob({ ...newJob, link: e.target.value })
                    }
                />
                <button className="add-button" onClick={createJobs}>
                    Add Job
                </button>
            </div>
            <div className="job-list">
                {jobs.map((job) => (
                    <Job key={job._id} job={job} onDelete={() => deleteJobs(job._id)} onUpdate={updateJobs} />
                ))}
            </div>
        </div>
    )
}

export default JobPage;