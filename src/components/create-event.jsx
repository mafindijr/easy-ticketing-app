import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './button';
import { Input } from './input';


export default function createEventForm() {

    const { register, handleSubmit, formState: {errors}, reset  } = useForm();

    const onSubmit = (data) => {

        console.log("event created successfully", data);
    }

  return (
    <>
        <div>
            <div>
                <span>icon</span>
                <span>Back to Events</span>
            </div>
         <form>
            <div>
                <div>
                    <h4>Create Event</h4>
                </div>
                <div>
                    <span>Basic Info</span>
                    <div></div>
                </div>
                <div>
                    <span>Date and Location</span>
                    <div></div>
                </div>
                <div>
                    <span>Set Ticketing Price</span>
                    <div></div>
                </div>
            </div>
            <Button></Button>
         </form>
        </div>
    </>
  )
}
