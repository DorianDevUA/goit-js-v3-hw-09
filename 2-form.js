import"./assets/styles-CCUWDoKp.js";import{d as s}from"./assets/vendor-CogN4WXw.js";const a={feedbackForm:document.querySelector(".feedback-form")},r={key:"feedback-form-state",save(e){localStorage.setItem(this.key,JSON.stringify(e))},load(){return JSON.parse(localStorage.getItem(this.key))},clear(){localStorage.removeItem(this.key)}},t=r.load()??{email:"",message:""};f();a.feedbackForm.addEventListener("submit",l);a.feedbackForm.addEventListener("input",s(m,250));function l(e){e.preventDefault();const o=e.currentTarget,{email:c,message:n}=t;if(!c||!n){alert("Fill please all fields");return}console.log(t),o.reset(),r.clear(),i()}function m(e){t[e.target.name]=e.target.value.trim(),r.save(t)}function i(){Object.keys(t).forEach(e=>t[e]="")}function f(){Object.keys(t).forEach(e=>{a.feedbackForm.elements[e].value=t[e]})}
//# sourceMappingURL=2-form.js.map
