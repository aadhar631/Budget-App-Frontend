// Import the 'moment' library for date formatting
import moment from "moment";

// Define a function 'dateFormat' that takes a 'date' parameter
export const dateFormat = (date) => {
    // Use 'moment' to format the input 'date' as 'DD-MM-YYYY'
    return moment(date).format('DD-MM-YYYY');
}
