import React from 'react'
import AccordionItem from '../components/AccordionItem';

function Accordion({parentFunction}) {
  return (
    <div className="flex flex-col gap-1 text-sm justify-center  my-4 mx-6 lg:mx-auto lg:mr-20 py-12">
        <h1 className="text-3xl font-bold mb-4">FAQ</h1>
        <AccordionItem parentFunction={parentFunction} title="How many team members can I invite?">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</AccordionItem>
        
        <AccordionItem parentFunction={parentFunction} title="What is the maximum file upload size?">No more than 2GB. All files in your account must fit your allotted storage space.</AccordionItem>

        <AccordionItem parentFunction={parentFunction} title="How do I reset my password?">Click “Forgot password” from the login page or “Change password” from your profile page.
        A reset link will be emailed to you.</AccordionItem>

        <AccordionItem parentFunction={parentFunction} title="Can I cancel my subscription?">Yes! Send us a message and we’ll process your request no questions asked.</AccordionItem>
        
        <AccordionItem parentFunction={parentFunction} title="Do you provide additional support?">Chat and email support is available 24/7. Phone lines are open during normal business hours.</AccordionItem>
    </div>
  )
}

export default Accordion