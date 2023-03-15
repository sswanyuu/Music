import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  alpha_num as alphaNum,
  confirmed,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("alpha_num", alphaNum);
    defineRule("passwords_mismatch", confirmed);
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${ctx.field} is required`,
          email: `${ctx.field} is not a valid email`,
          min: `${ctx.field} must be at least ${ctx.rule.params[0]} characters`,
          max: `${ctx.field} must be less than ${ctx.rule.params[0]} characters`,
          alpha_spaces: `${ctx.field} may only contain alphabetic characters and spaces`,
          min_value: `${ctx.field} must be at least ${ctx.rule.params[0]}`,
          max_value: `${ctx.field} must be less than ${ctx.rule.params[0]}`,
          alpha_num: `${ctx.field} may only contain alpha-numeric characters`,
          passwords_mismatch: `the passwords do not match`,
          tos: `you must agree to the terms of service`,
        };
        const message = messages[ctx.rule.name] || `This field is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
