/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const negotiateForm = document.getElementById('negotiate');
const hidden = document.getElementById('hidden');
const reportForm = document.getElementById('report');
const btnReport = document.getElementById('btn-report');
const btnBuy = document.getElementById('btn-buy');
const btn = document.getElementsByClassName('btn');
const forms = document.getElementById('form-wrap');
const cancel = document.getElementById('cancel');
const purchase = () => {
  negotiateForm.style.display = 'block';
  hidden2.style.display = 'none';
  hidden1.style.display = 'block';
  forms.style.display = 'block';
  negotiateForm.style.borderBottom = 'none';
  reportForm.style.display = 'none';
};

const reportAsFraud = () => {
  forms.style.display = 'block';
  reportForm.style.display = 'block';
  hidden1.style.display = 'none';
  hidden2.style.display = 'block';
  reportForm.style.borderBottom = 'none';
  negotiateForm.style.display = 'none';
};
