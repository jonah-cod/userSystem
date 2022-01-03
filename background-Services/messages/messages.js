module.exports = {
    welcome: function(recipient) {
        return message = {
            from: 'jonatskin@gmail.com',
            to: [recipient.address],
            cc: ['idolearndaily@gmail.com'],
            subject: `Welcome aboard`,

            html: `<div>
                    <h4 style="text-align: center">Hi ${recipient.name}, \nWe are really excited to have you on our platform</h4>
                    <p style="text-align: center; color: grey">We can't wait to offer the best of our services to you!</p>
                    
            </div>`
        }
    },

    onboardProject: () => {
        return message = {
            from: 'jonatskin@gmail.com',
            //add your email address here on this array to receive the mail
            to: [],
            cc: ['idolearndaily@gmail.com'],
            subject: `Welcome aboard`,

            html: `<div>
                    <h4 style="text-align: center">We are really excited to let you know that you have been assigned to ${project.title} project</h4>
                    <p style="text-align: center; color: grey">You'll be meeting the rest of the team members on the platform, bye!</p>
                    
            </div>`
        }
    }
}