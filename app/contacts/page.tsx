"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import Image from "next/image";
import { BreadcrumbWithCustomSeparator } from "@/components/SeparateLink";

type contactPayload = {
  email: string;
  name: string;
  phone: string;
  message: string;
};

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be of word of alphabets",
    })
    .min(2, {
      message: "Please enter your name",
    })
    .max(150, {
      message: "Name must be not exit 150 characters.",
    }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be contain @ and .",
    })
    .email({
      message: "Email must contain @ and .",
    }),
  phone: z
    .string({
      required_error: "Phone Number is required",
      invalid_type_error: "Phone Number must be only numbers",
    })
    .length(11, {
      message: "Mobile Number must be 11 digits.",
    }),
  message: z
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be of word of alphabets",
    })
    .min(2, {
      message: "We 'll be glad if you leave us a message",
    }),
});

const requiredForm = contactFormSchema.required();

const Contacts = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState<boolean>(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof requiredForm>>({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof requiredForm>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const apiEndpoint = "/api/email";

    setSending(true);

    const body: contactPayload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
    }).then((res) => {
      if (res.status == 200) {
        toast({
          title: "Thanks for reaching out",
          description: "We'll get back to you shortly!",
        });
        setSending(false);
        form.reset();
      } else {
        toast({
          title: "Oops!!!",
          description: "A problem occurred, Try again later!!!",
        });
        setSending(false);
        form.reset();
      }
    });
  }

  return (
    <div className="max-w-full overflow-x-hidden">
      {/* Contact Heading */}
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto"
          src={"/contactus.png"}
          alt="project image"
          height={70}
          width={800}
          priority={true}
        />

        <div className="absolute top-[15%] md:top-1/3 left-10 md:left-[20%] flex flex-col space-y-1 items-start">
          <h2 className="capitalize text-white text-lg md:text-3xl lg:text-5xl leading-relaxed">
            contacts
          </h2>
          <h5 className="text-white md:text-xl lg:text-3xl leading-relaxed">
            <BreadcrumbWithCustomSeparator pageName="Contacts" />
          </h5>
        </div>
      </div>

      <div className="mx-auto my-10 p-5 flex flex-col items-center justify-center md:max-w-screen-md">
        {/* Contact Us Form */}
        <div className="w-full flex items-center">
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col items-center space-y-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="border-solid border-segRed border-l-4 border-b-4">
                          <Input
                            className="h-10 focus:outline-segBlue bg-gray-200 border-none px-5 text-lg"
                            type="text"
                            id="name"
                            placeholder="ENTER YOUR NAME"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="border-solid border-segRed border-l-4 border-b-4">
                          <Input
                            className="h-10 focus:outline-segBlue bg-gray-200 border-none px-5 text-lg"
                            type="email"
                            id="email"
                            placeholder="ENTER YOUR EMAIL"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="border-solid border-segRed border-l-4 border-b-4">
                          <Input
                            className="h-10 focus:outline-segBlue bg-gray-200 border-none px-5 text-lg"
                            type="tel"
                            id="phone"
                            placeholder="PHONE NUMBER"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="border-solid border-segRed border-l-4 border-b-4">
                          <Textarea
                            className="h-24 focus:outline-segRed bg-gray-200 border-none px-5 text-lg"
                            placeholder="YOUR MESSAGE"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full items-center flex justify-center">
                  {sending ? (
                    <button
                      disabled
                      className="w-50 h-18 flex space-x-5 items-center self-center"
                    >
                      <hr className="border border-segRed bg-segRed w-1 h-10" />
                      <Loader2
                        className="mr-2 h-4 w-4 animate-spin"
                        color="#00215B"
                      />
                      <p className="text-xl font-bold text-segBlue">Sending</p>
                      <hr className="border border-segRed bg-segRed w-1 h-10" />
                    </button>
                  ) : (
                    <button
                      className="w-50 h-18 flex space-x-5 items-center self-center"
                      type="submit"
                    >
                      <hr className="border border-segRed bg-segRed w-1 h-10" />
                      <p className="text-xl font-bold text-segBlue">
                        Send Message
                      </p>
                      <hr className="border border-segRed bg-segRed w-1 h-10" />
                    </button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Address */}
        <div className="flex w-full flex-col items-center space-y-3 mt-10">
          <Image
            src={"/Map.png"}
            alt={"map address"}
            height={150}
            width={400}
            className="w-full h-auto mb-10"
            priority={true}
          />

          <div className="w-full flex space-x-4 items-start">
            {/* Physical Address */}
            <div className="border-l-segRed border-l-4 flex flex-col px-5 py-2 items-start space-y-2 w-60 h-auto">
              <h3 className="uppercase font-thin text-black text-xs leading-relaxed">
                company address
              </h3>
              <h6 className="font-bold text-segBlue leading-relaxed text-base">
                Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
              </h6>
            </div>

            {/* Company Phone */}
            <div className="w-auto flex space-x-2 items-center">
              <Image
                src={"/iconcall.svg"}
                alt={"call icon"}
                height={50}
                width={50}
                //className="self-center"
                priority={true}
              />

              <div className="w-auto flex flex-col space-y-2 items-start">
                <h3 className="uppercase font-thin text-black text-xs leading-relaxed">
                  company Phones
                </h3>
                <h6 className="font-bold text-segBlue leading-relaxed text-base">
                  +2348173054765
                </h6>
                <h6 className="font-bold text-segBlue leading-relaxed text-base">
                  +2348173054765
                </h6>
              </div>
            </div>

            {/* Company Emails */}
            <div className="w-auto flex space-x-2 items-center">
              <Image
                src={"/iconemail.svg"}
                alt={"email icon"}
                height={50}
                width={50}
                // className="w-full h-auto"
                priority={true}
              />

              <div className="w-auto flex flex-col space-y-2 items-start">
                <h3 className="uppercase font-thin text-black text-xs leading-relaxed">
                  company emails
                </h3>
                <h6 className="font-bold text-segBlue leading-relaxed text-base">
                  segadesh@yahoo.com
                </h6>
                <h6 className="font-bold text-segBlue leading-relaxed text-base">
                  segadesh@yahoo.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
