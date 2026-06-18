"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";

const faqs = [
  {
    q: "What is KawaCoffee?",
    a: "KawaCoffee is a Ugandan company building digital tools for coffee farmers and agriculture. Our flagship app, KawaScan, diagnoses plant disease from a photo; we also run a marketplace and an agronomy knowledge guide.",
  },
  {
    q: "Are you planning to support iPhone?",
    a: "Android comes first because it's what most farmers use, and the app is still in active testing. An iOS version is on the roadmap — join the list and we'll let you know when it's ready.",
  },
  {
    q: "How much does it cost to use KawaCoffee?",
    a: "Getting started is free. KawaScan gives you free scans to begin, then you can buy scan packs with Mobile Money — from UGX 2,000 for 10 scans. The marketplace is free to post on.",
  },
  {
    q: "What happens after the free testing period?",
    a: "Nothing is locked away. Once your free scans are used, you simply top up with a scan pack whenever you need one — there's no subscription and no auto-charge.",
  },
  {
    q: "Is KawaCoffee only available in Uganda?",
    a: "We're built and tested in Uganda first, but the tools work anywhere coffee grows. We're expanding across East Africa — tell us where you farm and we'll prioritise it.",
  },
];

export default function FAQ() {
  return (
    <section className="faq ksection" id="faq">
      <div className="container">
        <div className="fgrid">
          <div className="sec-head">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered.</h2>
            <p>
              Can&apos;t find what you need? Reach our team on{" "}
              <a
                href={siteConfig.social.brandInstagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                Instagram
              </a>
              .
            </p>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-0"
            className="list"
          >
            {faqs.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
                className="qitem"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="qtrigger">
                    {item.q}
                    <span className="pm">
                      <Plus />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="ans">{item.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
