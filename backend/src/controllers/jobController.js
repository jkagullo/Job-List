import Job from '../models/jobModel.js';

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.status(200).json({
            message: "Jobs fetched successfully",
            status: "Success",
            jobs: jobs
        });
    } catch (err){
        res.status(500).json({
            message: "Jobs not fetched",
            status: "Error",

        });
    }
}

export const addJobs = async (req, res) => {
    try {
        const { poster, title, role, company, link } = req.body;
        const job = new Job({
            poster,
            title,
            role,
            company,
            link
        });
        const createdJob = await job.save();
        res.status(201).json({
            message: "Job added successfully",
            status: "Success",
        });
    } catch (err){
        res.status(501).json({
            message: "Job not added",
            status: "Error",
        });
    }
}


export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { poster, title, role, company, link } = req.body;

        const job = await Job.findById(id);

        if (job) {
            job.poster = poster;
            job.title = title;
            job.role = role;
            job.company = company;
            job.link = link;

            const updatedJob = await job.save();
            res.status(200).json({
                message: "Job updated successfully",
                status: "Success",
                data: updatedJob
            });
        } else {
            res.status(404).json({
                message: "Job not found",
                status: "Error",
            });
        }
    } catch (err){
        res.status(501).json({
            message: "Job not updated",
            status: "Error",
        });
    }
}

export const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findByIdAndDelete(id);

        if (job) {
            res.json({
                message: "Job deleted successfully",
                status: "Success",
            });
        } else {
            res.status(404).json({
                message: "Job not found",
                status: "Error",
            });
        }
    } catch (err){
        console.log("Error deleting job: ", err);
        res.status(500).json({
            message: "Job not deleted",
            status: "Error",
        });
    }
}