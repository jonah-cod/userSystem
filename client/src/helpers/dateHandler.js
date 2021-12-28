module.exports = {
    handlemarkcomplete: (id) => {
        console.log(id);
    },
    handledate: (date) => {
        let newdate = new Date(date)
        return newdate.toISOString().split('T')[0].split("-").reverse().join("-")
    }
}