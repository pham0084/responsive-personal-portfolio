import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';



type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({ }: Props) {
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        emailjs.sendForm('service_t8csh69', 'template_w7dq9tk', e.currentTarget, 'NTGlwX-YYDSBRchZM')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
          e.currentTarget.reset()
      }
      
      // example usage:
      function MyComponent() {
        return (
          <form onSubmit={sendEmail}>
            {/* form fields here */}
            <button type="submit">Send</button>
          </form>
        );
      }


    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left
                     xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-evenly'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl items-center '>
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font font-semibold text-center'>
                    Reach out to me if you want.{" "}
                </h4>

               


                <form onSubmit={sendEmail}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>

                        <input {...register('name')} placeholder='Name' className='contactInput' name='name'
                            type="text" />

                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" name='email' />


                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' name='subject' />

                    <textarea placeholder='Message' className='contactInput' name='message'/>

                    <button

                         type='submit'
                        className='bg-[#5C9EAD] py-5 px-10 rounded-md text-gray-100 font-bold text-lg hover:opacity-100 opacity-60 '> Submit</button>

                </form>



            </div>
        </div>
    )
}

export default ContactMe