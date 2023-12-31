const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to get the correct month (0-indexed)
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

function formatDateToReadable(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

function getPhilippineTime() {
    const philippineTimeZone = 'Asia/Manila';
    const now = new Date();
    const offsetInMillis = now.getTimezoneOffset() * 60 * 1000;
    const philippineTimeInMillis = now.getTime() + (offsetInMillis + (8 * 60 * 60 * 1000)); // Manila is UTC+8
  
    return new Date(philippineTimeInMillis).toLocaleString('en-US', { timeZone: philippineTimeZone });
  }

module.exports = { formatDate, formatDateToReadable, getPhilippineTime }