const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587, // Default port for STARTTLS
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS, // Ensure this is an App Password if 2-Step Verification is enabled
            },
            // Enable debug mode for more detailed logs
            debug: true,
        });

        let info = await transporter.sendMail({
            from: `StudyNotion <${process.env.MAIL_USER}>`, // Use the environment user email
            to: email,
            subject: title,
            html: body,
        });

        // Log the entire info object
        console.log('Email sent:', info);

        // Log specific properties if they exist
        if (info && info.response) {
            console.log('Email response:', info.response);
        } else {
            console.log('Email response property not found');
        }

        return info;
    } catch (error) {
        // Log the full error object
        console.error('Error occurred while sending email:', error);
        throw error;
    }
};

module.exports = mailSender;
