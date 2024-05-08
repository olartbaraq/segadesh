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
import { BreadcrumbWithCustomSeparator } from "@/components/SeparateLink";
import Image from "next/image";
import { QUOTES, QUOTE_FEATURES } from "@/texts/projects";

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
      message: "I know you're busy but please enter your name",
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
      message: "i will be glad if you leave me a message",
    }),
});

const requiredForm = contactFormSchema.required();

const About = () => {
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
    })
      .then((res) => res.json())
      .then((response) => {
        toast({
          title: "Thanks for reaching out",
          description: "I'll get back to you shortly!",
        });
        setSending(false);
        form.reset();
        //alert(response.message);
      })
      .catch((err) => {
        toast({
          title: "Thanks for reaching out",
          description: "I'll get back to you shortly!",
        });
        setSending(false);
        form.reset();
        //alert(err);
      });
  }

  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto"
          src={"/Rectangle.png"}
          alt="about us image"
          height={70}
          width={800}
          priority={true}
        />

        <div className="absolute top-1/3 left-[20%] flex flex-col space-y-1 items-start">
          <h2 className="capitalize text-white text-3xl leading-relaxed">
            about us
          </h2>
          <h5 className="text-white text-xl leading-relaxed">
            <BreadcrumbWithCustomSeparator pageName="About Us" />
          </h5>
        </div>

        <div className="border-t-segRed border-t-4 w-64 h-auto flex flex-col space-y-2 items-start px-5 py-10 bg-white absolute top-1/4 right-28 opacity-70">
          <h6 className="uppercase text-xs text-black leading-relaxed">
            call us today
          </h6>
          <h2 className="font-bold text-xl leading-relaxed text-segBlue">
            +234 8166893113
          </h2>
        </div>
      </div>

      <div className="w-full flex items-center">
        <div className="mx-auto my-auto p-5 flex flex-col items-start justify-between lg:max-w-screen-lg">
          <div className="w-full flex flex-row space-x-2 items-start">
            <Image
              src={"/crane.png"}
              alt="about us image"
              height={200}
              width={300}
              priority={true}
              //className="w-1/2 h-auto"
            />
            <Image
              src={"/industrial.png"}
              alt="about us image"
              height={200}
              width={300}
              priority={true}
              //className="w-1/2 h-auto"
            />
            <Image
              src={"/Rectangle5.png"}
              alt="about us image"
              height={300}
              width={310}
              priority={true}
              //className="w-1/2 h-auto"
            />
          </div>

          <h2 className="capitalize text-xl w-[70%] mt-10 leading-relaxed font-bold self-center">
            We are providing the best customer service
          </h2>

          <div className="w-full flex flex-row items-center space-x-5">
            <h3 className="text-sm text-black w-[70%] text-justify my-3 leading-7">
              Segadesh is a leading provider of comprehensive technical
              services, headquartered in Ibadan, Nigeria. With over 25 years of
              experience and a proven track record of success, we have
              established ourselves as a trusted partner for businesses across
              various industries. Our expertise spans a wide range of services,
              including mechanical, electrical, construction, office automation,
              and energy metering solutions. We take pride in our ability to
              deliver tailored solutions that address the unique challenges and
              requirements of each client, enabling them to achieve operational
              excellence and maximize their potential. At Segadesh, we
              understand the importance of staying ahead of the curve in an
              ever-evolving technological landscape. Our team of highly skilled
              professionals combines extensive knowledge and experience with a
              commitment to continuous learning and innovation. This approach
              ensures that we provide our clients with cutting-edge solutions
              that drive efficiency, productivity, and long-term sustainability.
              Over the years, we have successfully completed more than 147
              projects, cementing our reputation as a reliable and
              results-driven partner. Our unwavering dedication to quality,
              attention to detail, and commitment to meeting deadlines have
              earned us the trust and loyalty of clients across various sectors.
              As we continue to grow and expand our capabilities, our core
              values remain unchanged: integrity, innovation, and a relentless
              pursuit of excellence. We take pride in our ability to foster
              long-lasting relationships with our clients, built on a foundation
              of transparency, open communication, and a shared commitment to
              success. At Segadesh, we are more than just a service provider; we
              are a strategic partner dedicated to helping businesses thrive in
              an increasingly competitive and dynamic market. Join us on this
              journey, and together, we will unlock new frontiers of growth and
              success.
            </h3>

            <Image
              src={"/Group52.png"}
              alt="about us experience image"
              priority={true}
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Get a Project Quote */}
      <div className="w-full flex items-center">
        <div className="w-full relative h-auto">
          <Image
            src={"/Rectangle29.png"}
            alt="get a quote image"
            priority={true}
            height={300}
            width={500}
            className="w-full h-auto"
          />

          <div className="w-auto h-auto flex flex-col items-center space-y-2 p-4 absolute top-[20%] left-[5%]">
            <h3 className="capitalize text-white font-light text-2xl leading-relaxed">
              get a quote
            </h3>
            <h2 className="font-bold text-white text-4xl leading-relaxed capitalize">
              Build your future today
            </h2>
            <p className="font-normal text-white text-sm leading-relaxed w-1/2">
              Unlock new possibilities and drive growth with our tailored
              solutions. Request a quote today and let our experts craft a
              strategy that aligns with your unique business needs.
            </p>
          </div>

          <div className="absolute bottom-1 left-24 w-auto p-3 flex space-x-4 items-center">
            {QUOTES.map((quote) => (
              <div
                key={quote.id}
                className="w-auto h-auto px-2 py-6 flex space-x-2 items-center bg-white shadow-black"
              >
                <div className="bg-segRed w-10 h-10 flex items-center justify-center">
                  <h2 className="text-white text-sm font-semibold">
                    {quote.id}
                  </h2>
                </div>
                <div className="w-auto flex flex-col items-start space-y-1">
                  <h3 className="text-segBlue text-xs leading-relaxed self-center">
                    {quote.name}
                  </h3>
                  <h6 className="text-black text-[10px] leading-relaxed">
                    {quote.more}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form for getting Quote */}

      <div className=" w-full flex items-center">
        <div className="p-5 flex items-center justify-center w-full space-x-10">
          <div className="w-auto h-auto p-6 items-center flex">
            <div className="w-full ">
              <h6 className="uppercase text-segRed text-xs font-light self-start">
                appointment
              </h6>
              <h2 className="capitalize text-segBlue font-semibold leading-relaxed text-2xl mb-5">
                Request a quote
              </h2>
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
                        className="w-50 h-32 flex space-x-5 items-center self-center"
                      >
                        <hr className="border border-segRed bg-segRed w-1 h-10" />
                        <Loader2
                          className="mr-2 h-4 w-4 animate-spin"
                          color="#00215B"
                        />
                        <p className="text-xl font-bold text-segBlue">
                          Sending
                        </p>
                        <hr className="border border-segRed bg-segRed w-1 h-10" />
                      </button>
                    ) : (
                      <button
                        className="w-50 h-32 flex space-x-5 items-center self-center"
                        type="submit"
                      >
                        <hr className="border border-segRed bg-segRed w-1 h-10" />
                        <p className="text-xl font-bold text-segBlue">SUMBIT</p>
                        <hr className="border border-segRed bg-segRed w-1 h-10" />
                      </button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>

          <div className="w-auto px-5 py-10 flex flex-col items-start space-y-10">
            {QUOTE_FEATURES.map((feat) => (
              <div key={feat.id} className="flex space-x-4 items-center w-auto">
                <Image
                  className="w-16 h-16"
                  src={feat.icon}
                  alt="technical=icons"
                  height={14}
                  width={14}
                  priority={true}
                />
                <div className="flex flex-col space-y-1 items-start w-80">
                  <h2 className="text-black font-normal leading-relaxed text-lg">
                    {feat.title}
                  </h2>
                  <p className="text-black font-light text-xs leading-relaxed w-auto">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
