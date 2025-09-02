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
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <h4>Create Event</h4>
                </div>
                <div>
                    <span>Basic Info</span>
                    <div>
                        <div>
                            <div>
                                <div><h4>upload Cover Image</h4></div>
                                <div>
                                    <Button>
                                        <span>icon</span>
                                        <span>Upload image</span>
                                    </Button>
                                    <Button>Remove</Button>
                                </div>
                                <div>
                                    <p>
                                        Click to browse, or drag and drop a file here, png*,jpeg* files under 10MB, 730 x 300px
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
            <Button>Create Event</Button>
         </form>
        </div>
    </>
  )
}
