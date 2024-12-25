'use client'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/lib/forms/contactConfig';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            salesTeam: '',
            note: '',
            terms: false,
        },
    });
    const servicesList = [
        {
            id: "1",
            services: "option1"
        },
        {
            id: "2",
            services: "option2"
        },
        {
            id: "3",
            services: "option3"
        }

    ]
    return (
        <div className='pt-[100px] pb-[42px] px-[20px] lg:pb-[170px] sm:pb-[100px] xl:pb-[232px] flex flex-col '>
            <Form {...form} >
                <form className='flex flex-col items-center'>

                    <p className='text-[24px] font-[700] leading-[31px] lg:text-[44px] lg:leading-[57px] text-center'>Contact our sales team</p>
                    <p className='text-[14px] font-[400] lg:text-[18px] lg:leading-[28px] leading-[22px] text-app-gray text-center mt-[16px] lg:w-[768px]'>Built for every team across your company, Jobify Enterprise boosts productivity with upgraded security and account support. Contact us today
                    </p>
                    <p className='text-[14px] font-[400] leading-[22px] text-app-gray text-center lg:text-[18px] lg:leading-[28px]'>to unlock:</p>
                    <div className='bg-white mt-[28px] p-[16px] md:p-[30px] rounded-[16px] '>
                        <div className='grid sm:grid-cols-2 grid-cols-1  gap-y-[20px] sm:gap-y-[40px] sm:gap-x-[20px]  lg:w-[946px] ' >

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col p-0'>
                                        <FormLabel className='text-[14px] font-[700] leading-[18px] gap-y-[10px]'>Your Name </FormLabel>
                                        <FormControl >
                                            <Input placeholder="Enter your name" {...field} className='rounded-[16px] bg-[#F6F8F9] text-app-gray text-[14px] font-[400] leading-[22px] border-transparent xl:py-[18px] py-[12px]' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col p-0'>
                                        <FormLabel className='text-[14px] font-[700] leading-[18px] '>Email</FormLabel>
                                        <FormControl >
                                            <Input placeholder="Enter your email" {...field} className='rounded-[16px] bg-[#F6F8F9] text-app-gray text-[14px] font-[400] leading-[22px] border-transparent xl:py-[18px] py-[12px]' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col p-0'>
                                        <FormLabel className='text-[14px] font-[700] leading-[18px] '>Phone Number </FormLabel>
                                        <FormControl >
                                            <Input placeholder="Enter your phone number" {...field} className='rounded-[16px] bg-[#F6F8F9] text-app-gray text-[14px] font-[400] leading-[22px] border-transparent xl:py-[18px] py-[12px]' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="salesTeam"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col p-0'>
                                        <FormLabel className='text-[14px] font-[700] leading-[18px] '>How Can Our Sales Team Help? </FormLabel>
                                        <FormControl >
                                            <Select

                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className='rounded-[16px] bg-[#F6F8F9] text-app-gray text-[14px] font-[400] leading-[22px] border-transparent xl:py-[18px] py-[12px]'>
                                                    <SelectValue
                                                        placeholder="What you want"
                                                    />
                                                </SelectTrigger>
                                                <SelectContent className='bg-white'>
                                                    {servicesList &&
                                                        servicesList.map((item) => (
                                                            <SelectItem
                                                                key={item.id}
                                                                value={item.id}
                                                            >
                                                                {item.services}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </div>

                        <FormField
                            control={form.control}
                            name="note"
                            render={({ field }) => (
                                <FormItem className='flex flex-col p-0 mt-[20px] lg:mt-[40px]'>
                                    <FormLabel className='text-[14px] font-[700] leading-[18px] gap-y-[10px]'>Anything Else You’d Like Us To Know?</FormLabel>
                                    <FormControl >
                                        <Textarea placeholder="Type anything" {...field} className='rounded-[16px] bg-[#F6F8F9] text-app-gray text-[14px] font-[400] leading-[22px] h-[183px] border-transparent pt-[18px]' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-col lg:flex-row md:justify-between items-center mt-[32px] xl:mt-[60px]">
                            <FormField
                                control={form.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center gap-x-2 space-x-0 space-y-0 ">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className='rounded-[4px] border-[1px] border-app-gray'
                                            />
                                        </FormControl>
                                        <FormLabel className='font-[500] text-[12px] leading-[15px] md:font-[600] md:text-[16px] md:leading-[20px]'>
                                            I agree to Loom's Terms of Service and
                                            Privacy Policy.
                                        </FormLabel>
                                    </FormItem>
                                )}
                            />

                            <Button className='bg-app-lightgreen text-black rounded-[12px] mt-[40px] lg:mt-0 text-[12px] font-[700] leading-[15px]  w-full lg:w-[160px]'>Contact Sales</Button>
                        </div>

                    </div>




                </form>
            </Form>
        </div>

    )
}
