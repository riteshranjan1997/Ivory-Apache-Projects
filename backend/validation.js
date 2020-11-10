const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().min(5).required(),
    last_name: Joi.string(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  console.log("in login validation ",data)
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const emailValidation = (data) =>{
  const schema = Joi.object({
    email:Joi.string().min(6).required().email()
  });
  return schema.validate(data)
}
const passwordValidation = (data) =>{
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data)
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.emailValidation = emailValidation;
module.exports.passwordValidation = passwordValidation;
