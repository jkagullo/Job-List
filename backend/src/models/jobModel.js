import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    poster: {
        type: String,
        requird: [true, "Poster name is required"],
    },
    title: {
        type: String,
        required: [true, "Job title is required"],
    },
    role: {
        type: String,
        required: [true, "Job role is required"],
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
    },
    link: {
        type: String,
        required: [true, "Job link is required"],
    }
}, {timestamps: true});

const Job = mongoose.model('Job', jobSchema);

export default Job;