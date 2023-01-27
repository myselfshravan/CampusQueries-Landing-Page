import Image from "next/future/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-faqs.jpg";

const faqs = [
  [
    {
      question: "What is Campus Queries",
      answer:
        "Campus Queries is a platform that allows students to directly address their queries to the concerned authorities.",
    },
    {
      question: " What does Campus Queries do",
      answer: "It takes the complaints given by the student and forwards it to the concerned authorities and makes sure that it would be solved.",
    },
    {
      question: "What does the lost and found feature do?",
      answer:
        "It allows the students to post the lost items and the found items so that the owner can get it back.",
    },
  ],
  [
    {
      question: "How are the tems found verified to the owner?",
      answer:
        "the images and description of the item uploaded by the finder is matched against the images and description of the item uploaded by the searcher and then it's compared to find the owner of the product.",
    },
    {
      question:
        "How do I get notified when my item is found?",
      answer:
        "Once our algorithm finds the owner of the item, we will notify you via email.",
    },
    {
      question:
        "What do I do if the finder is not responding and not returning my item",
      answer:
        "You can contact our support team and we will try to help you out.",
    },
  ],
  [
    {
      question: "How do I recieve my lost item?",
      answer:
        "Once the owner of the item is found, we will notify you via email and you can contact the finder to recieve your item at a general location.",
    },
    {
      question: "Can I find food items?",
      answer: "If the food item is not perishable, then yes you can.",
    },
    {
      question: "How do I change my password?",
      answer:
        "Request a password reset link from college tech department and follow the instructions.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
