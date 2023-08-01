function getAge() {
//grab the form fields and the mainform
const day1 = document.querySelector('#day');
const month1 = document.querySelector('#month');
const year1 = document.querySelector('year');
const form = document.querySelector('#submit');

//reusable utility functions
const isRequired = value => value === '' ? false : true;
const isBetween = (length,min,max) => length < min || length > max ? false : true;

// days of the month validation
const checkDay = () => {
    let valid = false;
    const min = 1,
          max = 31;
          const day = day1.value.trim();
    if (!isRequired(day)) {
        showError(day, 'day cannot be blank');
    }   else if (!isBetween(day.length, min, max)) {
        showError(day, `day must be between ${min} and ${max} characters.`)
    }   else {
        showSuccess(day);
        valid = true;
    }
    return valid;
};

//month validation
const checkMonth = () => {
    let valid = false;
    const min = 1,
          max = 12;
          const month = month1.value.trim();
          if (!isRequired(month)) {
            showError(month, 'day cannot be blank');
        }   else if (!isBetween(month.length, min, max)) {
            showError(month, `day must be between ${min} and ${max} characters.`)
        }   else {
            showSuccess(month);
            valid = true;
        }
        return valid;      
};


































































































}