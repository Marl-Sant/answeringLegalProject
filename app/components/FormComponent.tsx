'use client';

import { useState, type FormEvent } from 'react';

type FieldKey = 'firstName' | 'lastName' | 'companyName' | 'email' | 'phoneNum';
type Errors = Partial<Record<FieldKey, string>>;

export default function Form() {
  /*
  I used a FieldKey and Errors types constrain keys in effory to keep inputs/validators in
  sync. I also kept accessibility in mind by using aria properties, like invalid and 
  describedby, for users that may use screen readers or other assistive tech.
  */


  const [values, setValues] = useState({ 
    firstName: '', 
    lastName: '',
    companyName: '',
    email: '',
    phoneNum: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v = values): Errors {
    const e: Errors = {};
    if (!v.firstName.trim()) e.firstName = 'First name is required.';
    else if (!/^[A-Za-z\s'-]+$/.test(v.firstName.trim())) e.firstName = 'Only letters, spaces, apostrophes, and hyphens.';

    if(!v.lastName.trim()) e.lastName = 'Last name is required';
    else if (!/^[A-Za-z\s'-]+$/.test(v.lastName.trim())) e.lastName = 'Only letters, spaces, apostrophes, and hyphens.';

    if(!v.email.trim()) e.email = 'An email is required';
    else if(!v.email.includes('@')) e.email = "Please provide a valid email"

    if(!v.companyName.trim()) e.companyName = "A company name is required"
    
    if (!v.phoneNum.trim()) {
        e.phoneNum = 'Phone number is required.';
    } else if (!/^\d+$/.test(v.phoneNum.trim())) {
        e.phoneNum = 'Phone number must contain only digits.';
    } else if (v.phoneNum.trim().length !== 10) {
        e.phoneNum = 'Phone number must be 10 digits.';
    }

    return e;
  }

  function onChange<K extends keyof typeof values>(key: K, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
    const e = validate({ ...values, [key]: val });
    setErrors((prev) => ({ ...prev, [key]: e[key] }));
  }

  function onBlur<K extends keyof typeof values>(key: K) {
    const e = validate(values);
    setErrors((prev) => ({ ...prev, [key]: e[key] }));
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setSubmitted(true);
    if (Object.keys(e).length > 0) return;
    window.alert('✅ Submitted!');
    setSubmitted(false)
  }

  const hasErrors = Object.keys(errors).length > 0;
  const showGlobalError = submitted && hasErrors;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className='w-full h-auto flex flex-col gap-6 opacity-100'
    >
  
        <p
          role={showGlobalError ? 'alert' : undefined}
          className={showGlobalError ? 'text-[18px] text-red-600' : 'hidden'}
        >
          Please fill in a valid value for all required fields:{' '}
          <span className="font-semibold">Name, Company Name, Email, Phone</span>
        </p>
   

      <div className="w-full h-auto flex flex-col gap-[7px]">
        <label
          htmlFor="firstName"
          className={["w-full h-[17px] font-semibold text-[16px] leading-none", 
            errors.firstName ?  "text-[#911B1B]"
            : "text-[#141414]"].join(' ')}
        >
          First Name*
        </label>

        <input
          id="firstName"
          name="firstName"
          value={values.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          onBlur={() => onBlur('firstName')}
          placeholder="First Name*"
          aria-invalid={Boolean(errors.firstName)}
          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          className={[
            'w-full py-[8px] h-[27px] px-[16px] rounded-[8px] border bg-[#F7F5F5] text-[#141414] outline-none ',
            errors.firstName
              ? 'border-red-500 focus:ring-2 focus:ring-red-300'
              : 'border-[#141414] focus:ring-2 focus:ring-[#0360E6]/40',
          ].join(' ')}
          required
        />
        {errors.firstName && (
          <p id="firstName-error" className=" mt-[-4px] text-xs text-red-600">
            {errors.firstName}
          </p>
        )}
      </div>

      <div className="w-full h-auto flex flex-col gap-[7px]">
        <label
          htmlFor="lastName"
          className={["w-full h-[17px] font-semibold text-[16px] leading-none", 
            errors.lastName ?  "text-[#911B1B]"
            : "text-[#141414]"].join(' ')}
        >
          Last Name*
        </label>

        <input
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          onBlur={() => onBlur('lastName')}
          placeholder="Last Name*"
          aria-invalid={Boolean(errors.lastName)}
          aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          className={[
            'w-full py-[8px] h-[27px] px-[16px] rounded-[8px] border bg-[#F7F5F5] text-[#141414] outline-none',
            errors.lastName
              ? 'border-red-500 focus:ring-2 focus:ring-red-300'
              : 'border-[#141414] focus:ring-2 focus:ring-[#0360E6]/40',
          ].join(' ')}
          required
        />
        {errors.lastName && (
          <p id="lastName-error" className="mt-[-4px] text-xs text-red-600">
            {errors.lastName}
          </p>
        )}
      </div>


      <div className="w-full h-auto flex flex-col gap-[7px]">
        <label
          htmlFor="companyName"
          className={["w-full h-[17px] font-semibold text-[16px] leading-none", 
            errors.companyName ?  "text-[#911B1B]"
            : "text-[#141414]"].join(' ')}
        >
          Company Name*
        </label>

        <input
          id="companyName"
          name="companyName"
          value={values.companyName}
          onChange={(e) => onChange('companyName', e.target.value)}
          onBlur={() => onBlur('companyName')}
          placeholder="Company Name*"
          aria-invalid={Boolean(errors.companyName)}
          aria-describedby={errors.companyName ? 'companyName-error' : undefined}
          className={[
            'w-full py-[8px] h-[27px] px-[16px] rounded-[8px] border bg-[#F7F5F5] text-[#141414] outline-none',
            errors.companyName
              ? 'border-red-500 focus:ring-2 focus:ring-red-300'
              : 'border-[#141414] focus:ring-2 focus:ring-[#0360E6]/40',
          ].join(' ')}
          required
        />
        {errors.companyName && (
          <p id="companyName-error" className="mt-[-4px] text-xs text-red-600">
            {errors.companyName}
          </p>
        )}
      </div>
      <div className="w-full h-auto flex flex-col gap-[7px]">
        <label
          htmlFor="email"
          className={["w-full h-[17px] font-semibold text-[16px] leading-none", 
            errors.email ?  "text-[#911B1B]"
            : "text-[#141414]"].join(' ')}
        >
          Email*
        </label>

        <input
          id="email"
          name="email"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => onBlur('email')}
          placeholder="Email*"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={[
            'w-full py-[8px] h-[27px] px-[16px] rounded-[8px] border bg-[#F7F5F5] text-[#141414] outline-none',
            errors.email
              ? 'border-red-500 focus:ring-2 focus:ring-red-300'
              : 'border-[#141414] focus:ring-2 focus:ring-[#0360E6]/40',
          ].join(' ')}
          required
        />
        {errors.email && (
          <p id="email-error" className="mt-[-4px] text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="w-full h-auto flex flex-col gap-[7px]">
        <label
          htmlFor="phoneNum"
          className={["w-full h-[17px] font-semibold text-[16px] leading-none", 
            errors.phoneNum ?  "text-[#911B1B]"
            : "text-[#141414]"].join(' ')}
        >
          Phone Number*
        </label>

        <input
          id="phoneNum"
          name="phoneNum"
          value={values.phoneNum}
          onChange={(e) => onChange('phoneNum', e.target.value)}
          onBlur={() => onBlur('phoneNum')}
          placeholder="Phone Number*"
          aria-invalid={Boolean(errors.phoneNum)}
          aria-describedby={errors.phoneNum ? 'phoneNum-error' : undefined}
          className={[
            'w-full py-[8px] h-[27px] px-[16px] rounded-[8px] border bg-[#F7F5F5] text-[#141414] outline-none',
            errors.phoneNum
              ? 'border-red-500 focus:ring-2 focus:ring-red-300'
              : 'border-[#141414] focus:ring-2 focus:ring-[#0360E6]/40',
          ].join(' ')}
          required
        />
        {errors.phoneNum && (
          <p id="phoneNum-error" className="mt-[-4px] text-xs text-red-600">
            {errors.phoneNum}
          </p>
        )}
      </div>

      <div className="flex justify-center items-center mt-[5px]">
        <button
          type="submit"
          className=" cursor-pointer text-[24px] flex justify-center items-center rounded-[12px] bg-[#0360E6] p-[16px] w-[268px] h-[49px] font-semibold text-white transition-colors hover:bg-[#161641] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] focus-visible:ring-offset-2"
        >
          See plans & pricing
        </button>
      </div>
    </form>
  );
}
