import debounce from 'lodash.debounce';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

// const LOCAL_STORAGE_KEY = 'feedback-form-state';

const LocalStorageService = {
  key: 'feedback-form-state',

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  load() {
    return JSON.parse(localStorage.getItem(this.key));
  },

  clear() {
    localStorage.removeItem(this.key);
  },
};

// const formData = getFormDataFromLocaleStorage(LOCAL_STORAGE_KEY) ?? {
//   email: '',
//   message: '',
// };

const formData = LocalStorageService.load() ?? {
  email: '',
  message: '',
};

populateFormFields();

refs.feedbackForm.addEventListener('submit', handleFeedbackFormSubmit);
refs.feedbackForm.addEventListener('input', debounce(handleInputChange, 250));

function handleFeedbackFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  LocalStorageService.clear();
  resetFormData();
  // removeDataFromLocaleStorage(LOCAL_STORAGE_KEY);
}

function handleInputChange(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  LocalStorageService.save(formData);
  // setDataToLocaleStorage(LOCAL_STORAGE_KEY, formData);
}

function resetFormData() {
  Object.keys(formData).forEach(key => (formData[key] = ''));
}

function populateFormFields() {
  // const { email, message } = refs.feedbackForm.elements;
  // email.value = formData.email;
  // message.value = formData.message;

  Object.keys(formData).forEach(key => {
    refs.feedbackForm.elements[key].value = formData[key];
  });
}
